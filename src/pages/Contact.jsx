import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-600">We’d love to hear from you!</p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Contact Details</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 text-white p-2 rounded-full">📧</div>
              <span className="text-gray-700">contact@example.com</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-500 text-white p-2 rounded-full">📞</div>
              <span className="text-gray-700">+1 234 567 8901</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-red-500 text-white p-2 rounded-full">📍</div>
              <span className="text-gray-700">123 Main Street, City, Country</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a className="btn btn-circle bg-blue-600 text-white">f</a>
            <a className="btn btn-circle bg-sky-500 text-white">t</a>
            <a className="btn btn-circle bg-pink-500 text-white">in</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-base-200 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold">Send Us a Message</h2>
          <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full"></textarea>
          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </form>
      </div>

      {/* Map */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.178051338553!2d-122.41990668467761!3d37.77492977975869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809caae3b877%3A0xe4c474c7ef3b69f7!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617183654117!5m2!1sen!2sus"
          className="w-full h-80 rounded-lg border"
          loading="lazy"
        ></iframe>
      </div>

      {/* About */}
      <div className="bg-base-200 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p>
          We are a leading digital platform committed to delivering real-time news and updates. Whether you’re interested in technology, politics, or entertainment, we’ve got you covered.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-base-100 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold mb-2">FAQs</h2>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            How can I submit a story?
          </div>
          <div className="collapse-content">
            <p>Use our contact form or email us directly at submit@example.com.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            Can I advertise on your site?
          </div>
          <div className="collapse-content">
            <p>Yes! Contact us at ads@example.com for packages and pricing.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            Do you have a mobile app?
          </div>
          <div className="collapse-content">
            <p>Yes, our app is available on both iOS and Android platforms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
