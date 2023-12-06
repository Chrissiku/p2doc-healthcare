import {
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
  BellAlertIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import {
  PlusCircleIcon,
  DocumentDuplicateIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import Profile from "../assets/hero.png";
import Layer from "../assets/layer.png";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";

const Doctor = () => {
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

            <div
              className="p-3 hover:bg-[#fff9] rounded-lg text-white 
            hover:text-olive-green transition-all duration-300"
            >
              <span className="sr-only">menu</span>
              <ArrowLeftOnRectangleIcon className="h-8 w-8" />
            </div>
          </div>
        </aside>
        <div className="flex-1 mx-auto bg-[#f7f7f7] rounded-[60px] px-10 py-7">
          <div className="w-full mx-auto flex flex-col items-start justify-start  space-y-[50px]">
            <nav className="w-full flex flex-row items-center justify-between">
              <a href="/" className="uppercase flex flex-col -space-y-3">
                <span className="text-olive-green font-bold text-[26px]">
                  p2doc
                </span>
                <span className="text-og-blue text-[14px] font-medium">
                  healthcare
                </span>
              </a>
              <div className="flex flex-row items-center justify-between space-x-[40px]">
                <div>
                  <form className="">
                    <div className="relative bg-[#e5e5e5] rounded-xl overflow-hidden w-full">
                      <div
                        className="bg-transparent absolute inset-y-0 start-0 flex items-center ps-3 
                      pointer-events-none"
                      >
                        <MagnifyingGlassIcon className="w-5 h-5 text-[#A2A3A4]" />
                      </div>
                      <input
                        type="search"
                        className="block w-full p-4 ps-10 border-gray-300 rounded-lg bg-[#e5e5e5] outline-none"
                        placeholder="Search ..."
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className="text-[#8b8b8b] relative">
                  <span className="h-2 w-2 absolute top-0 right-1 bg-olive-green rounded-full"></span>
                  <BellAlertIcon className="w-[30px] h-[30px]" />
                </div>
                <div
                  className="border-2 border-[#d9d9d9] rounded-2xl flex flex-row items-center 
                justify-between space-x-4 py-2 px-4"
                >
                  <div className="h-12 w-12 overflow-hidden">
                    <img
                      src={Profile}
                      alt="Doctor's profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[16px] font-medium">Dr. Azmat</span>
                </div>
              </div>
            </nav>
            <div className="w-full mx-auto space-y-5">
              <div className="w-full inline-flex item-center justify-between">
                <h2 className="text-[36px] font-normal">
                  Welcome{" "}
                  <span className="text-olive-green font-bold">
                    Dr. Azmat !
                  </span>
                </h2>
                <button
                  type="button"
                  className="inline-flex space-x-2 px-5 py-3 items-center justify-center border-2 border-og-blue rounded-2xl"
                >
                  <span className="sr-only">Add new issue record</span>
                  <span className="text-og-blue ">
                    <PlusCircleIcon className="h-8 w-8" />
                  </span>
                  <span className="text-[20px] font-normal">Issue record</span>
                </button>
              </div>
              <div className="w-full space-y-[30px]">
                <div className="w-full flex flex-row items-start justify-between space-x-20">
                  {/* Left˝ */}
                  <div className="w-2/5 space-y-[20px]">
                    <div className="bg-og-blue py-[30px] px-[18px] rounded-2xl space-y-[20px] w-full">
                      <div className="bg-white rounded-xl p-4 ">
                        <h3 className="text-[20px] font-medium">DID</h3>
                        <div className="text-[#9e9e9e] inline-flex space-x-3 items-center justify-between">
                          <span>EiArQgMv...UXpnIn19</span>
                          <button type="button">
                            <DocumentDuplicateIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="space-y-[10px]">
                        <div className="bg-white rounded-xl p-4 ">
                          <h3 className="text-[20px] font-medium">
                            Hospital Name
                          </h3>
                          <div className="text-[#9e9e9e] inline-flex space-x-3 items-center justify-between">
                            <span>Mediheal hospital</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 ">
                          <h3 className="text-[20px] font-medium">
                            Speciality
                          </h3>
                          <div className="text-[#9e9e9e] inline-flex space-x-3 items-center justify-between">
                            <span>Neurology</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[350px]">
                      <Calendar />
                    </div>
                  </div>

                  {/* Right */}

                  <div className="w-3/5 p-3 space-y-[30px]">
                    {/* Incoming Request */}

                    <div className="bg-white rounded-2xl space-y-[20px] py-8 px-5">
                      <div className="inline-flex items-center justify-between w-full">
                        <h3 className="inline-flex space-x-4 items-center justify-between text-[20px]">
                          <span className="font-semibold">
                            Incoming Request
                          </span>
                          <span className="text-[#f39f9f] shadow drop-shadow-xl px-3 py-1 text-center rounded-md">
                            22
                          </span>
                        </h3>
                        <Link
                          to="/"
                          className="underline font-normal text-[13px]"
                        >
                          View all
                        </Link>
                      </div>
                      <p className="w-full px-8 text-[#f7f7f7] py-4 bg-og-blue rounded-xl text-[16px] font-semibold">
                        Hi, Dr.Azmat, I want to confirm if there’s an...
                      </p>
                      <p className="w-full px-8 text-[#f7f7f7] py-4 bg-og-blue rounded-xl text-[16px] font-semibold">
                        Hi, can i request for an appointment in the...
                      </p>
                    </div>

                    {/* Recently Booked Appointments */}

                    <div className="bg-og-blue rounded-2xl space-y-[20px] py-8 px-5">
                      <div className="inline-flex items-center justify-between w-full">
                        <h3 className="inline-flex space-x-4 items-center justify-between text-[20px]">
                          <span className="font-semibold text-white">
                            Recently Booked Appointments
                          </span>
                          <span className="bg-white text-og-blue shadow drop-shadow-xl px-3 py-1 text-center rounded-md">
                            3
                          </span>
                        </h3>
                        <Link
                          to="/"
                          className="underline font-normal text-[13px] text-white"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="w-full px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                        <san
                          className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                        items-center justify-center rounded-full"
                        >
                          P
                        </san>
                        <div>
                          <h4 className="text-[16px] text-black">
                            Patient Rounds
                          </h4>
                          <spam className="text-[12px] text-[#0d0d0d60]">
                            25 Jan, 2023 | 04:00 PM
                          </spam>
                        </div>
                      </div>
                      <div className="w-full px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                        <san
                          className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                        items-center justify-center rounded-full"
                        >
                          L
                        </san>
                        <div>
                          <h4 className="text-[16px] text-black">
                            Laboratory test results review
                          </h4>
                          <spam className="text-[12px] text-[#0d0d0d60]">
                            25 Jan, 2023 | 04:00 PM
                          </spam>
                        </div>
                      </div>
                      <div className="w-full px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                        <san
                          className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                        items-center justify-center rounded-full"
                        >
                          S
                        </san>
                        <div>
                          <h4 className="text-[16px] text-black">
                            Surgical procedures
                          </h4>
                          <spam className="text-[12px] text-[#0d0d0d60]">
                            25 Jan, 2023 | 04:00 PM
                          </spam>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-x-[50px] w-full flex flex-row items-end justify-between">
                  <div className="w-1/4 bg-white rounded-3xl p-5 space-y-4">
                    <div className="inline-flex items-center justify-between w-full">
                      <h2 className="text-[20px]">Reminder</h2>
                      <Link to="/" className="text-[12px] underline">
                        View all
                      </Link>
                    </div>

                    <div className="w-full px-5 py-3 bg-olive-green rounded-xl inline-flex items-center justify-start space-x-3">
                      <san
                        className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                        items-center justify-center rounded-full"
                      >
                        S
                      </san>
                      <div>
                        <h4 className="text-[16px] text-white">
                          Surgical procedure
                        </h4>
                        <spam className="text-[12px] text-[#f0f0f060]">
                          30 Jan, 2023 | 04:00 PM
                        </spam>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 h-[180px] rounded-xl overflow-hidden">
                    <img src={Layer} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 w-2/4">
                    <div className="w-full flex items-center justify-between  bg-og-blue p-5 rounded-3xl">
                      <div className="flex flex-col items-start justify-between space-y-8">
                        <h5 className="text-white text-[20px]">
                          <span>New Patients</span>{" "}
                          <span className="text-og-blue bg-white py-[2px] px-2 rounded-lg">
                            40
                          </span>
                        </h5>
                        <div className="bg-[#DFFDDD] p-2 inline-flex items-center justify-between space-x-4 rounded-xl">
                          <span className="text-[#008000] text-[18px]">
                            50%
                          </span>
                          <span>
                            <ArrowTrendingUpIcon className="text-og-blue w-[26px] h-[20px] " />
                          </span>
                        </div>
                      </div>
                      <div className="border border-white h-[100px] w-[1px]"></div>
                      <div className="flex flex-col items-start justify-between space-y-8">
                        <h5 className="text-white text-[20px]">
                          <span>Repeats patients</span>{" "}
                          <span className="text-og-blue bg-white py-[2px] px-2 rounded-lg">
                            23
                          </span>
                        </h5>
                        <div className="bg-[#DFFDDD] p-2 inline-flex items-center justify-between space-x-4 rounded-xl">
                          <span className="text-[#008000] text-[18px]">
                            32%
                          </span>
                          <span>
                            <ArrowTrendingUpIcon className="text-og-blue w-[26px] h-[20px] " />
                          </span>
                        </div>
                      </div>
                    </div>
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

export default Doctor;
