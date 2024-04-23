import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const TopFooter = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className='bg-top-footer flex justify-between items-center md:px-28 py-10'>
            <div className="w-[35%]">
                <img className='w-10' src="https://i.postimg.cc/gxcZSWR9/logo1.png" alt="logo image" />
                <h1 className="font-rancho text-2xl">Espresso Emporium</h1>
                <p className="font-raleway text-xs my-3">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className="flex justify-start items-center gap-3 my-2">
                    <FaFacebook size={20}/>
                    <FaTwitter size={20}/>
                    <FaInstagram size={20}/>
                    <FaLinkedin size={20}/>
                </div>
                <h2 className="font-rancho text-2xl mt-4">Get in Touch</h2>
                <div className="flex justify-start items-center gap-3 my-2">
                    <FaPhone size={16}/>
                    <p className="font-normal font-raleway text-xs">+88 01533 333 333</p>
                </div>
                <div className="flex justify-start items-center gap-3 my-2">
                    <CiMail size={16}/>
                    <p className="font-normal font-raleway text-xs">info@gmail.com</p>
                </div>
                <div className="flex justify-start items-center gap-3 my-2">
                    <IoLocationOutline size={16}/>
                    <p className="font-normal font-raleway text-xs">72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
            <div className="w-[30%] space-y-3">
                <h1 className="font-rancho text-2xl">Connect with Us</h1>
                <form className="flex w-full flex-col px-3 justify-center items-start gap-2">
                    <input className="input rounded-sm w-full" placeholder="Name" type="text" /><br/>
                    <input className="input rounded-sm w-full" placeholder="Email" type="email" /><br/>
                    <textarea className="w-full input h-[8rem] rounded-sm p-3" placeholder="Message" rows={5}></textarea>
                    <button onClick={handleSubmit} className="btn btn-outline hover:bg-[#331A15] outline-[#331A15] text-[#331A15] hover:text-white mt-3 rounded-full" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default TopFooter;