const Banner = () => {
    const paragraph = "It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.";
    return (
        <div className="px-[10%] py-[10%] bg-banner min-h-[70vh] bg-cover bg-no-repeat flex justify-end">
            <div className="w-[55%] space-y-4">
                <h1 className="text-white font-rancho text-3xl my-2">Would you like a Cup of Delicious Coffee?</h1>
                <p className="text-sm text-white font-raleway">{paragraph}</p>
                <button className='btn font-rancho bg-[#E3B577] hover:bg-[#E3B577ad] text-xl border-[#242222] hover:border-[#242222ad] border-2'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;