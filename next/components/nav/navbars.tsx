"use client"
import React from 'react';
import NavItem from "./navitem";
import { ClearPill } from '../ui/ClearPill';

// Define the type for navigation items
type NavItemData = {
    name: string;
    link: string;
};

const MainNavBar: React.FC = () => {
    const navData: NavItemData[] = [
        { name: "Experience", link: "#experience" },
        { name: "Projects", link: "#projects" },
        // { name: "Extracurriculars", link: "#extracurriculars" }, 
        // { name: "Contact",          link: "#contact" },          
        { name: "Terminal", link: "/terminal" }
    ];
    const modalId = "modal_lets_connect";

    return (
        <div className="navbar shadow-sm px-8 sm:px-4 xs:px-2"
            onClick={() => {
                if (typeof window === "undefined") return;
                const dlg = document.getElementById(modalId) as HTMLDialogElement | null;
                dlg?.showModal();
            }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content 
                        bg-gradient-to-b from-[#121212] to-[#0a0a0a]
                        text-lg rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navData.map((item, index) => (
                            <li key={index} className='rounded-box hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_0_24px_4px_rgba(16,185,129,0.25)]'><a href={item.link}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1">
                    {navData.map((item, index) => (
                        <li key={index}><a href={item.link}>{item.name}</a></li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-white text-black  border-black hover:bg-gray-300 hover:border-gray-400">
                    <svg aria-label="Email icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    Let's Connect!
                </button>
            </div>
            <dialog id={modalId} className="modal">
                <div className="modal-box max-w-4xl p-0 bg-transparent shadow-none">
                    <div className="
                        relative rounded-2xl border border-white/10
                        bg-gradient-to-b from-[#121212] to-[#0a0a0a]
                        text-neutral-100 p-6 sm:p-8
                        shadow-[0_1px_0_0_rgba(255,255,255,0.05),0_20px_60px_-20px_rgba(0,0,0,0.8)]
                    ">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
                                aria-label="Close"
                            >✕</button>
                        </form>

                        <h2 className="text-3xl font-extrabold text-center">Let’s Connect</h2>
                        <p className="mt-1 text-center opacity-80">I’d love to hear from you!</p>
                        <div className="mt-4">
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-3 text-center">
                                {/* First pill — full width on small, auto on larger */}
                                <div className="basis-full sm:basis-auto flex justify-center">
                                    <ClearPill href="">
                                        My Email: cmmorgado53@gmail.com
                                    </ClearPill>
                                </div>

                                {/* Remaining pills — stay centered on next line */}
                                <div className="flex justify-center gap-3 w-full sm:w-auto">
                                    <ClearPill
                                        href="https://www.linkedin.com/in/chris-morgado/"
                                        icon={
                                            <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                <path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" />
                                            </svg>
                                        }
                                    >
                                        My LinkedIn
                                    </ClearPill>

                                    <ClearPill href="/images/ChrisMorgadoResume.pdf">
                                        My Resume
                                    </ClearPill>
                                </div>
                            </div>
                        </div>


                        <div className="mt-6 grid gap-6 md:grid-cols-1">
                            <div className="
                                relative rounded-xl p-5
                                border border-emerald-500/30
                                bg-gradient-to-b from-[#121212] to-[#0a0a0a]
                                shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_0_30px_6px_rgba(16,185,129,0.25)]
                                w-full align-items-center justify-items-center
                            ">
                                <h3 className="text-xl font-semibold text-emerald-300">Email Me!</h3>

                                <form
                                    className="mt-4 space-y-3"
                                    onSubmit={async (e) => {
                                        // e.preventDefault();
                                        // const form = e.currentTarget as HTMLFormElement;
                                        // const data = {
                                        //     name: (form.elements.namedItem('name') as HTMLInputElement).value,
                                        //     email: (form.elements.namedItem('email') as HTMLInputElement).value,
                                        //     message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
                                        // };
                                        // // TODO: replace with your API route or form service
                                        // await fetch('/api/contact', {
                                        //     method: 'POST',
                                        //     headers: { 'Content-Type': 'application/json' },
                                        //     body: JSON.stringify(data),
                                        // });
                                        // (form.closest('dialog') as HTMLDialogElement)?.close();
                                    }}
                                >
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        className="textarea textarea-bordered w-full h-32"
                                        required
                                    />
                                    <button className="btn btn-primary w-full mt-2">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

const TerminalNavBar: React.FC = () => {
    const leftNavData: NavItemData[] = [
        { name: "Terminal", link: "/terminal" },
    ];

    const navData: NavItemData[] = [
        { name: "About", link: "/terminal/about" },
        { name: "Command Line", link: "/terminal/cmd" },
        { name: "Games", link: "/terminal/games" },
        { name: "Exit Terminal", link: "/" }
    ];

    return (
        <>
        </>
    );
}

export default MainNavBar;
export { TerminalNavBar };
