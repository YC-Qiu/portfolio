// src/pages/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Education() {
    const educationData = [
        {
            school: 'High School Affiliated to Shanghai Jiao Tong University',
            location: 'Shanghai, China',
            time: '2016.09 – 2019.05',
            degree: 'International Baccalaureate',
            honors: [],
            gpa: null,
            courses: ['Further Math', 'Physics'],
        },
        {
            school: 'University of Wisconsin, Madison',
            location: 'Madison, WI',
            time: '2019.09 – 2020.08',
            degree: 'B.S of Computer Science',
            gpa: '3.9 / 4',
            honors: ["Dean's List"],
            courses: ['Programming', 'Discrete Math'],
        },
        {
            school: 'University of Michigan, Ann Arbor',
            location: 'Ann Arbor, MI',
            time: '2020.09 – 2023.05',
            degree: 'B.S of Computer Science and Engineering',
            gpa: '3.5 / 4',
            honors: ['University Honors Designation'],
            courses: ['Database', 'Software Development', 'Game Design', 'Extended Reality Game Design'],
        },
    ];

    return (
        <motion.div
            className="min-h-screen bg-black text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
        <div
            className="min-h-screen w-screen text-white bg-cover bg-center bg-no-repeat bg-fixed px-4"
            style={{
                backgroundImage: "url('./src/assets/images/empty_bg.png')",
                backgroundColor: '#000',
            }}
        >
            <div className="max-w-5xl mx-auto space-y-12">
                <Link
                    to="/"
                    className="text-white text-xl px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm w-fit inline-block shadow-md transition"
                    title="Back to Home"
                >
                    <i className="fas fa-arrow-left"></i>
                </Link>


                <h1 className="chewy text-5xl font-bold text-center text-white">Education 👨‍💼</h1>

                {educationData.map((edu, idx) => (
                    <div
                        key={idx}
                        className="bg-white/10 text-white px-[40px] py-[8px] rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 hover:ring-4 hover:ring-yellow-300/60 transition-all"
                    >
                        <h2 className="text-2xl font-bold">{edu.school}</h2>
                        <div className="text-sm italic text-gray-300 flex justify-between mt-1">
                            <span>{edu.location}</span>
                            <span>{edu.time}</span>
                        </div>
                        <p className="mt-2">{edu.degree}</p>
                        {edu.gpa && <p><strong>GPA:</strong> {edu.gpa}</p>}

                        {edu.honors.length > 0 && (
                            <>
                                <h3 className="mt-2 font-semibold">Honors:</h3>
                                <ul className="list-disc list-inside ml-4">
                                    {edu.honors.map((h, i) => <li key={i}>{h}</li>)}
                                </ul>
                            </>
                        )}

                        {edu.courses.length > 0 && (
                            <details className="mt-2">
                                <summary className="cursor-pointer font-semibold">Course List</summary>
                                <ul className="list-disc list-inside ml-4 mt-1">
                                    {edu.courses.map((c, i) => <li key={i}>{c}</li>)}
                                </ul>
                            </details>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </motion.div>
    );
}
