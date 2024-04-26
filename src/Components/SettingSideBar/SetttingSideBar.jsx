import { Sidebar } from 'primereact/sidebar';
import  { useEffect, useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { PiCloudSunDuotone, PiLaptopDuotone, PiSunDuotone } from "react-icons/pi";
const SetttingSideBar = () => {
    const [visibleRight, setVisibleRight] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  },[])

    useEffect(()=>{
      if(theme === "dark"){
        document.documentElement.classList.add("dark")
      }else{
        document.documentElement.classList.remove("dark")
      }
      localStorage.setItem("theme",theme)
    },[theme])

    const handleLightTheme =()=>{
      setTheme('light');
        localStorage.setItem('theme', 'light');
    }
    const handleDarkTheme =()=>{
      setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
   
    return (
        <div  className="card  swap swap-rotate ">
           <div onClick={() => setVisibleRight(true)} className="bg-[#7367f0] text-white w-11 h-10 rounded-s-md "> <p className='ps-3 pe-2 py-2 text-2xl'>  <AiOutlineSetting /> </p> </div>

           <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='bg-base-100 shadow-xl p-5 w-[352px] dark:bg-black dark:text-[#cfd3ec]'>
            <div className='border-b-2 border-gray-200  '>
            <h2 className="text-lg text-[#6F6B7D] dark:text-[#cfd3ec] ">Template Customizer</h2>
            <p className='text-[#5D596C] text-sm mb-2 dark:text-[#B6BEE3]'>Customize and preview in real time </p>
            </div>
    <p className="text-md text-[#6F6B7D] mt-5 pb-1 dark:text-[#CFD3EC]"> Style (Mode)</p>
    <div className="flex gap-3 ">
        <div>
        <div className="w-[96px] h-[50px] border-2 border-gray-300 rounded-lg" onClick={handleLightTheme}><p  className="text-3xl px-8 py-2 dark:text-[#cfd3ec]">
             <PiSunDuotone />
             </p>  </div>
        <p className="text-md text-[#6F6B7D] ps-2 dark:text-[#cfd3ec]">Light</p>
        </div>
       

        <div>
        <div className="w-[96px] h-[50px] border-2 border-gray-300 rounded-lg" onClick={handleDarkTheme}><p className="text-3xl px-8 py-2 dark:text-[#cfd3ec]"> <PiCloudSunDuotone /> </p> </div>
        <p className="text-md text-[#6F6B7D] ps-2 dark:text-[#cfd3ec]">Dark</p>
        </div>
       

        <div>
        <div className="w-[96px] h-[50px] border-2 border-gray-300 rounded-lg" onClick={() => setTheme(localStorage.getItem('theme'))}><p className="text-3xl px-8 py-2 dark:text-[#cfd3ec]"><PiLaptopDuotone /> </p> </div>
        <p className="text-md text-[#6F6B7D] ps-2 dark:text-[#cfd3ec]">System</p>
        </div>
        
    </div>
    
    <p className="text-md text-[#6F6B7D] mt-7 pb-1 dark:text-[#cfd3ec] font-semibold "> About Us</p>
    <p className=" dark:text-[#CFD3EC] text-justify ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar> 
        </div>
    );
};

export default SetttingSideBar;