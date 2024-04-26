import { useState } from "react";
import Dropdown from "./Components/Dropdown";
import FrontPage from "./Components/FrontPages";
import LayoutDropDown from "./Components/LayoutDropDown";
import SideBtn from "./Components/SideBtn";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import Navbar from "./Components/Navbar/Navbar";
import clsx from "clsx";
import { IoCloseOutline } from "react-icons/io5";
import Datatable from "./Components/DataTable/DataTable";
import SetttingSideBar from "./Components/SettingSideBar/SetttingSideBar";


const App =() => {
  const [open, setOpen] = useState(true);
  const [circleClicked, setCircleClicked] = useState(false);
  const [isSideMenuOpen, setMenu] = useState(false);
  const toggleCircle = () => {
    setCircleClicked(!circleClicked);
  };

 const handleMouseEnter = () => {
    if (!circleClicked) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!circleClicked) {
      setOpen(false);
    }
  };

  const toggleSidebar=()=>{
    setMenu(!isSideMenuOpen)
  }

  return (
    <>
    
       <div className="flex font-sans">
          {/* menu for small device  */}
          {/* <div className="lg:hidden">
          <RxHamburgerMenu  
       onClick={() => setMenu(true)}
         className="text-3xl cursor-pointer  mr-4 " />
          </div> */}
      
       {/* sidebar for large device  */}
      <div
        className={` ${
          open ? "w-[276px] " : "w-20 "
        } hidden lg:block text-black   relative duration-300  dark:bg-[#2f3349] dark:text-[#b6bee3]`}
        onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
      <div className="flex items-center justify-between  w-[224px] h-[64px] ps-[8px] pe-[8px] ms-[14px] me-[18px]">
      <div className="flex  items-center ">
          <img
            src="./src/assets/logo.svg"
            className={`cursor-pointer duration-500 w-[34px] h-[24px] ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={` origin-left text-[#5d596c] font-bold text-[1.375rem] duration-200 dark:text-[#b6bee3] ms-[10px] ${
              !open && "scale-0"
            }`}
          >
           Vuexy
          </h1>
        </div>

      <p className={`${!open && "hidden"}   
           w-[16px] h-[16px] `}
            onClick={() => {            
              toggleCircle();
            }}>
            {circleClicked ? <FaRegCircleDot /> : <FaRegCircle />}
          </p>
      </div>
        
        <div className="mx-[14px]">
        <Dropdown open={open} />
        <LayoutDropDown open={open} />
        <FrontPage open={open} />

        <p className={`${!open && "hidden"} mx-[14px]  text-[0.8125rem] font-medium text-[#8e8a9c] dark:text-[#949bbd] uppercase my-3 `}>APPS & PAGES</p>

        <ul className="">
          <SideBtn open={open} />
          <Dropdown open={open} />
        <LayoutDropDown open={open} />
        <FrontPage open={open} />
        </ul>

 <p className={`${!open && "hidden"} mx-[14px]  text-[0.8125rem] font-medium text-[#8e8a9c] dark:text-[#949bbd] uppercase my-3`}>Components</p>
  <ul className="">
          <SideBtn open={open} />
          <Dropdown open={open} />
        <LayoutDropDown open={open} />
        <FrontPage open={open} />
        </ul>
        <p className={`${!open && "hidden"} mx-[14px]  text-[0.8125rem] font-medium text-[#8e8a9c] dark:text-[#949bbd] uppercase my-3 `}>APPS & PAGES</p>

<ul className="">
  <SideBtn open={open} />
  <Dropdown open={open} />
<LayoutDropDown open={open} />
<FrontPage open={open} />
</ul>
        </div>
       

      </div>

 {/* sidebar mobile menu */}
 <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/20  backdrop-blur-sm top-0 right-0 -translate-x-full transition-all overflow-y-auto z-20  dark:bg-[#2f3349]",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <div className="text-black bg-white flex-col absolute left-0 top-0  p-8 gap-8  w-64 flex ">
           

            {/* Sidebar content for small devices */}
            <div className="text-black    relative duration-300 z-20 mt-2   ">
              <div className="flex items-center justify-between mb-5">
              <div className="flex gap-2 items-center">
                <img
                  src="./src/assets/logo.svg"
                  className={`cursor-pointer duration-500 w-8 ${
                    open && "rotate-[360deg]"
                  }`}
                />
                <h1 className="origin-left text-[#5d596c] font-bold text-2xl duration-200 dark:text-[#b6bee3]">
                  Vuexy
                </h1>
                    
              
              </div>
              <p>
                    <IoCloseOutline
              onClick={() => setMenu(false)}
              className=" text-gray-500 text-3xl  pe-0 cursor-pointer dark:text-[#b6bee3]"
            />
                    </p>
              </div>
              

              {/* Dropdown, LayoutDropDown, and FrontPage components */}
              <Dropdown open={open} />
              <LayoutDropDown open={open} />
              <FrontPage open={open} />

              {/* Sidebar items */}
              <p className="px-2 py-5 text-xl font-medium text-[#8e8a9c] dark:text-[#b6bee3]">
                APPS & PAGES
              </p>
              <ul>
                <SideBtn open={open} />
                <Dropdown open={open} />
                <LayoutDropDown open={open} />
                <FrontPage open={open} />
              </ul>

              <p className="px-2 py-5 text-xl font-medium text-[#8e8a9c] dark:text-[#b6bee3]">
                Components
              </p>
              <ul>
                <SideBtn open={open} />
                <Dropdown open={open} />
                <LayoutDropDown open={open} />
                <FrontPage open={open} />
              </ul>
            </div>
          </div>
        </div>


      <div className=" flex-1  bg-base-100 shadow-lg dark:bg-black ">
        <div className="z-10">
        <Navbar onMenubarClick={toggleSidebar} menubar={true} />
        <div className=" lg:m-5 m-2 lg:mt-8 relative ">
                  <Datatable/>
        </div>
        </div>
        
        <div className=' z-20 hidden lg:block absolute top-52 right-0 '>
                <SetttingSideBar/>
            </div>
      </div>
    </div>
    </>
  )
}

export default App
