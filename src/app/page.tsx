import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="inline-block animate-fade-in-up-delayed bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Hi, I&apos;m
              </span>{" "}
              <span className="inline-block animate-fade-in-up-delayed-2 text-blue-600 dark:text-blue-400">
                Aadarsh Kumar Tiwari
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up-delayed-3">
              Software Developer | Problem Solver | Tech Enthusiast
            </p>
            <div className="flex gap-4 justify-center animate-fade-in-up-delayed-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I&apos;m a passionate software developer with expertise in building modern web applications. I love
                creating elegant solutions to complex problems and am constantly learning new technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My journey in software development started [Your Story]. I specialize in [Your Skills] and enjoy working
                on projects that make a difference.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image src="/placeholder-profile.jpg" alt="Profile" fill className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src="/project1.jpg" alt="Project 1" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of the project and its key features.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src="/project2.jpg" alt="Project 2" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of the project and its key features.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image src="/project3.jpg" alt="Project 3" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project Name</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Brief description of the project and its key features.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                    Django
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <Link
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
            Send me an email
          </Link>
        </div>
      </section>
    </main>
  );
}
