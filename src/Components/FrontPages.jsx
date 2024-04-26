import { Menu, Transition } from '@headlessui/react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiCreditCardFront } from "react-icons/bi";
import { FaRegCircle } from "react-icons/fa";
import './sidebar.css';

const FrontPage = ({open}) => {
    
    return (
        <Menu>
        {({ opens }) => (
            <>
                <Menu.Button className={`${opens? "bg-gray-50" : ""} inline-flex  justify-between items-center rounded-md  w-[232px] h-[22px] px-[16px] py-[8px] text-lg  text-[#5d596c] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 dark:text-[#b6bee3] mb-2 text-[.9375rem]`}>
                <p className="flex items-center gap-2"><span className=" font-medium"> <BiCreditCardFront /> </span> <span className={`${!open ? "hidden-lg" : ""} `}>FrontPages </span></p>

                    <MdKeyboardArrowRight 
                        className={`${opens ? 'transform rotate-90' : ''}  h-5 w-5 text-[#5d596c] ${!open ? "hidden-lg" : ""}`}
                        aria-hidden="true"
                    />
                </Menu.Button>

                <div>
                    <Transition
                        show={opens}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
        <div className="  mt-2 w-full sm:w-56  rounded-md bg-white  focus:outline-none dark:bg-[#2f3349] ">
                            <Menu.Items>
             <Menu.Item>
                                    {({ active }) => (
                                        <button
                                             className={`${
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]   text-white dark:text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md   text-[.9375rem] font-medium   dark:text-[#b6bee3]  w-[232px] h-[38px] px-[28px]`}
                                        >
                                            {active ? (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            )}
                                          Analytics
                                        </button>
                                    )}
            </Menu.Item>
                               
             <Menu.Item>
                                    {({ active }) => (
                                        <button
                                             className={`${
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]   text-white dark:text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md   text-[.9375rem] font-medium   dark:text-[#b6bee3]  w-[232px] h-[38px] px-[28px]`}
                                        >
                                            {active ? (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            )}
                                          CRM
                                        </button>
                                    )}
            </Menu.Item>
                               
             <Menu.Item>
                                    {({ active }) => (
                                        <button
                                             className={`${
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]   text-white dark:text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md   text-[.9375rem] font-medium   dark:text-[#b6bee3]  w-[232px] h-[38px] px-[28px]`}
                                        >
                                            {active ? (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            )}
                                          Ecommerce
                                        </button>
                                    )}
            </Menu.Item>
                               
             <Menu.Item>
                                    {({ active }) => (
                                        <button
                                             className={`${
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]   text-white dark:text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md   text-[.9375rem] font-medium   dark:text-[#b6bee3]  w-[232px] h-[38px] px-[28px]`}
                                        >
                                            {active ? (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            )}
                                          Logistics
                                        </button>
                                    )}
            </Menu.Item>
                               
             <Menu.Item>
                                    {({ active }) => (
                                        <button
                                             className={`${
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]   text-white dark:text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md   text-[.9375rem] font-medium   dark:text-[#b6bee3]  w-[232px] h-[38px] px-[28px]`}
                                        >
                                            {active ? (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <FaRegCircle
                                                    className="mr-3 text-sm"
                                                    aria-hidden="true"
                                                />
                                            )}
                                          Academy
                                        </button>
                                    )}
            </Menu.Item>
                               
                            </Menu.Items>
                        </div>
                    </Transition>
                </div>
            </>
        )}
    </Menu>
    );
};

export default FrontPage;
