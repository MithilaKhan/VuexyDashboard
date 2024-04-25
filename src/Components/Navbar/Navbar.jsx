
import { BsSearch } from "react-icons/bs";
import { IoLanguageOutline, IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import person from "../../assets/person.jpg"
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = ({onMenubarClick ,menubar}) => {

    return (
        <div className=" font-sans ">
            <div className=" navbar backdrop-blur-md bg-white/30 z-0  lg:z-10">
                <div className="navbar bg-base-100 rounded-md shadow-lg lg:mx-4 mx-2 mt-1 lg:mt-3">
                  <div className="flex items-center gap-5 ms-2 ">

                  {
                    menubar && ( <div onClick={onMenubarClick} className="lg:hidden">
                    <RxHamburgerMenu  className="text-3xl cursor-pointer  mr-4 " />
                    </div>)
                  }
                 

                  </div>
                <div className="flex-1 ">
    <p className=" lg:text-xl text-lg flex items-center gap-3 lg:ms-5  "><span><BsSearch /> </span> 
      <span className="text-gray-400 hidden sm:inline text-lg"> Search(Ctrl+/)</span>
      </p>
    
  </div>
  <div className="flex-none text-[#6f6b7d] items-center lg:gap-5 gap-3">
    <p className="lg:text-2xl text-lg flex items-center lg:gap-5 gap-3 "> <span><IoLanguageOutline /></span> <span><RiComputerLine /></span> <span><MdOutlineDashboardCustomize/></span> </p>

    <p className="flex items-center lg:text-2xl text-lg relative">
  <IoNotificationsOutline className="" />
  <sup className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">5</sup>
</p>

<div className="relative lg:me-5">
  <div className="lg:w-12 w-8 rounded-full overflow-hidden">
    <img src={person} alt="Avatar" />
  </div>
  <div className="absolute bottom-0 right-0 p-1 bg-green-500 rounded-full">
  </div>
</div>
   
  </div>
                </div>

</div>
        </div>
    );
};

export default Navbar;