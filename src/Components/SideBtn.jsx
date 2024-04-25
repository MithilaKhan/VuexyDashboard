import { MdOutlineMail } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import { TbCalendar, TbLayoutKanban } from "react-icons/tb";
import './sidebar.css';

const SideBtn = ({open}) => {
    return (
        <div>
          <li 
          className="flex  rounded-md px-2 py-2 cursor-pointer text-lg font-medium text-[#5d596c] items-center gap-2" >
             <span className="lg:text-xl text-lg"><MdOutlineMail /> </span> 
              <span className={`${!open ? "hidden-lg" : ""} `}> Email </span>
            </li>
            
          <li 
          className= " flex  rounded-md px-2 py-2 cursor-pointer text-lg font-medium text-[#5d596c] items-center gap-2" >
             <span className="lg:text-xl text-lg"><PiChats /> </span> 
              <span className={`${!open ? "hidden-lg" : ""} `}> Chat </span>
            </li>

          <li 
          className=" flex  rounded-md px-2 py-2 cursor-pointer text-lg font-medium text-[#5d596c] items-center gap-2" >
             <span className="lg:text-xl text-lg"><TbCalendar /> </span> 
              <span className={`${!open ? "hidden-lg" : ""} `}> Calendar </span>
            </li>

          <li 
          className=" flex  rounded-md px-2 py-2 cursor-pointer text-lg font-medium text-[#5d596c] items-center gap-2" >
             <span className="lg:text-xl text-lg"><TbLayoutKanban /> </span> 
              <span className={`${!open ? "hidden-lg" : ""} `}> Kanban </span>
            </li>

        </div>
    );
};

export default SideBtn;