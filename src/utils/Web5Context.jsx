/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Web5 } from "@web5/api/browser";
import React, { createContext, useEffect, useState } from "react";

export const Web5Context = createContext();

const ContextProvider = ({ children }) => {
  const [web5, setWeb5] = useState(null);
  const [did, setDid] = useState(null);
  const [userType, setUserType] = useState('');
  const [medicalRecords, setMedicalRecords] = useState([]);

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

  useEffect(() => {
    const schema = {
      context: "https://schema.org/",
      type: "Person",
      get uri() {
        return this.context + this.type;
      },
    };

    const protocolDefinition = {
      protocol: "http://localhost:5173",
      published: true,
      types: {
        patientProfile: {
          schema: schema.uri,
          dataFormats: ["application/json"],
        },
        doctorProfile: {
          schema: schema.uri,
          dataFormats: ["application/json"],
        },
        medicalRecords: {
          schema: schema.uri,
          dataFormats: ["application/json"],
        },
      },
      structure: {
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
      },
    };

    const installProtocol = async () => {
      try {
        console.log("Installing protocol ...");
        const { protocol, status } = await web5.dwn.protocols.configure({
          message: {
            definition: protocolDefinition,
          },
        });

        await protocol.send(did);
        console.log("Protocol installed and sent successfully . . .");
      } catch (error) {
        console.error("Error Installing Protocol : ", error);
      }
    };

    if (web5 && did) {
      installProtocol();
    }
  }, [web5, did]);

  const value = { web5, did, userType, setUserType };

  return (
    <div>
      <Web5Context.Provider value={value}>{children}</Web5Context.Provider>
    </div>
  );
};

export default ContextProvider;