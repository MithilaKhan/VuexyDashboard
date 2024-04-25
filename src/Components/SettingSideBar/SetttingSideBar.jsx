import { Sidebar } from 'primereact/sidebar';
import  { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

const SetttingSideBar = () => {
    const [visibleRight, setVisibleRight] = useState(false);
    return (
        <div  className="card ">
           <div onClick={() => setVisibleRight(true)} className="bg-[#7367f0] text-white w-12 h-10 rounded-s-md "> <p className='px-3 py-2 text-2xl'>  <AiOutlineSetting /> </p> </div>

           <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)} className='bg-base-100 shadow-xl p-5'>
    <h2>Right Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar> 
        </div>
    );
};

export default SetttingSideBar;