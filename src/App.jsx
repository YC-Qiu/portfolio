// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const sections = [
  { title: 'Education', image: 'src/assets/images/education.png', path: '/education' },
  { title: 'Projects', image: 'src/assets/images/projects.png', path: '/projects' },
  { title: 'Work', image: 'src/assets/images/work.png', path: '/work' },
  { title: 'Hobbies', image: 'src/assets/images/hobby.png', path: '/hobbies' },
];

const socialLinks = [
  { title: 'GitHub', iconClass: 'fab fa-github', url: 'https://github.com/YC-Qiu' },
  { title: 'LinkedIn', iconClass: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ycqiu/' },
  { title: 'Email', iconClass: 'fas fa-envelope', url: 'mailto:yc_qiu@hotmail.com' },
];

function Home() {
  return (
    <div
      className="h-screen w-screen text-white px-10 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('./src/assets/images/index_bg.png')",
        backgroundColor: '#000',
      }}
    >
      <h1 className="fredoka text-[88px] name-title font-bold text-center pt-[40px] pb-[10px] text-black rounded-xl shadow-lg w-fit mx-auto">
        YC (Yucheng) Qiu
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-[20px]">
        {sections.map(({ title, image, path }, i) => (
          <Link key={i} to={path}
          className="
              w-[230px] h-[330px] rounded-2xl shadow-xl 
              hover:scale-105 hover:shadow-2xl 
              hover:ring-4 hover:ring-[#FFD700] 
              transition duration-300 cursor-pointer 
              backdrop-blur-lg bg-white/80
              overflow-hidden flex flex-col p-4 
              text-[#3e2f1c] hover:text-[#b35700] no-underline">
              {image && (
                <div className="w-full h-[140px] flex justify-center items-center overflow-hidden mb-2">
                  <img
                    src={image}
                    alt={title}
                    className="h-full object-contain rounded-md"
                  />
                </div>
              )}
              <div className="flex-1 flex items-center justify-center">
                <h2 className="chewy text-[40px] font-bold text-center w-full">{title}</h2>
              </div>
          </Link>
        ))}
      </div>

      {/* Social Section */}
      <div className="text-center mt-16 mb-4">
        <p className="chewy text-[35px] font-semibold">Connect with me</p>
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center gap-x-10 pt-6 pb-10">
        {socialLinks.map(({ title, iconClass, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black w-[90px] h-[90px] rounded-2xl icon-link flex items-center justify-center shadow-xl hover:rotate-12 hover:scale-110 transition"
            title={title}
          >
            <i className={`${iconClass} text-[70px]`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
      <Route path="/hobbies" element={<Hobbies />} />
    </Routes>
  );
}
