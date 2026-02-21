import { UserPlus, FileText, Upload, Gavel } from "lucide-react";

function HowItWorks() {
  return (
    <section className="section section-light fade-up">
      <div className="container">
        <h2>How It Works</h2>

        <div className="timeline">
          <div className="timeline-line"></div>

          <div className="grid-4">

            <div>
              <div className="step-circle">1</div>
              <UserPlus size={28} style={{ marginTop: "15px" }} />
              <h3>Register / Login</h3>
              <p>Create your secure account.</p>
            </div>

            <div>
              <div className="step-circle">2</div>
              <FileText size={28} style={{ marginTop: "15px" }} />
              <h3>Submit Complaint</h3>
              <p>Describe your issue clearly.</p>
            </div>

            <div>
              <div className="step-circle">3</div>
              <Upload size={28} style={{ marginTop: "15px" }} />
              <h3>Upload Documents</h3>
              <p>Attach supporting evidence.</p>
            </div>

            <div>
              <div className="step-circle">4</div>
              <Gavel size={28} style={{ marginTop: "15px" }} />
              <h3>Get Expert Guidance</h3>
              <p>Receive personalized advice.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;