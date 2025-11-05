export function Experience() {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Freelance',
      duration: '2024 - Present',
      description: 'worked with development for Lithuanian lawyers website with PHP Symfony and Nuxt.js, also worked with same stack for Swedish website for automobiles car parts, also for router management website.',
    },
    {
      role: 'Ruby on Rails Full-Stack Developer',
      company: 'Kesko Senukai Digital',
      duration: '2021 - 2024',
      description: 'Managed tasks across 6 e-commerce shops in Lithuania, Latvia and Estonia (senukai.lt, ksenukai.lv, krauta.ee, 1a.lt, 1a.lv, 1a.ee) with clear communication and collaboration with project managers. Technologies used: Ruby on Rails, Next.JS, HTML, CSS, JavaScript, Docker, Jira, Agile, MySQL, Git, ArgoCD.',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-100 dark:bg-dark transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up text-black dark:text-white">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-white dark:bg-white/5 animate-slide-up hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">{exp.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-700 dark:text-gray-400 text-sm md:text-right mt-2 md:mt-0">{exp.duration}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}