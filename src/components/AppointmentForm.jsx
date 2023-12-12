import { useState, useContext } from 'react';
import { Web5Context } from '../utils/Web5Context';

const BookingForm = () => {
    const { web5, did, protocolDefinition } = useContext(Web5Context);
  const [patientDID, setPatientDID] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

const handleSubmit = async (e) => {    
    e.preventDefault();
    try {
         console.log("Data to be sent:", {
      patientDID,
      symptoms,
      appointmentDate,
    });
    // Create a new booking record
    const { record } = await web5.dwn.records.write({
       data: {
          patientDID,
          symptoms,
          appointmentDate,
        },
      message: {
        protocol: protocolDefinition.protocol,
        protocolPath: 'bookAppointment',
        schema: protocolDefinition.types.bookAppointment.schema,
        recipient: did,
        published: true,
      },
    });
        console.log('record.send(did)', record);
        await record.send(did);

    if (record.status.code === 200) {
      console.log('Booking successful');
    } else {
      console.error('Error booking appointment:', record.status);
    }
  } catch (error) {
    console.error('Error booking appointment:', error);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Patient DID:</label>
        <input
          type="text"
          value={patientDID}
          onChange={(e) => setPatientDID(e.target.value)}
          required
        />
      </div>
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
          required
        />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default BookingForm;
