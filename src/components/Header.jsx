export default function Header() {
    return (
        <>
            <header className="w-full h-[60px] flex flex-wrap bg-sky-900">
                <div className="w-[50%] lg:w-[30%] flex flex-wrap justify-center items-center h-full"><h1 className="text-white">Bardia Ghadaksaz</h1></div>
                <nav className="w-[50%] lg:w-[70%] flex flex-wrap justify-center items-center h-full">
                    <ul className="w-full h-full flex flex-wrap justify-evenly items-center">
                        <li className="flex flex-wrap justify-center items-center">
                            <a href="" className="text-white w-full hidden lg:flex flex-wrap justify-center items-center">
                                Home
                            </a>
                        </li>
                        <li className="flex flex-wrap justify-center items-center">
                            <a href="" className="text-white w-full flex flex-wrap justify-center items-center">
                                About
                            </a>

                                <ul className="sub w-[200px] h-[150px] bg-red-900 border text-white">
                                    <li className="w-full h-full flex flex-wrap justify-center items-center"><p className="w-full h-full flex flex-wrap justify-center items-center p-2 text-m">Bardia ghadaksaz , Front end developer , API in react project random users.</p></li>
                                </ul>


                        </li>
                        <li className="flex flex-wrap justify-center items-center">
                            <a href="" className="text-white w-full hidden lg:flex flex-wrap justify-center items-center">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}