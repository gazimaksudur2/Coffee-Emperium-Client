import { Link, Outlet } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

const SecondaryPage = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <div className='my-10 text-[#331a15]'>
                <Link className='flex justify-start items-center gap-3 w-[15%]' to={'/'}>
                    <IoArrowBackSharp size={25} className='inline'/>
                    <h2 className='font-rancho font-semibold text-3xl inline'>Back to home</h2>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default SecondaryPage;