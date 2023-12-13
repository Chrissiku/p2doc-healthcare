/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Web5Context } from "../utils/Web5Context";

export default function IssueRecordModal({
  isOpen,
  closeModal,
  openModal,
  data,
  patientDid,
}) {
  const { web5, did, protocolDefinition } = useContext(Web5Context);

  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [symptoms, setSymptoms] = useState("");
  const [formState, setFormState] = useState({});

  useEffect(() => {
    const formData = {
      doctorDid: did,
      symptoms: symptoms,
      heathRecord: file,
    };
    setFormState(formData);
    setSymptoms(data.symptoms);
  }, [file, symptoms, did, data]);

  console.log(formState);

  console.log(data.symptoms);

  const handleCloseModal = () => {
    closeModal();
  };

  const sendHeathRecord = async () => {
    try {
      const { record, status } = await web5.dwn.records.write({
        data: { formState },
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "medicalRecords",
          schema: protocolDefinition.types.medicalRecords.schema,
          recipient: patientDid,
          published: true,
        },
      });
      console.log("Profile Created : ", { record, status });
      await record.send(patientDid);
      console.log("record Sent");
    } catch (error) {
      console.error("Error Creating Health records : ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendHeathRecord().finally(() => {
      closeModal();
    });
  };

  console.log(file);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#000000d6]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full h-auto border p-10 border-red-300 flex flex-col items-start 
                  justify-center max-w-[700px] overflow-hidden rounded-2xl bg-white 
                  text-left align-middle shadow-xl transition-all duration-500 ease-in-out space-y-5
               `}
                >
                  <div className="w-full mx-auto inline-flex items-center justify-between">
                    <Dialog.Title
                      as="h2"
                      className="w-full font-bold text-[24px] text-black"
                    >
                      Issue New Record to :
                      <span className="text-gray-500">
                        {patientDid.slice(0, 8) + "..." + patientDid.slice(-8)}
                      </span>
                    </Dialog.Title>

                    <button
                      onClick={handleCloseModal}
                      type="button"
                      className="w-[100px] inline-flex justify-center rounded-full bg-red-500 text-white py-2 px-3 text-[14px]"
                    >
                      close
                    </button>
                  </div>
                  <form
                    className="w-full mx-auto space-y-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col items-start justify-between space-y-3">
                      <label>Patient Symptoms</label>
                      <span className="block bg-gray-300 w-full text-gray-500 rounded-lg cursor-pointer  p-2">
                        {data.symptoms}
                      </span>
                    </div>
                    <div className="flex flex-col items-start justify-between space-y-3">
                      <label>Upload Medical Record </label>
                      <input
                        className="block bg-gray-300 w-full text-gray-500 rounded-lg cursor-pointer border-2 border-black p-2"
                        id="file_input"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf, .doc, .docx"
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-og-blue px-4 py-2 rounded-2xl text-[18px]"
                    >
                      Send
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
