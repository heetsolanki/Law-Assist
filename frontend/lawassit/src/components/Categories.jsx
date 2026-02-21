import { ShoppingCart, Landmark, Package, ShieldCheck, Building } from "lucide-react";

function Categories() {
  return (
    <section className="section fade-up">
  <div className="container">
    <h2>Consumer Rights Categories</h2>

    <div className="grid-3">

      <div className="card">
        <ShoppingCart size={28} />
        <h3>E-commerce & Online Shopping</h3>
        <p>Disputes with online purchases, refunds, and delivery issues.</p>
      </div>

      <div className="card">
        <Landmark size={28} />
        <h3>Banking & Financial Issues</h3>
        <p>Unfair charges, loan disputes, and financial fraud complaints.</p>
      </div>

      <div className="card">
        <Package size={28} />
        <h3>Product Defects</h3>
        <p>Manufacturing defects and warranty claims.</p>
      </div>

      <div className="card">
        <ShieldCheck size={28} />
        <h3>Insurance Complaints</h3>
        <p>Claim rejections and unfair policy practices.</p>
      </div>

      <div className="card">
        <Building size={28} />
        <h3>Real Estate Issues</h3>
        <p>Property disputes and tenant rights.</p>
      </div>

    </div>
  </div>
</section>
  );
}

export default Categories;