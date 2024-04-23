const QualityBanner = () => {
    return (
        <div className="bg-[#ECEAE3] flex justify-evenly px-[5%] py-10">
            <div className="w-[15%] flex flex-col justify-center items-start gap-2">
                <img className="w-16" src="https://i.postimg.cc/NKXyFj1w/1.png" alt="coffee icons" />
                <h1 className="font-rancho text-2xl">Awesome Aroma</h1>
                <p className="text-[#1b1a1a] font-raleway text-xs font-normal">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="w-[15%] flex flex-col justify-center items-start gap-2">
                <img className="w-16" src="https://i.postimg.cc/kDCLh1jN/2.png" alt="coffee icons" />
                <h1 className="font-rancho text-2xl">High Quality</h1>
                <p className="text-[#1b1a1a] font-raleway text-xs font-normal">We served the coffee to you maintaining the best quality</p>
            </div>
            <div className="w-[15%] flex flex-col justify-center items-start gap-2">
                <img className="w-16" src="https://i.postimg.cc/fVQzHj06/3.png" alt="coffee icons" />
                <h1 className="font-rancho text-2xl">Pure Grades</h1>
                <p className="text-[#1b1a1a] font-raleway text-xs font-normal">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className="w-[15%] flex flex-col justify-center items-start gap-2">
                <img className="w-16" src="https://i.postimg.cc/4KJJGfPP/4.png" alt="coffee icons" />
                <h1 className="font-rancho text-2xl">Proper Roasting</h1>
                <p className="text-[#1b1a1a] font-raleway text-xs font-normal">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            
        </div>
    );
};

export default QualityBanner;