import React from 'react';
import Navigation from './components/Navigation';
import FaceScan from './components/FaceScan';
import VideoSection from './components/VideoSection';
import CarSection from './components/CarSection';
import EntertainmentSection from './components/EntertainmentSection';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Hi, I'm Samay</h1>
          <p className="text-xl">B.Tech Student & Content Creator</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="text-white space-y-4">
              <p className="text-lg">
                I am a B.Tech student in Computer Science and Engineering at Newton School of Technology, passionate about merging art and technology to create innovative solutions.
              </p>
              <p className="text-lg">
                As a content creator with over 700K subscribers across two YouTube channels, I've developed strong skills in digital engagement and creative expression.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">YouTube Channels:</h3>
                <ul className="list-disc list-inside">
                  <li>Primary Channel (230K+ subscribers) - Art sketches and creative content</li>
                  <li>Secondary Channel (500K+ subscribers) - Football edit videos</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Brand Collaborations:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Arteza · Freelance</h4>
                    <p className="text-gray-300">Aug 2024 - Sep 2024 · 2 mos</p>
                    <ul className="list-disc list-inside text-gray-300">
                      <li>Executed successful sponsorship campaigns</li>
                      <li>Provided design recommendations for brand enhancement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Copic · Freelance</h4>
                    <p className="text-gray-300">Nov 2024 - Dec 2024 · 2 mos</p>
                    <ul className="list-disc list-inside text-gray-300">
                      <li>Aligned Pensil brand with target audience</li>
                      <li>Conducted CTA analysis for optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <section id="education" className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Computer Science and Engineering</h3>
            <p className="text-xl text-gray-300">Newton School of Technology</p>
            <p className="text-gray-400 mt-4">
              Currently pursuing my bachelor's degree with a focus on merging technology with innovative solutions.
              My vision is to establish a company that seamlessly integrates the chemical field with advanced technology,
              driving forward groundbreaking innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Face Scan Section */}
      <FaceScan />

      {/* Video Section */}
      <VideoSection />

      {/* Car Section */}
      <CarSection />

      {/* Entertainment Section */}
      <EntertainmentSection />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;