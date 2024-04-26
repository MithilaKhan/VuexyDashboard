import { MdOutlineMail } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import { TbCalendar, TbLayoutKanban } from "react-icons/tb";
import './sidebar.css';

const SideBtn = ({open}) => {
    return (
        <div>
          <li 
          className="flex  rounded-md w-[232px] h-[22px] px-[16px] py-[8px] cursor-pointer text-[.9375rem]  text-[#5d596c] items-center gap-2 dark:text-[#b6bee3]  mb-2" >
             <span className="font-medium "><MdOutlineMail /> </span> 
              <span className={`${!open ? "hidden-lg" : ""} `}> Email </span>
            </li>
            
            <li 
          className="flex  rounded-md w-[232px] h-[22px] px-[16px] py-[8px] cursor-pointer text-[.9375rem] text-[#5d596c] items-center gap-2 dark:text-[#b6bee3]  mb-2" >
             <span className="font-medium "><PiChats /> </span> 
              <span className={`${!open ? "hidden-lg" : ""} `}> Chat </span>
            </li>

            <li 
          className="flex  rounded-md w-[232px] h-[22px] px-[16px] py-[8px] cursor-pointer text-[.9375rem]  text-[#5d596c] items-center gap-2 dark:text-[#b6bee3] mb-2" >
             <span className="font-medium "><TbCalendar /> </span> 
              <span className={`${!open ? "hidden-lg" : ""} `}> Calendar </span>
            </li>

            <li 
          className="flex  rounded-md w-[232px] h-[22px] px-[16px] py-[8px] cursor-pointer text-[.9375rem]  text-[#5d596c] items-center gap-2 dark:text-[#b6bee3] mb-2 " >
             <span className="font-medium "><TbLayoutKanban /> </span> 
              <span className={`${!open ? "hidden-lg" : ""} `}> Kanban </span>
            </li>

        </div>
    );
};

export default SideBtn;