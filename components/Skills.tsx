export function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'Next.js', 'Angular', 'VueJS', 'NuxtJS', 'React Native', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
    },
    {
      name: 'Backend',
      skills: ['Ruby on Rails', 'PHP Symfony', 'Java - Spring Boot', 'PostgreSQL', 'MySQL', 'REST APIs', 'SOAP Requests', 'XML', 'JSON'],
    },
    {
      name: 'Tools & Others',
      skills: ['Git', 'Docker', 'CI/CD', 'Vercel', 'Linux', 'Mac', 'Windows'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-dark transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up text-black dark:text-white">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="p-8 rounded-lg bg-gray-100 dark:bg-white/5 animate-slide-up hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${0.1 * (catIndex + 1)}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-200 dark:bg-blue-500/20 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-300 dark:hover:bg-blue-500/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
