import {
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

const Doctor = () => {
  return (
    <div className="w-full mx-auto bg-og-blue p-5">
      <section className="w-full mx-auto flex flex-row items-start justify-center space-x-5">
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
        <div className="flex-1 mx-auto bg-white rounded-xl">container</div>
      </section>
    </div>
  );
};

export default Doctor;
