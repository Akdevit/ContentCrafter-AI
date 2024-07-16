import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-5xl mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms of Service</a></li>
                            <li><a href="/">Help Center</a></li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Main St, City, Country</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                        <div className="flex space-x-4">
                            <a href="/" className="text-gray-400 hover:text-white transition duration-300">
                                <FaFacebook size={24} />
                            </a>
                            <a href="/" className="text-gray-400 hover:text-white transition duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="/" className="text-gray-400 hover:text-white transition duration-300">
                                <FaInstagram size={24} />
                            </a>
                            <a href="/" className="text-gray-400 hover:text-white transition duration-300">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} AI Content Generator. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
