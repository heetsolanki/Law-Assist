import {
  MessageSquare,
  UploadCloud,
  Users,
  Search,
  LayoutDashboard,
  ClipboardList
} from "lucide-react";

function Features() {
  return (
    <section className="section section-alt fade-up">
      <div className="container">
        <h2>Our Key Features</h2>

        <div className="grid-3">

          <div className="card">
            <MessageSquare size={30} />
            <h3>Submit Legal Query</h3>
            <p>Easily submit consumer complaints.</p>
          </div>

          <div className="card">
            <UploadCloud size={30} />
            <h3>Upload Supporting Documents</h3>
            <p>Attach contracts and receipts securely.</p>
          </div>

          <div className="card">
            <Users size={30} />
            <h3>Expert Consultation</h3>
            <p>Connect with verified professionals.</p>
          </div>

          <div className="card">
            <Search size={30} />
            <h3>Smart Legal Search</h3>
            <p>Search consumer laws instantly.</p>
          </div>

          <div className="card">
            <LayoutDashboard size={30} />
            <h3>Secure Dashboard</h3>
            <p>Manage all your cases securely.</p>
          </div>

          <div className="card">
            <ClipboardList size={30} />
            <h3>Track Complaint Status</h3>
            <p>Stay updated in real-time.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;