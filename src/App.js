import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ResumeWebsite() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md p-4 flex justify-between items-center text-sm">
        <span className="font-bold">GORDEN PEY YI JIA</span>
        <nav className="space-x-4">
          <a
            href="#about"
            className="inline-block hover:text-gray-400 hover:scale-110 transition-transform"
          >
            About
          </a>
          <a
            href="#projects"
            className="inline-block hover:text-gray-400 hover:scale-110 transition-transform"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="inline-block hover:text-gray-400 hover:scale-110 transition-transform"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="inline-block hover:text-gray-400 hover:scale-110 transition-transform"
          >
            Skills
          </a>
          <a
            href="#achievements"
            className="inline-block hover:text-gray-400 hover:scale-110 transition-transform"
          >
            Achievements
          </a>
          <a
            href="#contact"
            className="inline-block hover:text-gray-400 hover:scale-110 transition-transform"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 gap-4 md:gap-8"
        id="home"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg md:mr-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient -z-10"></div>

          {/* This div acts as an inner container for the image, providing the "cut-out" for the border */}
          <div className="absolute inset-[4px] rounded-full overflow-hidden bg-white">
            {/* The inset-[4px] creates the space for the gradient border.
        The bg-white is a placeholder for the area where your image will be.
        It's crucial for visually isolating the image from the gradient. */}
            <img
              src={`${process.env.PUBLIC_URL}/my-photo.jpeg`}
              alt="Gorden's portrait"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-5xl md:text-7xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2"
          >
            Hi, I'm Gorden
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-4 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2"
          >
            Bachelor of Science in Business Analytics
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-32 px-6 md:px-32 bg-zinc-900 text-white"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          {/* Left - Text Content */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient leading-tight mb-8">
              About Me
            </h2>

            <p className="text-3xl md:text-4xl font-semibold text-emerald-300 mb-10 max-w-4xl leading-snug">
              Crafting data-driven stories with a human touch.
            </p>

            <div className="max-w-3xl space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a Year 2 Business Analytics student at the National
                University of Singapore, passionate about transforming raw data
                into meaningful insights.
              </p>
              <p>
                My interests lie in Artificial Intelligence, data storytelling,
                and designing seamless user experiences that bridge the gap
                between technology and people.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/about-photo.jpeg"
              alt="Portrait"
              className="w-64 h-78 object-cover rounded-2xl shadow-2xl border-4 border-emerald-400"
            />
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-32 px-6 md:px-32 bg-black max-w-7xl mx-auto"
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-10 font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project Card - TutorConnect */}
          <motion.div
            className="border border-gray-700 p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 hover:scale-125 transition-transform duration-300 shadow-lg"
            whileHover={{ scale: 1.15 }}
          >
            <span className="text-sm text-blue-400 uppercase tracking-wide mb-2 block">
              Web App
            </span>
            <h3 className="text-2xl font-bold mb-4 text-white">TutorConnect</h3>
            <p className="text-gray-400 mb-6 max-w-prose">
              TutorConnect is a web-based tuition matching platform that
              streamlines the process of connecting students with qualified
              tutors in Singapore. Designed to eliminate the inefficiencies of
              traditional tuition agencies, TutorConnect allows students to post
              detailed tutoring requests while enabling tutors to showcase their
              profiles and apply directly—removing costly middleman fees. The
              platform features real-time messaging, smart filtering, profile
              customization, and a rating system to build trust and
              transparency. With its intuitive interface and secure Firebase
              integration, TutorConnect offers a seamless and affordable
              solution for families seeking quality education support and tutors
              looking to grow their outreach.
            </p>
            {/* Image Gallery */}
            <div className="overflow-x-auto scrollbar-hide">
              <motion.div
                className="flex gap-4 pb-2"
                animate={{ x: ["0%", "-40%"] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {Array.from({ length: 18 }, (_, i) => (
                  <img
                    key={i}
                    src={`/images/tc${i + 1}.png`}
                    alt={`TutorConnect screenshot ${i + 1}`}
                    className="h-40 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Project Card - SilverConnect */}
          <motion.div
            className="border border-gray-700 p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 hover:scale-110 transition-transform duration-300 shadow-lg"
            whileHover={{ scale: 1.15 }}
          >
            <span className="text-sm text-green-400 uppercase tracking-wide mb-2 block">
              Community App
            </span>
            <h3 className="text-2xl font-bold mb-4 text-white">
              SilverConnect
            </h3>
            <p className="text-gray-400 mb-6 max-w-prose">
              SilverConnect is a mobile application designed to combat elderly
              loneliness in Singapore by encouraging meaningful in-person
              interactions through gamification and community care. Built using
              React Native and Firebase, the app enables elderly users to
              connect physically using NFC, earn coins and experience points
              through interactions, and redeem rewards like Health Promotion
              Board eVouchers. SilverConnect features profile customization,
              real-time activity tracking, caregiver request functionality, and
              a badge-based achievement system to motivate engagement. By
              integrating social incentives and practical benefits,
              SilverConnect empowers the elderly to build social connections
              while promoting digital literacy and emotional well-being.
            </p>
            {/* Image Gallery */}
            <div className="overflow-x-auto scrollbar-hide">
              <motion.div
                className="flex gap-4 pb-2"
                animate={{ x: ["0%", "-40%"] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {Array.from({ length: 22 }, (_, i) => (
                  <img
                    key={i}
                    src={`/images/sc${i + 1}.png`}
                    alt={`SilverConnect screenshot ${i + 1}`}
                    className="h-40 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-32 px-6 md:px-32 bg-zinc-900 text-white"
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6 font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2">
          Experience
        </h2>
        {/* PSA */}
        <div className="border border-gray-700 p-6 rounded-2xl hover:bg-zinc-800 hover:scale-110 transition-transform shadow-lg">
          <div className="flex items-center gap-6">
            {/* Image on the left */}
            <img
              src="/psa logo.png"
              alt="PSA Logo"
              className="w-32 h-32 md:w-32 md:h-32 object-contain rounded-xl p-2"
            />

            {/* Text on the right */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">
                PSA International
              </h3>
              <p className="text-lg text-teal-300 mb-1">
                AI & Data Analytics Intern
              </p>
              <p className="text-sm text-gray-500">May 2025 – August 2025</p>
            </div>
          </div>
        </div>

        {/* NUS IS2238 */}
        <div className="border border-gray-700 p-6 rounded-2xl hover:bg-zinc-800 hover:scale-110 transition-transform shadow-lg mt-5">
          <div className="flex items-center gap-6">
            {/* Image on the left */}
            <img
              src="/nus.png"
              alt="NUS Logo"
              className="w-32 h-32 md:w-32 md:h-32 object-contain rounded-xl p-2"
            />

            {/* Text on the right */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">
                National University of Singapore
              </h3>
              <p className="text-lg text-teal-300 mb-1">
                Teaching Assistant - IS2238: Economics of IT and AI
              </p>
              <p className="text-sm text-gray-500">January 2025 – May 2025</p>
            </div>
          </div>
        </div>

        {/* NUS IS1128 */}
        <div className="border border-gray-700 p-6 rounded-2xl hover:bg-zinc-800 hover:scale-110 transition-transform shadow-lg mt-5">
          <div className="flex items-center gap-6">
            {/* Image on the left */}
            <img
              src="/nus.png"
              alt="NUS Logo"
              className="w-32 h-32 md:w-32 md:h-32 object-contain rounded-xl p-2"
            />

            {/* Text on the right */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">
                National University of Singapore
              </h3>
              <p className="text-lg text-teal-300 mb-1">
                Teaching Assistant - IS1128: IT, Management and Organisation
              </p>
              <p className="text-sm text-gray-500">August 2024 – May 2025</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-32 px-6 md:px-32 bg-black text-white"
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-12 font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items text-5xl">
          {/* Devicon icons */}
          <i
            className="devicon-python-plain text-blue-400 hover:scale-110 transition-transform"
            title="Python"
          ></i>
          <i
            className="devicon-java-plain text-red-400 hover:scale-110 transition-transform"
            title="Java"
          ></i>
          <i
            className="devicon-html5-plain text-orange-500 hover:scale-110 transition-transform"
            title="HTML"
          ></i>
          <i
            className="devicon-javascript-plain text-yellow-400 hover:scale-110 transition-transform"
            title="JavaScript"
          ></i>
          <i
            className="devicon-react-original text-cyan-400 hover:scale-110 transition-transform"
            title="React"
          ></i>
          <i
            className="devicon-mysql-plain text-sky-500 hover:scale-110 transition-transform"
            title="MySQL"
          ></i>
          <i
            className="devicon-vuejs-plain text-green-400 hover:scale-110 transition-transform"
            title="VueJS"
          ></i>
          <i
            className="devicon-github-original text-white hover:scale-110 transition-transform"
            title="GitHub"
          ></i>
          <i
            className="devicon-css3-plain text-blue-300 hover:scale-110 transition-transform"
            title="CSS"
          ></i>
          <i
            className="devicon-nodejs-plain text-green-600 hover:scale-110 transition-transform"
            title="Node.js"
          ></i>

          {/* Image-based icons */}
          <img
            src="/tableau.png"
            alt="Tableau"
            title="Tableau"
            className="h-12 w-12 object-contain hover:scale-110 transition-transform"
          />
          <img
            src="/rstudio.png"
            alt="RStudio"
            title="RStudio"
            className="h-12 w-12 object-contain hover:scale-110 transition-transform"
          />
          <img
            src="/firebase.png"
            alt="Firebase"
            title="Firebase"
            className="h-12 w-12 object-contain hover:scale-110 transition-transform"
          />
        </div>
      </motion.section>

      <motion.section
        className="py-32 px-6 md:px-32 bg-zinc-900 text-white"
        id="achievements"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6 font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2">
          Achievements
        </h2>
        {/* PSA */}
        <div className="border border-gray-700 p-6 rounded-2xl hover:bg-zinc-800 hover:scale-110 transition-transform shadow-lg">
          <div className="flex items-center gap-6">
            {/* Image on the left */}
            <img
              src="/sgis.png"
              alt="SgIS Logo"
              className="w-32 h-32 md:w-32 md:h-32 object-contain rounded-xl p-2"
            />

            {/* Text on the right */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">
                Singapore-Industry Scholarship (SgIS)
              </h3>
              <p className="text-lg text-teal-300 mb-1">PSA International</p>
              <p className="text-sm text-gray-500">Full-Term Scholar</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-32 px-6 md:px-32 bg-black text-white"
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6 font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2">
          Get in Touch
        </h2>
        <p className="text-lg mb-4 text-gray-400">
          I’m open to internships, collaborations, and interesting ideas.
        </p>
        {/* Phone number and WhatsApp icon */}
        <div className="flex items-center gap-3 mb-4">
          <p className="text-lg text-gray-400">+65 9146 6875</p>
          <a
            href="https://wa.me/6591466875"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp-icon.png"
              alt="Chat on WhatsApp"
              className="w-6 h-6 hover:opacity-80 hover:scale-110 transition-opacity"
            />
          </a>
          <a
            href="https://t.me/peewhyjay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/tele-icon.png"
              alt="Chat on Telegram"
              className="w-7 h-7 hover:opacity-80 hover:scale-110 transition-opacity"
            />
          </a>
        </div>

        <a
          href="mailto:gordenpey@gmail.com"
          className="text-blue-400 text-xl underline hover:text-blue-600"
        >
          gordenpey@gmail.com
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm bg-black">
        © {new Date().getFullYear()} Gorden. All rights reserved.
      </footer>
    </div>
  );
}
