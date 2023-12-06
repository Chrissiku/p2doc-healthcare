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
  
  const Patient = () => {
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
              <nav className="w-full inline-flex item-center justify-end">
              <button
                    type="button"
                    className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#D9D9D9] border-0 border-og-blue rounded-2xl"
                  >
                    <div className="text-[#9e9e9e] inline-flex space-x-3 items-end justify-between">
                          <span>EiArQgMv...UXpnIn19</span>
                          <button type="button">
                            <DocumentDuplicateIcon className="h-5 w-5" />
                          </button>
                    </div>
                </button>
              </nav>

              <div className="w-full mx-auto space-y-5">
                <div className="w-full inline-flex item-center justify-between">
                  <h2 className="text-[36px] font-normal">
                    Welcome{" "}
                    <span className="text-olive-green font-bold">
                      Grace!
                    </span>
                  </h2>
                  <button
                    type="button"
                    className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-2xl"
                  >
                    <span className="text-og-[#333]">
                      <PlusCircleIcon className="h-8 w-8" />
                    </span>
                    <span className="text-[20px] font-normal">Book Appointment</span>
                  </button>
                </div>

                <div className="w-full inline-flex item-center justify-between gap-x-16">
                    <div className="bg-[#41CBE2] rounded-xl p-4 w-2/5">
                        <div className="bg-white rounded-xl p-4 mb-8">
                            <h3 className="text-[20px] font-medium">DID</h3>
                            <div className="text-[#9e9e9e] inline-flex space-x-3 items-center justify-between">
                                <span>EiArQgMv...UXpnIn19</span>
                                <button type="button">
                                    <DocumentDuplicateIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 mb-8">
                            <h3 className="text-[20px] font-medium">Age</h3>
                            <div className="text-[#9e9e9e] inline-flex space-x-3 items-center justify-between">
                                <span>26 years</span>
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
                            <Link
                            to="/"
                            className="underline font-normal text-[13px]"
                            >
                                View all
                            </Link>
                        </div>
                        <div>
                            <div className="w-full px-5 py-3 mb-2 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                                <div className="px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3 w-3/5">
                                    <san
                                    className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                                    items-center justify-center rounded-full"
                                    >
                                    P
                                    </san>
                                    <div>
                                        <h4 className="text-[16px] text-black">
                                            Dr. Brandon
                                        </h4>
                                        <spam className="text-[12px] text-[#0d0d0d60]">
                                            Cardiology
                                        </spam>
                                    </div>
                                </div>
                                <spam className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-full">
                                    Book
                                </spam>
                            </div>

                            <div className="w-full px-5 py-3 mb-2 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                                <div className="px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3 w-3/5">
                                    <san
                                    className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                                    items-center justify-center rounded-full"
                                    >
                                    P
                                    </san>
                                    <div>
                                        <h4 className="text-[16px] text-black">
                                            Dr. Robert
                                        </h4>
                                        <spam className="text-[12px] text-[#0d0d0d60]">
                                            Neurology
                                        </spam>
                                    </div>
                                </div>
                                <spam className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-full">
                                    Book
                                </spam>
                            </div>

                            <div className="w-full px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3">
                                <div className="px-5 py-3 bg-white rounded-xl inline-flex items-center justify-start space-x-3 w-3/5">
                                    <san
                                    className="h-10 w-10 bg-og-blue text-[16px] text-white flex 
                                    items-center justify-center rounded-full"
                                    >
                                    P
                                    </san>
                                    <div>
                                        <h4 className="text-[16px] text-black">
                                            Dr. Greg
                                        </h4>
                                        <spam className="text-[12px] text-[#0d0d0d60]">
                                            Oncology
                                        </spam>
                                    </div>
                                </div>
                                <spam className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-full">
                                    Book
                                </spam>
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
                            <img src="/assets/images/patient_booking.png" className="h-100 relative" alt="patient booking" />
                            <div className="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full item-center">
                                <p className="text-white font-semibold mb-16">My Health Records</p>
                                <spam className="inline-flex space-x-2 px-5 py-3 items-center justify-center bg-[#41CBE2] rounded-2xl">
                                    View
                                </spam>
                            </div>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="bg-[#FFFFFF] rounded-xl p-4 w-1/3">
                        <div className="inline-flex items-center place-content-center w-full mb-16 mt-8">
                            <h3 className="inline-flex space-x-4 items-center justify-between text-[20px]">
                                <span className="font-semibold">
                                    Emergency Contacts
                                </span>
                            </h3>
                        </div>
                        <p className="w-full px-8 text-[#f7f7f7] py-4 bg-og-blue rounded-full text-[16px] mb-8 font-semibold">
                            View Next of Kin
                        </p>
                        <div className="inline-flex items-center place-content-center w-full mb-8">
                            <h3 className="inline-flex space-x-4 items-center justify-between text-[20px]">
                                <span className="font-semibold">
                                    Or
                                </span>
                            </h3>
                        </div>
                        <p className="w-full px-8 text-[#f7f7f7] py-4 bg-og-blue rounded-full text-[16px] font-semibold">
                            Add Next of Kin
                        </p>
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
  