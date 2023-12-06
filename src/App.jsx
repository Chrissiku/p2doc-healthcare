import DoctorsForm from "./components/forms/DoctorsForm";
import PatientsForm from "./components/forms/PatientsForm";
import InquiryModal from "./components/modals/InquiryModal";

const App = () => {
   return (
      <>
         <h1 className="text-3xl font-bold text-green-400 underline">
            Hello world!
         </h1>

         <div className="p-10">
            <DoctorsForm />
         </div>
         <div className="p-10">
            <PatientsForm />
         </div>
         <div className="p-10">
            <InquiryModal />
         </div>
      </>
   );
};

export default App;
