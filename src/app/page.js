import { Children } from 'react';
import './globals.css'; // Import the CSS file


export default function Home() {
  return (
    <div>
      {/* Top Section */}
      <section className="hero-section">
    
        <div className="hero-content">
          <h1>Empowering ICT Education</h1>
          <p>
            Our platform is dedicated to transforming the way students and
            educators engage with Information and Communication Technology
            (ICT). From beginner to advanced courses, our virtual learning
            environment is designed to provide an inclusive and innovative
            education experience.
          </p>
        </div>
        <div className="hero-image">
          <img src="../../assets/about1.jpg"  />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>About Our Virtual Learning Platform</h2>
        <div className="feature-cards">
          {/* Card 1 */}
          <div className="card">
            <h3>Unlocking Success</h3>
            <p>
              The benefits of our ICT Learning Support Students and Educators:
            </p>
            <ul>
              <li>Clear step-by-step lessons and practical examples.</li>
              <li>
                Method-based GIT-UI learning paths to guide students through
                relevant content.
              </li>
              <li>Planning strategies with structured approach.</li>
            </ul>
            <button className="explore-btn">Explore</button>
          </div>

          {/* Card 2 */}
          <div className="card">
            <h3>Elevating ICT Education</h3>
            <p>The benefits of our ICT Virtual Learning Hub:</p>
            <ul>
              <li>Up-to-date curriculum with modern topics.</li>
              <li>Real-time hands-on experiences with in-demand skills.</li>
              <li>Expert guidance from industry leaders.</li>
            </ul>
            <button className="explore-btn">Explore</button>
          </div>

          {/* Card 3 */}
          <div className="card">
            <h3>Why Choose Our ICT Learning Platform?</h3>
            <p>The benefits include:</p>
            <ul>
              <li>Up-to-date content for industry relevance.</li>
              <li>Hands-on labs and real-world projects.</li>
              <li>Expert guidance and personalized mentoring.</li>
            </ul>
            <button className="explore-btn">Explore</button>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="additional-features">
        <div className="additional-feature">
          <h3>Course Management</h3>
          <p>
            Manage learners through their classes, including materials like
            lessons and assignments.
          </p>
        </div>

        <div className="additional-feature">
          <h3>Communication Tools</h3>
          <p>
            Collaboration features like chat rooms and discussion boards.
          </p>
        </div>

        <div className="additional-feature">
          <h3>Assessment and Feedback</h3>
          <p>
            A review feature to give grades on assignments and quizzes based on
            performance.
          </p>
        </div>

        <div className="additional-feature">
          <h3>Resource Sharing</h3>
          <p>
            Users can upload and share class-ready resources like materials and
            videos.
          </p>
        </div>
              <div className="footer">
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
      </section>
    </div>
  );
}
