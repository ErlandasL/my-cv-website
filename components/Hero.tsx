'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-white dark:bg-dark transition-colors">
      <div className="text-center animate-fade-in">
        <div className="mb-12 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-full bg-white dark:bg-dark overflow-hidden flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Erlandas Lisauskas"
                width={260}
                height={260}
                className="w-full h-full object-cover object-top rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black dark:text-white">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Erlandas Lisauskas</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Web Developer with over 4 years of professional experience,
          specializing in Ruby on Rails, PHP Symfony, Java, React and Next.js. I developed and
          managed robust web applications, ensuring smooth operations and
          effective collaboration with project managers.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get in Touch
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-400 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 dark:hover:bg-blue-500/20 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}