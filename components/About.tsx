export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-dark transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up text-black dark:text-white">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I enjoy turning ideas into reality through code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm always eager to take on new challenges and collaborate with talented individuals to build 
              products that make a difference.
            </p>
          </div>

          <div className="p-8 rounded-lg animate-slide-up bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Quick Facts</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3">▸</span>
                <span><strong>Experience:</strong> 4+ years in web development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3">▸</span>
                <span><strong>Location:</strong> Vilnius/Šiauliai, Lithuania</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3">▸</span>
                <span><strong>Specialization:</strong> Full-stack Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3">▸</span>
                <span><strong>Available:</strong> For freelance & full-time roles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}