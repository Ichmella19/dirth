const Substainable = () => {
    return ( 
        <section className=" relative  bg-lime-600 py-10 ">
            
            <div className="absolute top-0 left-0 xl:left-1/4 pl-2 md:pl-0 pt-5">
                    <img className="h-16 md:h-32 lg:h-44" src="/public/assets/solutions/image-1.png" alt="Business" />
            </div>
            <div className=" text-center pt-0 md:pt-12">
                <div className=" uppercase text-stone-200 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-semibold pb-2">
                    <h1>Substainable</h1>
                    <h1 >Solutions</h1>
               
                </div>
                <div className="text-gray-500 text-xs md:text-sm 2xl:text-lg px-16 md:px-0 pb-6 font-semibold">
                    <p>Excess waste? Let us handle all the work, and turn wastes </p>
                    <p>to energy. A sustainable solution that repurposes wastes </p>
                    <p>and creates a long-term solution for you and your business.</p>
                
                </div>
            </div>
            <div className="absolute bottom-0 right-0 xl:right-1/4 pr-2 md:pr-0  pb-5">
                    <img className="h-16 md:h-32 lg:h-44" src="/public/assets/solutions/image-2.png" alt="Business" />
            </div>
        </section>
     );
}
 
export default Substainable;