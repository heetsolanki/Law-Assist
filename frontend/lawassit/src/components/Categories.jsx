import {
  ShoppingCart,
  Landmark,
  Package,
  ShieldCheck,
  Building,
} from "lucide-react";

function Categories() {
  return (
    <section className="section-padding bg-[#f6f8fb] fade-up">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A1F44]">
            Consumer Rights Categories
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Select a category to learn about your rights and find relevant legal guidance.
          </p>
        </div>

        {/* Grid */}
        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">
              <ShoppingCart size={22} />
            </div>
            <h3 className="feature-title">
              E-commerce & Online Shopping
            </h3>
            <p className="feature-text">
              Disputes with online purchases, refunds, and delivery issues.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Landmark size={22} />
            </div>
            <h3 className="feature-title">
              Banking & Financial Issues
            </h3>
            <p className="feature-text">
              Unfair charges, loan disputes, and financial fraud complaints.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Package size={22} />
            </div>
            <h3 className="feature-title">
              Product Defects
            </h3>
            <p className="feature-text">
              Manufacturing defects and warranty claims.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ShieldCheck size={22} />
            </div>
            <h3 className="feature-title">
              Insurance Complaints
            </h3>
            <p className="feature-text">
              Claim rejections and unfair policy practices.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Building size={22} />
            </div>
            <h3 className="feature-title">
              Real Estate Issues
            </h3>
            <p className="feature-text">
              Property disputes and tenant rights.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Categories;