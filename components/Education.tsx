export function Education() {
  const education = [
    {
      degree: 'Vocational Degree',
      school: 'VTMC/AKADEMIJAIT',
      year: '2020 / 2021',
      details: 'I took JAVA courses at VTMC, and due to good entrance test results, I was transferred to Akademija.IT. At Akademija.IT, we were taught at a higher level and a more intense pace. We learned various skills, including: Operating system management (Linux), HTML, CSS, JavaScript, and JAVA, Designing and maintaining databases, technologies such as React and Spring Boot. At the end, we had a group project where we built a full-stack working web application. We used JAVA and JavaScript languages, an H2 database, React and Spring Boot technologies, and the Agile methodology.',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-dark transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up text-black dark:text-white">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gray-100 dark:bg-white/5 animate-slide-up hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">{edu.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.school}</p>
                </div>
                <span className="text-gray-700 dark:text-gray-400 text-sm md:text-right mt-2 md:mt-0">{edu.year}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}