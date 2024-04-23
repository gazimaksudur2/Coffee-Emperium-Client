import { Link } from 'react-router-dom';
import Product from './Product.jsx';
const PopularProducts = () => {
    const coffees = 'abcd';
    return (
        <div className='font-raleway flex flex-col justify-center items-center my-10'>
            <div className='space-y-3 flex flex-col justify-center items-center'>
                <p className='text-[#1b1a1a] text-lg'>---Sip & Savor---</p>
                <h1 className='font-rancho text-3xl text-[#331a15]'>Our Popular Products</h1>
                <Link to={'/secondary'}><button className='btn font-rancho bg-[#E3B577] hover:bg-[#E3B577ad] text-xl border-2 border-[#331a15] hover:border-[#331a15ad]'>Add Coffee</button></Link>
            </div>
            <div>
                {
                    coffees
                }
            </div>
            <div className='w-[80%] grid grid-cols-2 my-10 gap-5'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    );
};

export default PopularProducts;