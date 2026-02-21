function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-white font-bold text-xl mb-4">LawAssist</h3>
          <p>Empowering consumers with reliable legal guidance.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Submit Query</li>
            <li>Experts</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>support@lawassist.com</p>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-6">
        © 2026 LawAssist. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;