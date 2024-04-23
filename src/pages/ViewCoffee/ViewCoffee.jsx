const ViewCoffee = () => {
    return (
        <div className="my-10 w-[80%] mx-auto bg-[#f5f4f1] px-3 py-4 rounded-2xl flex justify-center items-center gap-[10%]">
            <img className="w-72" src="https://i.postimg.cc/hzdyXgZQ/1.png" alt="Cups" />
            <div className="space-y-3">
                <h2 className='font-rancho text-2xl font-semibold text-[#331a15] my-5'>Niceties</h2>
                <h4 className="font-raleway font-bold text-sm">Name: <span className="text-[#1b1a1a] font-normal">Americano Coffee</span></h4>
                <h4 className="font-raleway font-bold text-sm">Chef: <span className="text-[#1b1a1a] font-normal">Mr. Matin Paul</span></h4>
                <h4 className="font-raleway font-bold text-sm">Supplier: <span className="text-[#1b1a1a] font-normal"> Cappu Authorizer</span></h4>
                <h4 className="font-raleway font-bold text-sm">Taste: <span className="text-[#1b1a1a] font-normal">Sweet and hot</span></h4>
                <h4 className="font-raleway font-bold text-sm">Category: <span className="text-[#1b1a1a] font-normal">Americano</span></h4>
                <h4 className="font-raleway font-bold text-sm">Details: <span className="text-[#1b1a1a] font-normal">Espresso with hot water</span></h4>
            </div>
        </div>
    );
};

export default ViewCoffee;