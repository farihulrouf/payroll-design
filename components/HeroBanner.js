import React from "react"
const HeroBanner = () => {
    return (
        <React.Fragment>
            <div className="max-w-[1200px] mx-auto flex justify-between mt-4 mb-4">
                <div className="w-1/2 py-4 max-w-md">
                    <h1 className="text-5xl text-bold">
                         Empower Your Workforce, Unlock Africa Potential
                    </h1>
                    <p className="py-4">Empower your business with our comprehensive payroll platform tailored for the African market. 
                        Streamline your Payroll Processes, Ensure Compliance, and Focus on Growth
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="flex gap-4 w-11/12 justify-between flex-wrap p-6 bg-teal-700">
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