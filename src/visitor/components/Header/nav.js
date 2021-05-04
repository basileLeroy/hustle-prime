import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { SidebarData } from './sidebarData'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const Nav = () => {

    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar(!sidebar);
    return (
        <div>

            <div className="relative text-blue-aliceBlue mobile-nav z-50">
                <div className="navbar bg-gray-600">
                    <Link to="#" className="menu-bars flex ml-8 align-middle py-4 text-2xl">
                        <FaIcons.FaBars onClick={ShowSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu bg-gray-600 w-64 h-screen flex justify-center fixed overflow-auto top-0 left-0 duration-700 active' : 'nav-menu bg-gray-600 w-64 h-screen flex justify-center fixed top-0 -left-full duration-700'}>
                    <ul className="nav-menu-items w-nine" onClick={ShowSidebar}>
                        <li className="navbar-toggle">
                            <Link className="menu-bars flex justify-end mt-4 text-3xl">
                                <AiIcons.AiOutlineClose/>  
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName} >
                                    <Link to={item.path} className="no-underline w-full h-full flex items-center py-0 px-4 hover:bg-red-500 rounded-md">
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <nav className="text-blue-aliceBlue w-full desktop-nav">

                <div className="lg:mx-64">
                    <div className="flex w-full flex-row flex-wrap lg:mr-24 justify-around items-center">
                        <div>
                            <span className="inline-flex justify-around w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  lg:text-xl text-blue-aliceBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"><Link to="/">HOME</Link></span>
                        </div>

                        <Menu as="div" className="relative inline-block text-middle">
                            {({ open }) => (
                                <>
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  lg:text-xl text-blue-aliceBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Activities
                                    </Menu.Button>
                                </div>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute mt-2 w-56 bg-gray-hustle bg-opacity-70 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                    >
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/activities/map" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Map</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/activities/arena" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Arena</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/activities/portal" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Portal</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/activities/gembay" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2 ' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Gem-bay</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/activities/dungeon" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Dungeon</Link>
                                            )}
                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>

                                </Transition>
                                </>
                            )}
                        </Menu>
                        <Menu as="div" className="relative inline-block text-middle">
                            {({ open }) => (
                                <>
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  lg:text-xl text-blue-aliceBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Castle
                                    </Menu.Button>
                                </div>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute bg-gray-hustle bg-opacity-70 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                    >
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="#" className={classNames( active ? 'bg-red-700 cursor-not-allowed text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Not available yet</Link>
                                            )}
                                            </Menu.Item>

                                            {/* <Menu.Item>
                                            {({ active }) => (
                                                <Link to="#" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Upgrades</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="#" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Rooms</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="#" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Defense</Link>
                                            )}
                                            </Menu.Item> */}

                                        </div>
                                    </Menu.Items>

                                </Transition>
                                </>
                            )}
                        </Menu>
                        <Menu as="div" className="relative inline-block text-middle">
                            {({ open }) => (
                                <>
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  lg:text-xl text-blue-aliceBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Clans
                                    </Menu.Button>
                                </div>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute bg-gray-hustle bg-opacity-70 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                    >
                                        <div className="py-1">
                                            {/* <Menu.Item>
                                            {({ active }) => (
                                                <Link to="#" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2 cursor-not-allowed' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>What is it?</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="#" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2 cursor-not-allowed' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Clan Wars</Link>
                                            )}
                                            </Menu.Item> */}

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/clans/clan-territories" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Clan Territories</Link>
                                            )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>

                                </Transition>
                                </>
                            )}
                        </Menu>
                        <Menu as="div" className="relative inline-block text-middle">
                            {({ open }) => (
                                <>
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  lg:text-xl text-blue-aliceBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    META
                                    </Menu.Button>
                                </div>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute bg-gray-hustle bg-opacity-70 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                    >
                                        <div className="py-1">
                                            {/* <Menu.Item>
                                            {({ active }) => (
                                                <Link to="#" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Squads</Link>
                                            )}
                                            </Menu.Item> */}

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/meta/ancient-sets" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Ancient Sets</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/meta/gems" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Gems</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/meta/runes" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Runes</Link>
                                            )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>

                                </Transition>
                                </>
                            )}
                        </Menu>
                        <Menu as="div" className="relative inline-block text-middle">
                            {({ open }) => (
                                <>
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  lg:text-xl text-blue-aliceBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    About Us
                                    </Menu.Button>
                                </div>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute bg-gray-hustle bg-opacity-70 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                                    >
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/about" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Who are we?</Link>
                                            )}
                                            </Menu.Item>

                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link to="/discord" className={classNames( active ? 'bg-red-700 text-blue-aliceBlue ml-2' : 'text-blue-aliceBlue', 'block px-4 py-2 text-lg' )}>Discord</Link>
                                            )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>

                                </Transition>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Nav;