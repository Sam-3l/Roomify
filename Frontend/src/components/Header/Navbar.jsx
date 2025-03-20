export default function Navbar(props){
    return(

            <nav  className={props.isOpen ? "max-w-screen w-[400px] p-4 bg-white border-l-1 border-secondary h-[100dvh] justify-between absolute right-0 top-0 flex flex-col items-start" : "close max-w-screen w-[400px] p-4 bg-white border-l-1 border-secondary h-screen justify-between absolute right-0 top-0 flex flex-col items-start"}>    
                
                <b></b>

                {/* Navigation Links*/}
                <ul className="flex flex-col gap-12  text-primary text-xl px-6">
                    <li>
                    <a href="#" className="hover:text-secondary">
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-secondary">
                        Timetable
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-secondary">
                        Announcements
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-secondary">
                        Contact
                    </a>
                    </li>
                </ul>
                <div className="flex flex-col w-full gap-2 ">
                    <button className="border-1 border-secondary w-full px-6 py-2.5 rounded-md cursor-pointer">
                        Login
                    </button>
                    <button className="bg-secondary hover:bg-tertiary w-full cursor-pointer text-white px-6 py-3 rounded-md">
                        Sign Up
                    </button>
                </div>

            </nav>

    )
}