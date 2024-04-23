import { Form, Link } from "react-router-dom";

const AddCoffee = () => {
    return (
        <div className='bg-[#f4f3f0] text-center space-y-3 my-5 py-10 rounded-3xl flex flex-col justify-center items-center'>
            <h1 className='font-rancho font-bold text-4xl text-[#331a15]'>Add New Coffee</h1>
            <p className='text-[#1b1a1aab] w-[60%]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <Form className="p-2 grid grid-cols-2 justify-items-center gap-x-6 gap-y-2 w-[70%]">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <label className="col-span-2 form-control w-full">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </label>
                <Link to={'/secondary'} className="w-full col-span-2 my-5"><button className='btn min-w-full font-rancho bg-[#E3B577] hover:bg-[#E3B577ad] text-xl border-2 border-[#331a15] hover:border-[#331a15ad]'>Add Coffee</button></Link>
            </Form>
        </div>
    );
};

export default AddCoffee;