import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../Assets/medicare 3.png'
import { NavHashLink, HashLink as Link } from 'react-router-hash-link'
import Button from './Button'

const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Caregivers', href: 'caregivers' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
   

]

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <div className="">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between bg-white shadow-md fixed w-full  p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/home" className="-m-1.5 p-1.5">
                            <img
                                className="h-14 w-20 "
                                src={logo}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 ">
                        {navigation.map((item) => (
                            <NavHashLink  to={item.href} className=" transition-ease-out text-sm font-extrabold border-b-2 border-white hover:border-b-emerald-500 hover:border-b-2 p-3  font-Poppins leading-6 text-gray-900" smooth key={item.index} >{item.name} </NavHashLink>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 gap-5 lg:justify-end">
                       <Button text="Sign up" navigate="/createaccount"/> 
                       <Button text="Login" navigate="/login"/> 
                       
                       
                       </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#logo" className="-m-1.5 p-1.5">

                                <img
                                    className="h-8 w-auto"
                                    src={logo}
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link to={item.href} key={item.index} onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" smooth  >{item.name} </Link>
                                    ))}
                                </div>
                                <div className="py-6 flex flex-col gap-3">
                                <Button text="Sign up" navigate="/createaccount"/> 
                       <Button text="Login" navigate="/login"/> 
                       
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>

    )
}

export default Navbar