export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-300 dark:border-white/10 py-8 px-4 bg-gray-100 dark:bg-dark-secondary/30 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-700 dark:text-gray-400">
          © {currentYear} Erlandas Lisauskas. All rights reserved.
        </p>
        <p className="text-gray-600 dark:text-gray-500 text-sm mt-2">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
