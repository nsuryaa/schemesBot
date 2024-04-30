import React from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator() {
  const data = {
    registerNumber: "813820104109",
    name: "Surya",
    schemes: [
      {
        id: 1,
        header: "PRE-MATRIC SCHOLARSHIP SCHEME",
        text: `Tuition Fee From 6th to 8th Standard Rs.200/- at the rate of Rs.20/- per month for 10 months For 9th and 10th Standard Rs.250/- at the rate of Rs.25/- per month for 10 months Examination Fee Sanctioned in full for 10th Standard Students Conditions for Backward Classes Students.The income of the parents should not exceed Rs.1,00,000/-. There should be no graduate in the family.Most Backward Classes and Denotified Communities Students No conditions`,
      },
      {
        id: 2,
        header: "BOOK BANK",
        text: `Book Bank - Books will be purchased for Medical/ Engineering/ Law / M.B.A./Veterinary / Agri. and Polytechnic / courses and placed in the Library. On completion of the course, the students will return the books to the Library. Government of India Scholarship holder among AD/Tribal students. One set of Books will be supplied for every 2 students.`,
      },
    ],
  };

  const dataString = JSON.stringify(data);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <h1 className="A">Your QR Code</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <QRCode value={dataString} size={256} level="H" />
      </div>
      <h2 className="A">Scan QR to get Details</h2>
    </div>
  );
}

export default QRCodeGenerator;
