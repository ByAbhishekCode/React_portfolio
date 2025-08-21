import SocialIcons from "../common/SocialIcons";

const ContactMe = () => {
  return (
    <div
      id="contact_me"
      className="max-w-7xl mx-auto p-8 text-white space-y-10"
    >
      {/* Section Heading */}
      <div className="flex items-center justify-center mb-10">
        <div className="flex-grow border-t border-gray-600"></div>
        <h2 className="mx-4 text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
          CONTACT ME
        </h2>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row bg-[#212121] rounded-xl shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 p-8 space-y-8 bg-[#1a1a1a] text-center">
          {/* Address with Map */}
          <div className="space-y-4">
            {/* Google Map Iframe */}
            <div className="rounded-lg overflow-hidden border-2 border-[#b74b4b] max-w-md mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.1115036657465!2d80.22626227500898!3d26.48626147689492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38685093edcb%3A0xb2bd2014e9e0148f!2sKalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1692435682555!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/place/Kalyanpur,+Kanpur,+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center  text-gray-300 hover:text-[#b74b4b] text-lg font-semibold"
            >
            </a>
          </div>
          Contact With Us
          <div className="flex justify-center">
            <SocialIcons />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 bg-[#1a1a1a] space-y-6">
          <h3 className="text-2xl font-bold text-[#b74b4b]">
            Send me a message
          </h3>
          <p className="text-gray-400">
            I’m open to full-time roles, internships, and freelance projects.
            Drop your message below.
          </p>

          <form id="contact-form" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-lg bg-[#2d2d2d] text-white outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-lg bg-[#2d2d2d] text-white outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows="4"
              className="w-full p-3 rounded-lg bg-[#2d2d2d] text-white outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="send-btn w-full bg-[#b74b4b] hover:bg-[#e44d26] text-white font-bold py-3 rounded-lg transition-all"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
