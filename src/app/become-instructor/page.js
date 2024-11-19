import "./becomeInstructor.css";

export default function BecomeInstructor() {
  return (
    <div className="become-instructor">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="text-content">
            <h1>Become an Instructor</h1>
            <p>
              Become an instructor & start teaching with 26k certified
              instructors. Create a success story with 671k Students — Grow
              yourself with 71 countries.
            </p>
            <button className="cta-btn">Get Started</button>
          </div>
          <img src="/assets/instructor-hero.png" alt="Instructor" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stat">
            <h3>67.1k</h3>
            <p>Students</p>
          </div>
          <div className="stat">
            <h3>26k</h3>
            <p>Certified Instructors</p>
          </div>
          <div className="stat">
            <h3>72</h3>
            <p>Languages</p>
          </div>
          <div className="stat">
            <h3>99.9%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {/* How to Section */}
      <section className="how-to">
        <div className="container">
          <h2>How you'll become successful instructor</h2>
          <div className="steps">
            <div className="step">
              <h4>1. Apply to become instructor</h4>
              <p>Submit your information and wait for approval.</p>
            </div>
            <div className="step">
              <h4>2. Setup & edit your profile</h4>
              <p>Create an engaging instructor profile.</p>
            </div>
            <div className="step">
              <h4>3. Create your new course</h4>
              <p>Develop and upload courses easily.</p>
            </div>
            <div className="step">
              <h4>4. Start teaching & earning</h4>
              <p>Begin teaching and see the rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 E-tutor. Designed by Templatecookie.</p>
      </footer>
    </div>
  );
}