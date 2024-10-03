

const Solutions = () => {
    return ( 
        <section className="bg-lime-600 py-10 justify-center flex flex-wrap gap-y-5 md:gap-x-10 xl:gap-x-28 2xl:gap-x-36 ">
            <div className="text-center pt-0 md:pt-12">
                <div className="text-stone-200 text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-semibold pb-2">
                    <h1 className="uppercase">business</h1>
                    <h1 className="uppercase">solutions</h1>
                </div>
                <div className="text-gray-500 text-xs md:text-sm 2xl:text-lg px-12 md:px-0 pb-6 font-semibold">
                    <p>Excess waste? Let us handle all the work, and turn wastes </p>
                    <p>to energy. A sustainable solution that repurposes wastes </p>
                    <p>and creates a long-term solution for you and your business.</p>
                    <p>Modern solutions designed for you.</p>
                </div>
                <div className="bg-stone-200 text-lime-600 text-lg md:text-xl font-bold uppercase rounded-xl p-1 md:p-2 ml-20 md:ml-28 w-1/2">
                    <h1>Services</h1>
                </div>
            </div>
            <div>
                <img className="h-64 md:h-72 lg:h-80 xl:h-96" src="\src/assets\assets\business\Image.png" alt="Business" />
            </div>
        </section>
     );
}
 
export default Solutions;