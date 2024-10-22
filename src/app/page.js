import { Children } from 'react';
import './globals.css'; // Import the CSS file

export default function Home() {
  return (
    <div>
      {/* Top Section */}
      <section className="hero-section flex flex-col lg:flex-row items-center justify-between">
        <div className="hero-content text-center lg:text-left p-4 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Empowering ICT Education</h1>
          <p className="text-lg lg:text-xl">
            Our platform is dedicated to transforming the way students and educators engage
            with Information and Communication Technology (ICT). From beginner to advanced
            courses, our virtual learning environment is designed to provide an inclusive and
            innovative education experience.
          </p>
        </div>
        <div className="hero-image lg:w-1/2 p-4">
          <img src="../../assets/about1.jpg" className="w-full h-auto" alt="ICT Education" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-12">
        <h2 className="text-3xl text-center font-bold mb-8">About Our Virtual Learning Platform</h2>
        <div className="feature-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card p-6 border rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Unlocking Success</h3>
            <p className="mb-4">
              The benefits of our ICT Learning Support Students and Educators:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Clear step-by-step lessons and practical examples.</li>
              <li>Method-based GIT-UI learning paths to guide students through relevant content.</li>
              <li>Planning strategies with structured approach.</li>
            </ul>
            <button className="explore-btn bg-blue-600 text-white py-2 px-4 rounded">Explore</button>
          </div>

          {/* Card 2 */}
          <div className="card p-6 border rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Elevating ICT Education</h3>
            <p className="mb-4">The benefits of our ICT Virtual Learning Hub:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Up-to-date curriculum with modern topics.</li>
              <li>Real-time hands-on experiences with in-demand skills.</li>
              <li>Expert guidance from industry leaders.</li>
            </ul>
            <button className="explore-btn bg-blue-600 text-white py-2 px-4 rounded">Explore</button>
          </div>

          {/* Card 3 */}
          <div className="card p-6 border rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Our ICT Learning Platform?</h3>
            <p className="mb-4">The benefits include:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Up-to-date content for industry relevance.</li>
              <li>Hands-on labs and real-world projects.</li>
              <li>Expert guidance and personalized mentoring.</li>
            </ul>
            <button className="explore-btn bg-blue-600 text-white py-2 px-4 rounded">Explore</button>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="additional-features py-12 bg-gray-100">
        <div className="additional-feature text-center p-6">
          <h3 className="text-xl font-semibold">Course Management</h3>
          <p>Manage learners through their classes, including materials like lessons and assignments.</p>
        </div>

        <div className="additional-feature text-center p-6">
          <h3 className="text-xl font-semibold">Communication Tools</h3>
          <p>Collaboration features like chat rooms and discussion boards.</p>
        </div>

        <div className="additional-feature text-center p-6">
          <h3 className="text-xl font-semibold">Assessment and Feedback</h3>
          <p>A review feature to give grades on assignments and quizzes based on performance.</p>
        </div>

        <div className="additional-feature text-center p-6">
          <h3 className="text-xl font-semibold">Resource Sharing</h3>
          <p>Users can upload and share class-ready resources like materials and videos.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ICT Learning Platform. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2">Privacy Policy</a>
            <a href="#" className="mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
