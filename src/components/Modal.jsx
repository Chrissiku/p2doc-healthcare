/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DoctorsForm from "./modals/DoctorsForm";
import PatientsForm from "./modals/PatientsForm";

export default function MyModal({ isOpen, closeModal, openModal }) {
  const [selectedType, setSelectedType] = useState(null);

  const setDoctor = () => {
    setSelectedType("doctor");
  };

  const setPatient = () => {
    setSelectedType("patient");
  };

  const setNull = () => {
    setSelectedType(null);
  };

  const handleCloseModal = () => {
    closeModal();
    setSelectedType(null);
  };

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
                  className={`w-full h-auto border p-20 border-red-300 flex flex-col items-center 
                  justify-center max-w-[600px] overflow-hidden rounded-2xl bg-white 
                  text-left align-middle shadow-xl transition-all duration-500 ease-in-out
                ${
                  selectedType !== null ? "space-y-10 h-[700px]" : "space-y-10"
                }`}
                >
                  <Dialog.Title
                    as="h3"
                    className={`w-full font-medium leading-6 text-gray-900 ${
                      selectedType !== null
                        ? "text-start text-[32px]"
                        : "text-center text-[36px]"
                    }`}
                  >
                    {selectedType === "doctor" ? (
                      <span>Doctor details</span>
                    ) : selectedType === "patient" ? (
                      <span>Patient Details</span>
                    ) : (
                      <span>Who are You ?</span>
                    )}
                  </Dialog.Title>

                  {selectedType === "doctor" ? (
                    <div className="flex flex-col items-center justify-center space-y-5">
                      <DoctorsForm userType={selectedType} />
                      <button
                        type="button"
                        className="inline-flex text-white items-center justify-center rounded-full bg-red-500 text-center w-14 h-14 text-[32px]"
                        onClick={setNull}
                      >
                        <span>x</span>
                      </button>
                    </div>
                  ) : selectedType === "patient" ? (
                    <div className="flex flex-col items-center justify-center space-y-5">
                      <PatientsForm userType={selectedType} closeModal={handleCloseModal} />
                      <button
                        type="button"
                        className="inline-flex text-white items-center justify-center rounded-full bg-red-500 text-center w-14 h-14 text-[32px]"
                        onClick={setNull}
                      >
                        <span>x</span>
                      </button>
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-full space-x-10">
                      <button
                        onClick={setDoctor}
                        type="button"
                        className="w-[150px] inline-flex justify-center rounded-full bg-og-blue text-black py-3 px-5 text-[18px]"
                      >
                        Doctor
                      </button>
                      <button
                        onClick={setPatient}
                        type="button"
                        className="w-[150px] inline-flex justify-center rounded-full bg-og-blue text-black py-3 px-5 text-[18px]"
                      >
                        Patient
                      </button>
                      <button
                        onClick={handleCloseModal}
                        type="button"
                        className="w-[150px] inline-flex justify-center rounded-full bg-red-500 text-white py-3 px-5 text-[18px]"
                      >
                        neither
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
