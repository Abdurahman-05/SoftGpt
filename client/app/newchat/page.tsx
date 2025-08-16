'use client';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import img from '@/assets/dashboard/Vector.png'
import tool1 from '@/assets/icons/Color_Mode.png'
import tool3 from '@/assets/icons/Avatar.png'
import tool2 from '@/assets/icons/Sign_out_circle.png'
import arrow from '@/assets/icons/arrow.png'
import paperClip from '@/assets/icons/paper_clip.png'

export default function IntroPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const assistants = [
        {  label: 'sugeest samething' },
        {  label: 'article' },
        {  label: 'wether' },
        {  label: 'sport' },
        {  label: 'press' },
        {  label: 'food' },
        {  label: 'plants' },
    ];

    const history = [
        { title: 'Coding Assistance Requested', time: '30 minutes ago' },
        { title: 'Write an article about AI Assistant', time: '1 day ago' },
        { title: 'Why Cubism was revolutionary?', time: '2 day ago' },
    ];

    const navItems = [
        { label: 'Dashboard' },
        { label: 'Start new chat' },
        { label: 'AI text generator' },
        { label: 'AI chat' },
        { label: 'AI image generator' },

    ];

    const sidebarHistory = [
        'Why Cubism was revolutionary?',
        'Healthy dinner recipes',
        'Tell me a joke',
    ];

    return (
        <div className="min-h-screen flex  bg-hero">
            {/* Sidebar */}
            <aside
                className={`bg-hero transform transition-transform duration-500 ease-in-out z-40 border-r-[1px] border-gray-200 ${sidebarOpen ? 'w-56 translate-x-0' : 'w-24 translate-x-0'
                    }`}
            >
                <div className="h-full flex flex-col justify-between">
                    <div className="px-4 pt-[35px]">
                        <h1 className="text-secondery font-extrabold text-3xl text-center mb-4">Soft GPT</h1>
                        <hr className='border-gray-400 mb-4' />
                        <nav className="space-y-1">
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    type="button"
                                    variant='primary'
                                    className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm`}>
                                    <img src={img.src} alt="" />
                                    <span className={`${sidebarOpen ? 'inline' : 'hidden'} truncate`}>
                                        {item.label}
                                    </span>
                                </Button>
                            ))}
                        </nav>

                        <div className="mt-[38px] text-xs font-semibold text-secondery">History</div>
                        <div className="mt-2 space-y-3">
                            {sidebarHistory.map((h, i) => (
                                <div key={h} className="text-sm text-secondery/90">
                                    <div className={`${sidebarOpen ? 'block' : 'hidden'} truncate`}>{h}</div>
                                    {(i === 0 || i == 1) && <div className="my-2 h-px bg-gray-200" />}
                                </div>
                            ))}
                            <button className="text-sm font-medium text-primary ">
                                View all
                            </button>
                        </div>
                    </div>

                    <div className="px-4 pb-4">
                        <hr className='mt-2 border-gray-500' />
                        <div className="flex items-center justify-between rounded-md  pt-2">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                    A
                                </div>
                                <span className={`${sidebarOpen ? 'inline' : 'hidden'} text-secondery font-medium`}>
                                    Alexandra
                                </span>
                            </div>
                            <span className="text-secondery">▾</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <div className="h-screen flex flex-col pt-[10vh] ">
                {/* Header (24px or whatever you set) */}
                <div className="h-6 flex justify-between items-center px-8 pb-2">
                    <div className="text-primary text-xl font-bold">AI Chat</div>
                    <div className="flex items-center gap-2">
                        <img src={tool2.src} alt="" />
                        <img src={tool3.src} alt="" />
                        <img src={tool1.src} alt="" />
                    </div>
                </div>

                {/* Body fills the rest of the screen */}
                <div className="flex-1  py-[70px] flex flex-col justify-center items-center max-w-5xl mx-auto px-6 bg-white">
                    {/* Heading */}
                    <h1 className="text-center text-4xl md:text-5xl font-extrabold text-secondery tracking-wide mb-20">
                        What can I help with?
                    </h1>

                    {/* Input */}
                    <div className="border-2 w-3/4 border-gray-300 flex px-3 py-2 rounded-lg">
                        <input
                            type="text"
                            placeholder="message"
                            className="border-none px-4 py-2 w-full focus:outline-none"
                        />
                        <button><img src={paperClip.src} alt="" /></button>
                        <button className="bg-primary px-3 rounded-md ml-2">
                            <img src={arrow.src} alt="" />
                        </button>
                    </div>

                    {/* Assistant chips */}
                    <div className="my-[65px] w-3/4 flex flex-wrap items-center justify-center gap-3">
                        {assistants.map((a) => (
                            <button
                                key={a.label}
                                type="button"
                                className="inline-flex items-center gap-2 rounded-2xl  border border-primary/40 bg-white px-4 py-2 text-sm text-secondery shadow-sm hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                                aria-label={a.label}
                            >
                                <span>{a.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}