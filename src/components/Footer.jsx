import React from 'react'
import logo from '/assets/logo-black.svg'

const Footer = () => {
    return (
        <>
        <div className='bg-og-blue flex justify-around p-5 font-poppins text-[#333333]'>
            <div>
            <img className='mb-5' src={logo} alt="Logo in black" />
            <p>Leading the Way in Medical<br />
                Execellence, Trusted Care.</p>
            </div>
            <ul>
                <h3 className='mb-5 font-semibold text-lg'>Quick Links</h3>
                <li>Appointment</li>
                <li>Doctors</li>
                <li>Services</li>
                <li>About us</li>
            </ul>
            <ul>
                <h3 className='mb-5 font-semibold text-lg'>Contact Us</h3>
                <li>Call: (237) 001-312-005</li>
                <li>Email: email@p2doc.com</li>
            </ul>
            </div>
        </>
    )
}

export default Footer