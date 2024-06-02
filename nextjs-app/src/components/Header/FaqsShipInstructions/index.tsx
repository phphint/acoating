import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Terms from '../../../components/sections/Terms';  // Assuming this is the path to your terms component

const ShippingHeader: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Please enter a valid email address.');
        } else if (!agreeToTerms) {
            alert('Please agree to the terms and conditions.');
        } else {
            setEmailSubmitted(true);
        }
    };

    return (
        <header className="relative z-10 overflow-hidden flex items-center justify-center mb-0 pb-0" style={{ backgroundColor: '#0c2225', minHeight: '66vh' }}>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 pt-20">
                <div className="lg:w-1/2 lg:pr-10 text-justify">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl mb-4 text-white text-center lg:text-left mt-40 md:mt-40 lg:mt-0">Shipping Instructions</h1>
                    <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
                        Your guide to <b>secure and efficient firearm shipping</b>.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg mb-6 text-[#d5dedc]">
                        At <b>Acoating</b>, we understand the importance of safety and precision in shipping your firearms. Follow our detailed instructions to ensure your items are prepared correctly for their journey.
                    </p>
                    <p className="text-lg mb-4 text-[#a99ea6] font-bold text-center lg:text-left">
                        Launch Your Project With Us
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button 
                            className="bg-[#7ac3bf] text-[#002427] py-2 px-6 text-lg font-bold hover:bg-[#68b2af] transition duration-300 mb-10"
                            onClick={() => setModalOpen(true)}
                        >
                            Download Order Form
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <img src="/nextjs_images/shipping-department.jpg" alt="Shipping Box with Firearm" className="max-w-xs md:max-w-sm lg:max-w-full h-auto mb-8 lg:mb-0" />
                </div>
            </div>
            {modalOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-500">
                    <div className="bg-white p-8 rounded-lg mt-20" style={{ maxWidth: '600px', zIndex: 999999 }}>
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
                                <label>
                                    <input type="checkbox" checked={agreeToTerms} onChange={() => setAgreeToTerms(!agreeToTerms)} className="mr-2"/>
                                    I agree to the Terms of Service
                                </label>
                                <button
                                    className="mt-4 bg-[#7ac3bf] text-[#002427] py-2 px-6 text-base lg:text-lg transition-colors hover:bg-[#68b2af]"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>

                                <div className="overflow-auto h-60 pt-10" style={{ paddingRight: '15px' }}>
                                    <hr/>
                                    <Terms />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="mt-4">
                                    <h2 className="text-xl mb-4 mt-6">EASY Shipping Instructions/Check list</h2>
                                    <ul className="pl-5 text-left">
                                        <li>
                                            <a href="https://acoating.com/pdfs/ShippingInstructions.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline flex items-center mb-4">
                                                <FontAwesomeIcon icon={faDownload} className="mr-2" />Download Shipping Instructions
                                            </a>
                                        </li>
                                    </ul>
                                    <h2 className="text-xl mb-4">Parts Check List for All DYI Disassembled firearms being sent in</h2>
                                    <ul className="pl-5 text-left">
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
                                </div>
                                <button
                                    className="mt-10 bg-[#7ac3bf] text-[#002427] py-2 px-6 text-base lg:text-lg transition-colors hover:bg-[#68b2af]"
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
