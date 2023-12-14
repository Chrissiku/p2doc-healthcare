/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Web5 } from "@web5/api/browser";
import React, { createContext, useEffect, useState } from "react";
import { publicDid } from "./constants";

export const Web5Context = createContext();

const ContextProvider = ({ children }) => {
  const [web5, setWeb5] = useState(null);
  const [did, setDid] = useState(null);
  const [userType, setUserType] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [loadingDoctor, setLoadingDoctor] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const connectWeb5 = async () => {
      try {
        const { web5, did } = await Web5.connect();
        setWeb5(web5);
        setDid(did);
      } catch (error) {
        console.error("Error Connecting to web5 : ", error);
      }
    };

    connectWeb5();
  }, []);

  const schema = {
    context: "https://schema.org/",
    type: "Person",
    get uri() {
      return this.context + this.type;
    },
  };

  const protocolDefinition = {
    protocol: import.meta.env.VITE_PROTOCOL_URL,
    published: true,
    types: {
      users: {
        schema: `${schema.uri}/users`,
        dataFormats: ["application/json"],
      },
      patientProfile: {
        schema: `${schema.uri}/patientProfile`,
        dataFormats: ["application/json"],
      },
      doctorProfile: {
        schema: `${schema.uri}/doctorProfiles`,
        dataFormats: ["application/json"],
      },
      medicalRecords: {
        schema: `${schema.uri}/medicalRecord`,
        dataFormats: ["application/json"],
      },
      bookAppointment: {
        schema: `${schema.uri}/appointment`,
        dataFormats: ["application/json"],
      },
    },
    structure: {
      users: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "anyone", can: "read" },
        ],
      },
      medicalRecords: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "recipient", of: "medicalRecords", can: "read" },
        ],
      },
      patientProfile: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "recipient", of: "patientProfile", can: "read" },
        ],
      },
      doctorProfile: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "anyone", can: "read" },
        ],
      },
      bookAppointment: {
        $actions: [
          { who: "anyone", can: "write" },
          { who: "recipient", of: "bookAppointment", can: "read" },
        ],
      },
    },
  };

  useEffect(() => {
    const installProtocol = async () => {
      try {
        // console.log("Installing protocol ...");
        const { protocol, status } = await web5.dwn.protocols.configure({
          message: {
            definition: protocolDefinition,
          },
        });

        await protocol.send(did);
        // console.log("Protocol installed and sent successfully . . .");
      } catch (error) {
        console.error("Error Installing Protocol : ", error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await web5.dwn.records.query({
          from: publicDid,
          message: {
            filter: {
              protocol: protocolDefinition.protocol,
              schema: protocolDefinition.types.doctorProfile.schema,
            },
          },
        });

        if (response.status.code === 200) {
          const doctorProfile = await Promise.all(
            response.records.map(async (record) => {
              const data = await record.data.json();
              return {
                ...data,
                recordId: record.id,
              };
            })
          );
          setDoctorList(doctorProfile);
          setLoadingDoctor(false);
          return doctorProfile;
        } else {
          console.error("error fetching this profile", response.status);
          return [];
        }
      } catch (error) {
        console.error("error fetching doctor profile :", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await web5.dwn.records.query({
          from: publicDid,
          message: {
            filter: {
              protocol: protocolDefinition.protocol,
              schema: protocolDefinition.types.users.schema,
            },
          },
        });

        if (response.status.code === 200) {
          const usersProfile = await Promise.all(
            response.records.map(async (record) => {
              const data = await record.data.json();
              return {
                ...data,
                recordId: record.id,
              };
            })
          );
          // // console.log(usersProfile)
          setUsers(usersProfile);
          setLoadingDoctor(false);
          return usersProfile;
        } else {
          console.error("error fetching users", response.status);
          return [];
        }
      } catch (error) {
        console.error("error fetching all users :", error);
      }
    };

    if (web5 && did) {
      installProtocol();
      fetchUsers();
      fetchDoctors();
    }
  }, [web5, did]);

  // console.log("user : ", users);

  function doesDidExist(id, array) {
    return array.some((item) => item.did === id);
  }

  const didExist = doesDidExist(did, users);

  const saveUser = async (doctor, patient) => {
    // console.log("Saving User ...");

    try {
      const userData = { did: did, doctor: doctor, patient: patient };
      const { record, status } = await web5.dwn.records.write({
        data: { ...userData },
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "users",
          schema: protocolDefinition.types.users.schema,
          recipient: publicDid,
          published: true,
        },
      });
      // console.log("user Created : ", { record, status });

      // Send to public and private did
      await record.send(publicDid);

      // console.log("user sent");
    } catch (error) {
      console.error("Error Creating user user : ", error);
    }
    // }
  };

  const value = {
    web5,
    did,
    userType,
    setUserType,
    saveUser,
    protocolDefinition,
    doctorList,
    loadingDoctor,
    users,
  };

  return (
    <div>
      <Web5Context.Provider value={value}>{children}</Web5Context.Provider>
    </div>
  );
};

export default ContextProvider;
