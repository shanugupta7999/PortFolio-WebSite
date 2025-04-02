import React, { useEffect, useState } from 'react';
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import image1 from '../Asset/profile-pic.png'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [currentText, setCurrentText] = useState('Web Developer');
    const textOptions = [
        'Software Engineer',
        'MERN Stack Developer',
        'Frontend Developer',
        'Backend Developer',
        'UI / UX Designer',
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % textOptions.length; // Loop through text options
            setCurrentText(textOptions[index]);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <section
            id="home"
            className="flex items-center justify-center gap-[10rem] mt-[1rem] px-20 w-screen h-screen bg-gray-900 "
        >
            <div className="flex flex-col items-start justify-center ">
                <h1 className="text-7xl font-bold mt-[1.5rem] leading-[1] bg-gray-900 text-white">
                    Hi, It's <span className="text-[#0080ff]">Shanu</span>
                </h1>
                <h3 className="relative text-3xl font-semibold mt-4 min-w-[280px] bg-gray-900 text-white">
                    I'm a{' '}
                    <span className="relative">
                        <span className="text-[#0080ff] text-5xl ml-4">{currentText}</span>
                        <span className="absolute right-[-8px] w-[calc(100%+8px)] h-full border-l-[3px] border-transparent"></span>
                    </span>
                </h3>

                <p className="text-lg font-medium leading-[1.8] max-w-[1000px] mt-4 text-white">
                    A highly organized and self-motivated individual. Looking for an
                    entry-level position in the software development domain where I can
                    utilize my extensive knowledge about the area gained during my MCA
                    program. Passionate about implementing and launching new projects with
                    intuitive problem-solving skills.
                </p>

                <div className="flex items-center gap-1 mt-8">
                    <a
                    href="https://www.linkedin.com/in/shanu-kumar-gupta/"
                    className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 hover: transition-transform"
                    >
                    <i className=""><ImLinkedin/></i>
                    </a>
                    <a
                    href="https://github.com/shanugupta7999"
                    className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 hover: transition-transform"
                    >
                    <i className=""><FaGithub/></i>
                    </a>
                    <a
                    href="https://x.com/ShanuKumarGupta"
                    className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 hover: transition-transform"
                    >
                    <i className=""><FaTwitter/></i>
                    </a>
                    <a
                    href=""
                    className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 hover: transition-transform"
                    >
                    <i className=""><FaMeta/></i>
                    </a>
                    <a
                    href="https://leetcode.com/u/_Shanukumargupta/"
                    className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 hover: transition-transform"
                    >
                    <i className=""><SiLeetcode/></i>
                    </a>
                    <a
                    href="https://www.codechef.com/users/doccoder"
                    className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 hover: transition-transform"
                    >
                    <i className=""><SiCodechef/></i>
                    </a>
                </div>

                <div className="flex items-center gap-4 mt-8">
                    <a
                        href="https://drive.google.com/drive/folders/1oYGFuGtvKYMbmhBfyUrMearTbdWte4zY"
                        className="btn bg-blue-500 text-black px-10 py-1 rounded-full font-semibold shadow-lg hover:text-[#0080ff] hover:bg-black"
                    >
                        Hire Me
                    </a>
                    <Link
                        to="/contact"
                        className="btn bg-black text-[#0080ff] border-2 border-[#0080ff] px-10 py-1 rounded-full font-semibold shadow-lg hover:bg-blue-500 hover:text-black"
                    >
                    Contact Me
                    </Link>

                </div>
            </div>
            <div className="rounded-full relative top-[3rem] shadow-lg border-2 border-black mb-12 ">
                <img
                    src={image1}
                    alt="Shanu"
                    className="rounded-full w-[40vw] hover:text-[#0080ff] hover:scale-[1.1] transition duration-500 "
                />
            </div>
        </section>
    );
};

export default HomePage;
