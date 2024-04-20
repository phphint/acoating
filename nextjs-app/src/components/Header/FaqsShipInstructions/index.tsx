import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const ShippingHeader: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = () => {
        if (isValidEmail(email)) {  // Enhanced validation using regex
            setEmailSubmitted(true);
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <header
            className="relative z-10 overflow-hidden flex items-center justify-center mb-0 pb-0"
            style={{ backgroundColor: '#0c2225', height: '66vh' }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 pt-20">
                <div className="lg:w-1/2 lg:pr-10 text-justify">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl mb-4 text-white text-center lg:text-left">
                        Shipping Instructions
                    </h1>
                    <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
                        Your guide to <b>secure and efficient firearm shipping</b>.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg mb-6 text-[#d5dedc]">
                        At <b>Acoating</b>, we understand the importance of safety and precision in shipping your firearms. Follow our detailed instructions to ensure your items are prepared correctly for their journey. Whether you're sending in for customization or maintenance, trust in our expertise for a hassle-free experience.
                    </p>
                    <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
                        Launch Your Project With Us
                    </p>
                    <button 
                        className="bg-[#7ac3bf] text-[#002427] py-2 px-6 text-lg font-bold hover:bg-[#68b2af] transition duration-300"
                        onClick={() => setModalOpen(true)}
                    >
                        Download Order Form
                    </button>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <img 
                        src="/nextjs_images/shipping_box_firearm.png" 
                        alt="Shipping Box with Firearm" 
                        className="max-w-xs md:max-w-sm lg:max-w-full h-auto mb-8 lg:mb-0" 
                    />
                </div>
            </div>
            {modalOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg">
                        {!emailSubmitted ? (
                            <>
                                <h2 className="text-xl mb-4">Enter Your Email to Access Downloads</h2>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Email address"
                                    className="border-2 border-gray-300 p-2 rounded-lg w-full mb-4"
                                />
                                <button
                                    className="border-2 border-[#111a1d] text-white py-2 px-4 bg-[#111a1d] hover:bg-[#1a2b2d] transition-colors  "
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </>
                        ) : (
                            <>

<h2 className="text-xl mb-4 mt-6">EASY Shipping Instructions/Check list</h2>

<ul className=" pl-5 text-left">
    <li>
                    <a href="https://acoating.com/pdfs/ShippingInstructions.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline flex items-center mb-4">
                        <FontAwesomeIcon icon={faDownload} className="mr-2" />Download Shipping Instructions
                    </a>
                    </li>
                    </ul>
   <h2 className="text-xl mb-4">Parts Check List for All DYI Disassembled firearms being sent in</h2>


   <ul className=" pl-5 text-left">
    <li>
        <a href="https://acoating.com/pdfs/AR15%20and%20AK47%20Parts%20List.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline flex items-center">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />AR-15 & AK 47 Parts Check List
        </a>
    </li>
    <li>
        <a href="https://acoating.com/pdfs/Bolt%20Rifle%20Parts%20List.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline flex items-center">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />Bolt Rifle Parts Check List
        </a>
    </li>
    <li>
        <a href="https://acoating.com/pdfs/Pistol%20Parts%20List.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline flex items-center">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />Pistol Parts Check List
        </a>
    </li>
    <li>
        <a href="https://acoating.com/pdfs/Revolver%20Parts%20List.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline flex items-center">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />Revolver Parts Check List
        </a>
    </li>
</ul>


                                <button
                                    className="border-2 border-[#111a1d] text-white py-2 px-4 bg-[#111a1d] hover:bg-[#1a2b2d] transition-colors mt-10"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Close
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default ShippingHeader;
