'use client'

import Image from 'next/image'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-dark transition-colors">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up text-black dark:text-white">
          Get In Touch
        </h2>

        <p className="text-gray-700 dark:text-gray-400 text-lg mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          I'm always open to new opportunities and interesting projects. Feel free to reach out!
        </p>

        <div className="space-y-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="p-6 rounded-lg bg-white dark:bg-white/5 animate-slide-up hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300">
            <p className="text-gray-700 dark:text-gray-400 mb-2">Email</p>
            <a href="mailto:erlandaslisauskas@gmail.com" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              erlandaslisauskas@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-lg bg-white dark:bg-white/5 animate-slide-up hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300">
            <p className="text-gray-700 dark:text-gray-400 mb-2">Location</p>
            <p className="text-2xl font-bold text-black dark:text-white">Vilnius/Šiauliai, Lithuania</p>
          </div>
        </div>

        <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://github.com/ErlandasL"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gray-300 dark:bg-white/10 hover:bg-blue-500/30 dark:hover:bg-blue-500/20 flex items-center justify-center transition-all duration-200"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/erlandas-lisauskas-896bb91b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gray-300 dark:bg-white/10 hover:bg-blue-500/30 dark:hover:bg-blue-500/20 flex items-center justify-center transition-all duration-200"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
