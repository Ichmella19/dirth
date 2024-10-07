const Learning = () => {
    return ( 
        <section className="  bg-stone-200 py-10 justify-center flex flex-wrap gap-y-8 md:gap-x-10 xl:gap-x-36 2xl:gap-x-52 ">
            <div>
                <img className="h-64 md:h-72 lg:h-80 xl:h-96 " src="/assets/learning/image-all.png" alt="Business" />
            </div>
            <div className=" relative pt-0 md:pt-5">
                <div className="absolute top-0 pl-56 md:pl-72 xl:pl-80">
                    <img className="h-16 md:h-32" src="/assets/learning/gauche.png" alt="Business" />
                </div>
                <div className="pl-12 md:pl-0 text-lime-600 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-semibold pb-2">
                    <h1>Learning</h1>
                    <h1 >How to</h1>
                    <h1>Recycle</h1>
                </div>
                <div className="text-gray-700 text-xs md:text-sm px-12 md:px-0 pb-6 ">
                    <p>Excess waste? Let us handle all the work, and turn wastes </p>
                    <p>to energy. A sustainable solution that repurposes wastes </p>
                    <p>and creates a long-term solution for you and your business.</p>
                    <p>Modern solutions designed for you.</p>
                </div>
                <div className="ml-12 md:ml-0 bg-lime-600 text-stone-200 text-lg md:text-xl font-bold uppercase rounded-xl p-1 md:p-2  w-1/2 text-center">
                    <h1>Get Started</h1>
                </div>
            </div>
            
        </section>
     );
}
 
export default Learning;