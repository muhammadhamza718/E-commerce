import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className='flex justify-center'>
                        {/* Branding / Copyright */}
                        <p className="text-center md:text-left text-sm text-gray-400">
                            © {new Date().getFullYear()} <strong>Shopnova</strong>. All Rights Reserved.
                        </p>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="flex space-x-6 justify-center text-gray-400">
                        <a
                            href="#"
                            aria-label="Shopnova on Facebook"
                            className="hover:text-blue-400 transition-colors duration-200 flex items-center "
                        >
                            <FaFacebook className="mr-2" /> Facebook
                        </a>
                        <a
                            href="#"
                            aria-label="Shopnova on Twitter"
                            className="hover:text-blue-400 transition-colors duration-200 flex items-center"
                        >
                            <FaTwitter className="mr-2" /> Twitter
                        </a>
                        <a
                            href="#"
                            aria-label="Shopnova on Instagram"
                            className="hover:text-blue-400 transition-colors duration-200 flex items-center"
                        >
                            <FaInstagram className="mr-2" /> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
