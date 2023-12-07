import logo from "/assets/logo-black.svg";

const Footer = () => {
  return (
    <div className="bg-og-blue py-[40px] text-[#333333] text-base">
      <div className="flex gap-[102px] font-poppins">
        <div className="ml-[129px]">
          <img className="mb-5" src={logo} alt="Logo in black" />
          <p>
            Leading the Way in Medical
            <br />
            Execellence, Trusted Care.
          </p>
        </div>
        <ul>
          <h3 className="mb-5 font-semibold text-lg">Quick Links</h3>
          <li>Appointment</li>
          <li>Doctors</li>
          <li>Services</li>
          <li>About us</li>
        </ul>
        <ul>
          <h3 className="mb-5 font-semibold text-lg">Contact Us</h3>
          <li>Call: (237) 001-312-005</li>
          <li>Email: email@p2doc.com</li>
        </ul>
      </div>
      <hr className="border border-[#E2E2E2] mt-[40px] ml-[129px]" />
      <p className="ml-[129px] mt-[40px]">
        © 2023 P2Doc Healthcare. All Rights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
