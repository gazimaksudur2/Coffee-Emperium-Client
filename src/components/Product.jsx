import { RiDeleteBin5Line } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="bg-[#f5f4f1] px-3 py-4 rounded-2xl flex justify-evenly items-center gap-3">
            <img className="w-44 bg-transparent" src="https://i.postimg.cc/hzdyXgZQ/1.png" alt="Cups" />
            <div className="space-y-2">
                <h4 className="font-raleway font-bold">Name: <span className="text-[#1b1a1a] font-normal">Americano Coffee</span></h4>
                <h4 className="font-raleway font-bold">Chef: <span className="text-[#1b1a1a] font-normal">Mr. Matin Paul</span></h4>
                <h4 className="font-raleway font-bold">Price: <span className="text-[#1b1a1a] font-normal">600 Taka</span></h4>
            </div>
            <div className="text-white font-light flex flex-col gap-2 ml-8">
                <Link to={'/secondary/view'}><MdOutlineRemoveRedEye className="bg-[#D2B48C] hover:bg-[#D2B48Cad] p-2 rounded active:scale-95 text-white w-full" size={33}/></Link>
                <Link to={'/secondary/update'}><BsPencil className="bg-[#3C393B] hover:bg-[#3C393Bad] p-2 rounded active:scale-95 text-white w-full" size={33}/></Link>
                <RiDeleteBin5Line className="bg-[#EA4744] hover:bg-[#EA4744ad] p-2 rounded active:scale-95 text-white w-full" size={33}/>
            </div>
        </div>
    );
};

export default Product;