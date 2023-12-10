import {
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  PlusCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import { useContext, useEffect, useState } from "react";
import { Web5Context } from "../utils/Web5Context";

const Patient = () => {
  const { web5, did, protocolDefinition, setUserType } = useContext(
    Web5Context
  );
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching patient Profile");
        const response = await web5.dwn.records.query({
          from: did,
          message: {
            filter: {
              protocol: protocolDefinition.protocol,
              schema: protocolDefinition.types.patientProfile.schema,
            },
          },
        });

        if (response.status.code === 200) {
          const patientProfile = await Promise.all(
            response.records.map(async (record) => {
              const data = await record.data.json();
              return {
                ...data,
                recordId: record.id,
              };
            })
          );
          setPatientData(patientProfile[patientProfile.length - 1]);
          return patientProfile;
        } else {
          console.error("error fetching this profile", response.status);
          return [];
        }
      } catch (error) {
        console.error("error fetching patient profile :", error);
      }
    };

    fetchData();
  }, []);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getMonth() < birthDate.getMonth())
    ) {
      return age - 1;
    } else {
      return age;
    }
  };

  return (
    <div className="w-full mx-auto bg-og-blue p-5">
      <div className="w-full mx-auto flex flex-row items-start justify-center space-x-5">
        <aside className="w-auto mx-auto">
          <div className="flex flex-col items-center justify-center space-y-10 h-[500px]">
            <div
              className="p-3 hover:bg-[#fff9] rounded-lg text-white 
              hover:text-olive-green transition-all duration-300"
            >
              <span className="sr-only">menu</span>
              <Squares2X2Icon className="h-8 w-8" />
            </div>

            <button
              type="button"
              onClick={() => setUserType(null)}
              className="p-3 hover:bg-[#fff9] rounded-lg text-white 
              hover:text-olive-green transition-all duration-300"
            >
              <span className="sr-only">menu</span>
              <ArrowLeftOnRectangleIcon className="h-8 w-8" />
            </button>
          </div>
        </aside>
        <div className="flex-1 mx-auto bg-[#f7f7f7] rounded-[60px] px-10 py-7">
          <div className="w-full mx-auto flex flex-col items-start justify-start space-y-[50px]">
            <nav className="w-full inline-flex item-center justify-end">
              <button
                type="button"
                className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#D9D9D9] border-0 border-og-blue rounded-2xl"
              >
                <div className="text-[#9e9e9e] inline-flex space-x-3 items-end justify-between">
                  <span>{did.slice(0, 20) + "..." + did.slice(-8)}</span>
                  <span>
                    <DocumentDuplicateIcon className="h-5 w-5" />
                  </span>
                </div>
              </button>
            </nav>

            <div className="w-full mx-auto space-y-5">
              <div className="w-full inline-flex item-center justify-between">
                <h2 className="text-[36px] font-normal">
                  Welcome{" "}
                  <span className="text-olive-green font-bold">
                    {patientData.name}!
                  </span>
                </h2>
                <button
                  type="button"
                  className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-2xl"
                >
                  <span className="text-og-[#333]">
                    <PlusCircleIcon className="h-8 w-8" />
                  </span>
                  <span className="text-[20px] font-normal">
                    Book Appointment
                  </span>
                </button>
              </div>

              <div className="w-full inline-flex item-center justify-between gap-x-16">
                <div className="bg-[#41CBE2] rounded-xl p-4 w-2/5">
                  <div className="bg-white rounded-xl p-4 mb-8">
                    <h3 className="text-[20px] font-medium">DID</h3>
                    <div className="text-[#9e9e9e] inline-flex space-x-3 items-center justify-between">
                      <span>{did.slice(0, 20) + "..." + did.slice(-8)}</span>
                      <button type="button">
                        <DocumentDuplicateIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 mb-8">
                    <h3 className="text-[20px] font-medium">Age</h3>
                    <div className="text-[#9e9e9e] inline-flex space-x-3 items-center justify-between">
                      <span>{calculateAge(patientData.dob)} years</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <h3 className="text-[20px] font-medium">Speciality</h3>
                    <div className="text-[#9e9e9e] inline-flex space-x-3 items-center justify-between">
                      <span>Neurology</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#41CBE2] rounded-xl p-4 w-3/5">
                  <div className="inline-flex items-center justify-between w-full">
                    <h3 className="inline-flex space-x-4 items-center justify-between text-[20px]">
                      <span className="font-semibold text-white">
                        Doctor’s List
                      </span>
                    </h3>
                    <Link to="/" className="underline font-normal text-[13px]">
                      View all
                    </Link>
                  </div>
                  <div>
                    <div className="w-full px-5 py-3 mb-2 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                      <div className="px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3 w-3/5">
                        <span
                          className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                                    items-center justify-center rounded-full"
                        >
                          P
                        </span>
                        <div>
                          <h4 className="text-[16px] text-black">
                            Dr. Brandon
                          </h4>
                          <span className="text-[12px] text-[#0d0d0d60]">
                            Cardiology
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-full">
                        Book
                      </span>
                    </div>

                    <div className="w-full px-5 py-3 mb-2 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                      <div className="px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3 w-3/5">
                        <span
                          className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                                    items-center justify-center rounded-full"
                        >
                          P
                        </span>
                        <div>
                          <h4 className="text-[16px] text-black">Dr. Robert</h4>
                          <span className="text-[12px] text-[#0d0d0d60]">
                            Neurology
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-full">
                        Book
                      </span>
                    </div>

                    <div className="w-full px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                      <div className="px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3 w-3/5">
                        <span
                          className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                                    items-center justify-center rounded-full"
                        >
                          P
                        </span>
                        <div>
                          <h4 className="text-[16px] text-black">Dr. Greg</h4>
                          <span className="text-[12px] text-[#0d0d0d60]">
                            Oncology
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-full">
                        Book
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mx-auto space-y-5">
              <div className="w-full inline-flex item-center justify-between gap-x-8">
                {/* 1st */}
                <div className="rounded-xl p-4 w-1/3 h-50">
                  <Calendar />
                </div>
                {/* 2nd */}
                <div className="rounded-xl p-4 w-1/3">
                  <div className="relative h-100">
                    <img
                      src="/assets/images/patient_booking.png"
                      className="relative object-contain"
                      alt="patient booking"
                    />
                    <div className="absolute bottom-0 px-4 pt-8 pb-3 top-0 bg-[#00000099] w-full item-center text-center rounded-xl">
                      <p className="text-white font-semibold mb-16">
                        My Health Records
                      </p>
                      <span className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-2xl">
                        View
                      </span>
                    </div>
                  </div>
                </div>
                {/* 3rd */}
                <div className="bg-[#FFFFFF] rounded-xl p-4 w-1/3 h-84">
                  <div className="inline-flex items-center place-content-center w-full mb-8 mt-8">
                    <h3 className="inline-flex space-x-4 items-center justify-between text-[20px]">
                      <span className="font-semibold">Emergency Contacts</span>
                    </h3>
                  </div>
                  <p className="w-full px-8 text-[#f7f7f7] py-4 bg-og-blue rounded-full text-[16px] mb-8 font-semibold text-center">
                    View Next of Kin
                  </p>
                  <div className="inline-flex items-center place-content-center w-full mb-8">
                    <h3 className="inline-flex space-x-4 items-center justify-between text-[20px]">
                      <span className="font-semibold">Or</span>
                    </h3>
                  </div>
                  <p className="w-full px-8 text-[#f7f7f7] py-4 bg-og-blue rounded-full text-[16px] font-semibold text-center">
                    Add Next of Kin
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full inline-flex item-center justify-between gap-x-16">
              <div className="bg-[#FFFFFF] rounded-xl p-4 w-2/5">
                <div className="bg-white rounded-xl p-4">
                  <div className="inline-flex items-center justify-between w-full">
                    <h2 className="font-bold font-4xl">Reminder</h2>
                    <Link to="/" className="text-[12px] underline">
                      View all
                    </Link>
                  </div>
                </div>
                <div className="w-full bg-[#749D1C] rounded-xl p-4 inline-flex space-x-3 items-center justify-between h-20">
                  <div className="px-5 py-3 rounded-xl inline-flex items-center justify-start space-x-3 w-full">
                    <span
                      className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                                    items-center justify-center rounded-full"
                    >
                      <img
                        src="/assets/images/ellipse.png"
                        alt="recommender image"
                      />
                    </span>
                    <div>
                      <h4 className="text-[16px] text-black text-[#FFFFFF]">
                        Dr. Brandon
                      </h4>
                      <span className="text-[12px] text-[#F0F0F0]">
                        30 Jan, 2023 | 04:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFFFF] rounded-xl p-4 w-3/5 h-32">
                <div className="w-full px-5 py-3 mb-2 bg-[#41CBE2] rounded-xl inline-flex items-center justify-start gap-4 space-x-3">
                  <div className="px-5 py-3 rounded-xl inline-flex items-center justify-start space-x-3 w-1/2">
                    <div>
                      <h4 className="text-[16px] text-black text-[#FFFFFF]">
                        Upcoming Visits
                      </h4>
                    </div>
                    <span
                      className="h-6 w-10 bg-white text-[12px] bg-white text-[#41CBE2] flex 
                                    items-center justify-center rounded"
                    >
                      40
                    </span>
                  </div>
                  <div className="border border-white h-16 w-[1px]"></div>
                  <div className="px-5 py-3 rounded-xl inline-flex items-center justify-start space-x-3 w-1/2">
                    <div>
                      <h4 className="text-[16px] text-black text-[#FFFFFF]">
                        Total Visists
                      </h4>
                    </div>
                    <span
                      className="h-6 w-10 text-[12px] bg-white text-[#41CBE2] flex 
                                    items-center justify-center rounded"
                    >
                      40
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
