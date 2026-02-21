import { Scale, Shield, FileText, Users } from "lucide-react";

function Hero() {
  return (
    <section className="section section-soft hero fade-up">
      <div className="container hero-content">

        {/* LEFT CONTENT */}
        <div>
          <h1>
            Know Your Consumer Rights. Get Legal Help Instantly.
          </h1>

          <p>
            Submit complaints, connect with legal experts,
            and navigate your rights with confidence.
          </p>

          <div style={{ marginTop: "30px" }}>
            <button className="btn-primary">Submit a Query</button>
            <button className="btn-outline" style={{ marginLeft: "15px" }}>
              Explore Your Rights
            </button>
          </div>
        </div>

        {/* RIGHT SQUARE CARDS */}
        <div className="hero-grid">

          <div className="card hero-card">
            <Scale size={30} />
            <h3>Justice</h3>
            <p>Fair resolution for consumer disputes.</p>
          </div>

          <div className="card hero-card">
            <Shield size={30} />
            <h3>Protection</h3>
            <p>Safeguarding your consumer rights.</p>
          </div>

          <div className="card hero-card">
            <FileText size={30} />
            <h3>Documents</h3>
            <p>Secure document submission.</p>
          </div>

          <div className="card hero-card">
            <Users size={30} />
            <h3>Experts</h3>
            <p>Verified legal professionals.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;