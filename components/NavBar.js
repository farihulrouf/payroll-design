
import React from "react"
const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="h-20">
                <div className="max-w-[1200px] h-full mx-auto flex items-center justify-between flex-wrap bg-white drop-shadow-lg px-8 rounded-[100px]">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <img src="/logo.svg" alt="logo" />
                    <span className="font-semibold text-xl tracking-tight">Dreambills</span>
                </div>
                {/*
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                */}
                <ul className="flex gap-4">
                    <li>
                        Why Dreambill
                    </li>
                    <li>
                        Contact us
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Blog
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    Sign
                    <button className="bg-teal-800 px-5 py-3 rounded-lg text-white">Get Started</button>
                </div>
                {/*
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-pink-500">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Docs
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                    </div>
                </div>
            */}
            </div>
            </nav>

        </React.Fragment>
    )
}
export default NavBar