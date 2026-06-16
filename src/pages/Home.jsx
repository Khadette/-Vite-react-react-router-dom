import { Link } from 'react-router-dom';
 
// Import images from src/assets/images/
// Replace these with your actual image files
 
// Skills / features data — stored as an array so we can .map() over them
const skills = [
  {
    icon: '⚛️',
    title: 'React Development',
    description: 'Building fast, interactive UIs with React hooks, components, and modern patterns.',
  },
  {
    icon: '🎨',
    title: 'Tailwind CSS',
    description: 'Crafting beautiful, responsive designs with utility-first CSS — no custom CSS needed.',
  },
  {
    icon: '⚡',
    title: 'Vite & Performance',
    description: 'Lightning-fast development with Vite and optimized production builds.',
  },
  {
    icon: '🗄️',
    title: 'REST APIs',
    description: 'Connecting React frontends to backends with fetch, axios, and async/await.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Every layout works beautifully on mobile, tablet, and desktop.',
  },
  {
    icon: '🔗',
    title: 'React Router',
    description: 'Multi-page SPAs with clean URLs, nested routes, and dynamic params.',
  },
];
 
function Home() {
  return (
    <div>
 
      {/* ═══ HERO SECTION ══════════════════════════════════════════ */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
 
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="src/assets/images/image2.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
 
        {/* Hero Content — on top of image */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-2 tracking-widest uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Hi, I'm a <br />
            <span className="text-blue-400">React Developer</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
            I build modern web applications with React, Tailwind CSS, and a passion
            for clean, maintainable code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg
                          font-semibold transition-colors duration-200 text-center"
            >
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="border border-white text-white hover:bg-white hover:text-gray-900
                          px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
 
      {/* ═══ SKILLS GRID ════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Focused on building fast, accessible, and beautiful web experiences.
            </p>
          </div>
 
          {/* .map() renders one <SkillCard> for each item in the skills array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(skill => (
              <div
                key={skill.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md
                            transition-shadow duration-200 border border-gray-100"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ═══ CTA BANNER ═════════════════════════════════════════════ */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
            I am available for freelance projects and full-time opportunities.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg
                        font-semibold transition-colors duration-200 inline-block"
          >
            Send a Message
          </Link>
        </div>
      </section>
 
    </div>
  );
}
 
export default Home;