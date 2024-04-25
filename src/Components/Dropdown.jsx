import { Menu, Transition } from '@headlessui/react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import './sidebar.css';

const Dropdown = ({open}) => {
    
    return (
        <Menu className="">
        {({ opens }) => (
            <>
                <Menu.Button className={`${opens? "bg-gray-50" : ""} inline-flex w-full justify-between items-center rounded-md  px-2 py-2 text-lg font-medium text-[#5d596c] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}>
                    <p className="flex items-center gap-2"><span className="lg:text-xl text-lg"> <RxDashboard /> </span> <span className={`${!open ? "hidden-lg" : ""} `}>Dashboards </span></p>

                    <MdKeyboardArrowRight
                        className={`${opens ? 'transform rotate-90' : ''}  h-5 w-5 text-[#5d596c]`}
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
        <div className="  mt-2 w-full sm:w-56  rounded-md bg-white  focus:outline-none">
                            <Menu.Items>
             <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]  text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md px-4 py-2 text-lg font-medium me-3 w-full`}
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
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]  text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md px-4 py-2 text-lg font-medium me-3 w-full`}
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
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]  text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md px-4 py-2 text-lg font-medium me-3 w-full`}
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
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]  text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md px-4 py-2 text-lg font-medium me-3 w-full`}
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
                                                active ? 'bg-gradient-to-r from-[#7367f0]  to-[#9b87e3]  text-white' : 'text-[#5d596c]'
                                            } group flex items-center rounded-md px-4 py-2 text-lg font-medium me-3 w-full`}
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

export default Dropdown;
