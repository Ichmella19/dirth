const Recyclage = () => {
    return ( 
        <section className=" relative bg-stone-200 py-5 justify-center flex flex-wrap gap-y-8 md:gap-x-10 xl:gap-x-36 ">
            <div>
                <img className="h-64 md:h-72 lg:h-84 xl:h-96 2xl:h-auto" src="/public/assets/recyclage/Image-all.png" alt="Recyclage" />
            </div>
            <div className="  pt-0 md:pt-14 2xl:pt-24">
                <div className="absolute bottom-0 xl:bottom-24 right-0 lg:-right-1/3 xl:right-0">
                    <img className="h-16 md:h-32" src="/assets/learning/gauche.png" alt="Business" />
                </div>
                <div className="pt-10 ">
                    <div className="pb-4">
                        <div className="pl-12 md:pl-0 text-lime-600 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-semibold pb-2">
                            <h1>Recycling Pickup</h1>
                        </div>
                        <div className="text-black text-xs md:text-sm  px-12 md:px-0 pb-6">
                            <p>Excess waste? Let us handle all the work, and turn wastes </p>
                            <p>to energy. A sustainable solution that repurposes wastes </p>
                            <p>and creates a long-term solution for you and your business.</p>
                            <p>Modern solutions designed for you.</p>
                        </div>
                    </div>
                    <div>
                        <div className="pl-12 md:pl-0 text-lime-600 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-semibold pb-2">
                            <h1>Business Waste</h1>
                        </div>
                        <div className="text-black text-xs md:text-sm px-12 md:px-0 pb-6 ">
                            <p>Excess waste? Let us handle all the work, and turn wastes </p>
                            <p>to energy. A sustainable solution that repurposes wastes </p>
                            <p>and creates a long-term solution for you and your business.</p>
                            <p>Modern solutions designed for you.</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </section>
     
     );
}
 
export default Recyclage;