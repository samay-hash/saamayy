import React from 'react';
import { Code, Palette, Youtube, FolderRoot as Football, Trophy, Briefcase } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: number;
}

const skills: Skill[] = [
  {
    name: 'Web Development',
    icon: <Code className="w-8 h-8 text-white" />,
    description: 'HTML, CSS, JavaScript, Responsive Design',
    level: 90
  },
  {
    name: 'Art & Design',
    icon: <Palette className="w-8 h-8 text-white" />,
    description: 'Digital Art, Sketching, Creative Design',
    level: 95
  },
  {
    name: 'Content Creation',
    icon: <Youtube className="w-8 h-8 text-white" />,
    description: 'Video Editing, Social Media Management',
    level: 95
  },
  {
    name: 'Sports',
    icon: <Football className="w-8 h-8 text-white" />,
    description: 'Football, Basketball, Table Tennis',
    level: 85
  },
  {
    name: 'Brand Management',
    icon: <Briefcase className="w-8 h-8 text-white" />,
    description: 'Sponsorships, Analytics, Campaign Management',
    level: 88
  },
  {
    name: 'Leadership',
    icon: <Trophy className="w-8 h-8 text-white" />,
    description: 'Team Management, Project Coordination',
    level: 85
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
              
              <p className="text-gray-400 mb-4">{skill.description}</p>
              
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Proficiency
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}