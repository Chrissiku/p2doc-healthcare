import { useState, useContext } from "react";
import { Web5Context } from "../utils/Web5Context";

const BookingForm = ({ doctorDid }) => {
  const { web5, did, protocolDefinition } = useContext(Web5Context);
  const [patientDID, setPatientDID] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  console.log("Doctor Did : ", doctorDid);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data to be sent:", {
        doctorDid,
        symptoms,
        appointmentDate,
      });
      // Create a new booking record
      const { record, status } = await web5.dwn.records.write({
        data: {
          doctorDid,
          symptoms,
          appointmentDate,
        },
        message: {
          protocol: protocolDefinition.protocol,
          protocolPath: "bookAppointment",
          schema: protocolDefinition.types.bookAppointment.schema,
          recipient: doctorDid,
          published: true,
        },
      });

      await record.send(did);
      console.log("success");
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label>Patient DID:</label>
        <input
          type="text"
          value={doctorDid}
          // onChange={(e) => setPatientDID(e.target.value)}
          required
        />
      </div> */}
      <div>
        <label>Symptoms:</label>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Appointment Date:</label>
        <input
          type="datetime-local"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          min={getCurrentDateTime()}
          required
        />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookingForm;
