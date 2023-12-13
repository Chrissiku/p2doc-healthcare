export const protocolDefinition = {
  "protocol": "http://localhost:5173",
  "published": true,
  "types": {
    "patientProfile": {
      "schema": "http://localhost:5173/patientProfile",
      "dataFormats": ["application/json"]
    },
    "doctorProfile": {
      "schema": "http://localhost:5173/doctorProfile",
      "dataFormats": ["application/json"]
    },
    "medicalRecords": {
      "schema": "http://localhost:5173/medicalRecords",
      "dataFormats": ["application/json"]
    }
  },
  "structure": {
    "medicalRecords": {
      "$actions": [
        { "who": "anyone", "can": "write" },
        { "who": "recipient", "of": "medicalRecords", "can": "read" }
      ]
    },
    "patientProfile": {
      "$actions": [
        { "who": "anyone", "can": "write" },
        { "who": "recipient", "of": "patientProfile", "can": "read" }
      ]
    },
    "doctorProfile": {
      "$actions": [
        { "who": "anyone", "can": "write" },
        { "who": "anyone", "can": "read" }
      ]
    }
  }
}