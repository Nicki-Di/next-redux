import {Fragment, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const navigation = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
    {name: 'Team', href: '#', icon: UsersIcon, current: false},
    {name: 'Projects', href: '#', icon: FolderIcon, current: false},
    {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
    {name: 'Documents', href: '#', icon: InboxIcon, current: false},
    {name: 'Reports', href: '#', icon: ChartBarIcon, current: false},
]
const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layer() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                {/* Hamburger sidebar for mobile */}
                <Transition.Root show = {sidebarOpen} as = {Fragment}>
                    <Dialog as = "div" className = "fixed inset-0 flex z-40 md:hidden" onClose = {setSidebarOpen}>
                        <Transition.Child
                            as = {Fragment}
                            enter = "transition-opacity ease-linear duration-300"
                            enterFrom = "opacity-0"
                            enterTo = "opacity-100"
                            leave = "transition-opacity ease-linear duration-300"
                            leaveFrom = "opacity-100"
                            leaveTo = "opacity-0"
                        >
                            <Dialog.Overlay className = "fixed inset-0 bg-gray-600 bg-opacity-75"/>
                        </Transition.Child>
                        <Transition.Child
                            as = {Fragment}
                            enter = "transition ease-in-out duration-300 transform"
                            enterFrom = "translate-x-full"
                            enterTo = "-translate-x-0"
                            leave = "transition ease-in-out duration-300 transform"
                            leaveFrom = "-translate-x-0"
                            leaveTo = "translate-x-full"
                        >
                            <div className = "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                                <Transition.Child
                                    as = {Fragment}
                                    enter = "ease-in-out duration-300"
                                    enterFrom = "opacity-0"
                                    enterTo = "opacity-100"
                                    leave = "ease-in-out duration-300"
                                    leaveFrom = "opacity-100"
                                    leaveTo = "opacity-0"
                                >
                                    <div className = "absolute top-0 left-0  pt-2">
                                        <button
                                            type = "button"
                                            className = "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick = {() => setSidebarOpen(false)}
                                        >
                                            <span className = "sr-only">Close sidebar</span>
                                            <XIcon className = "h-6 w-6 text-s-10"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className = "flex-shrink-0 flex items-center px-4">
                                    <img
                                        className = "h-8 w-auto"
                                        src = "https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                        alt = "Workflow"
                                    />
                                </div>
                                <div className = "mt-5 flex-1 h-0 overflow-y-auto">
                                    <nav className = "px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key = {item.name}
                                                href = {item.href}
                                                className = {classNames(
                                                    item.current
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                )}
                                            >
                                                <item.icon
                                                    className = {classNames(
                                                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-4 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden = "true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className = "flex-shrink-0 w-14" aria-hidden = "true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>


                {/* Static sidebar for mobile */}

                {/* Sidebar */}
                <div
                    className = "hidden md:flex md:flex-col md:fixed md:inset-y-0 w-[15%] shadow-md z-10 bg-s-100 items-center justify-between pt-5 overflow-y-auto ">
                    <div className = "flex items-center flex-shrink-0 px-4">
                        <img
                            className = "h-8 w-auto"
                            src = "/dashboard/layer-icon.png"
                            alt = "Workflow"
                        />
                    </div>
                        <nav className = "mt-5 flex-grow flex flex-col justify-center gap-12 px-2 pb-4 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key = {item.name}
                                    href = {item.href}
                                    className = {classNames(
                                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                >
                                    <item.icon
                                        className = {classNames(
                                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden = "true"
                                    />
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                </div>

                {/*header + main*/}
                <div className = "md:w-[85%] flex flex-col mr-auto">
                    {/*header*/}
                    <div className = "sticky top-0 flex-shrink-0 flex h-16 bg-s-100">
                        <button
                            type = "button"
                            className = "px-4 border-l border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick = {() => setSidebarOpen(true)}
                        >
                            <span className = "sr-only">Open sidebar</span>
                            <MenuAlt2Icon className = "h-6 w-6" aria-hidden = "true"/>
                        </button>
                        <div className = "flex-1 px-4 flex justify-between">
                            <div className = "flex-1 flex w-full md:ml-0">
                                {/* Header */}
                            </div>
                            <div className = "ml-4 flex items-center md:ml-6">
                                <div
                                    className = "flex flex-row gap-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <p>خروج از پنل</p>
                                    <LogoutRoundedIcon className = "h-6 w-6"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*main*/}
                    <main className = "bg-s-90 min-h-screen">
                        <div className = "py-6">
                            <div className = "max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className = "text-2xl font-semibold text-gray-900">Dashboard</h1>
                            </div>
                            <div className = "max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                <div className = "py-4">
                                    <div className = "border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                                </div>
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
