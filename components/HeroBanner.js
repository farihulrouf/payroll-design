import React from "react"
const HeroBanner = () => {
    return (
        <React.Fragment>
            <div className="max-w-[1200px] mx-auto flex justify-between mt-12 mb-4">
                <div className="w-1/2 py-4">
                    <h1 className="font-semibold text-teal-700 text-5xl text-bold max-w-md mt-8">
                         Empower Your Workforce, Unlock Africa Potential
                    </h1>
                    <p className="py-8 text-lg text-teal-700">Empower your business with our comprehensive payroll platform tailored for the African market. 
                        Streamline your Payroll Processes, Ensxure Compliance, and Focus on Growth
                    </p>
                    <div className="py-8 flex gap-4">
                        <button className="px-4 py-3 text-white bg-teal-800 rounded-lg">Get Started</button>
                        <button className="px-4 py-3 text-teal-800 border rounded-lg">Request a demo</button>
                    </div>
                    <p className="py-2 text-teal-700 text-lg">Setup in 5 minutes.</p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="flex gap-4 w-11/12 justify-between flex-wrap p-6 bg-teal-700 relative">
                          <img src="/eclipse_1.svg" alt="pic" className="w-24 h-auto absolute top-24 -left-12"/>
                          <img src="/eclipse_2.svg" alt="pic" className="w-24 h-auto absolute -top-12 -right-8 "/>
                          <img src="/eclipse_3.svg" alt="pic" className="w-24 h-auto absolute bottom-32 -right-8 "/>
                          <img src="/eclipse_4.svg" alt="pic" className="w-24 h-auto absolute -bottom-16 left-24 "/>

                          <img src="/img_1.svg" alt="pic" />
                          <img src="/img_2.svg" alt="pic" />
                          <img src="/img_3.svg" alt="pic" />
                          <img src="/img_4.svg" alt="pic" />
                          <img src="/img_5.svg" alt="pic" />


                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default HeroBanner