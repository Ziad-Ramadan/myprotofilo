import React from 'react';

export default function SkillsSection() {
  return (
    <section className="py-16 bg-slate-200 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="mt-2">Proficient in building responsive and dynamic web applications using React, Next.js, and Tailwind CSS.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Enviroment and vision control</h3>
            <p className="mt-2">Skilled in vision control and work and collabrate with team members</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Firebase & Databases</h3>
            <p className="mt-2">Experienced in integrating Firebase for real-time applications and working with databases like MongoDB.</p>
          </div>
        </div>

        <h2 className="text-3xl text-black font-bold text-center mt-12 mb-8">Why Hire Me</h2>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>💡 **Problem Solver:** I thrive on finding efficient solutions to complex problems.</li>
          <li>🎯 **Detail-Oriented:** I pay close attention to details, ensuring high-quality code and design.</li>
          <li>🚀 **Adaptable:** I quickly learn new technologies and adapt to changing project requirements.</li>
          <li>🤝 **Team Player:** I communicate effectively and work well within teams to achieve project goals.</li>
          <li>📈 **Passionate Learner:** I am committed to continuous learning and staying updated with industry trends.</li>
        </ul>
      </div>
    </section>
  );
}
