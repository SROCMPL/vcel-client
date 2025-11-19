"use client";

export default function ContactSection() {
  // Background image path (you provided this file)
 

  return (
    <section
      aria-label="Contact us"
      className="w-full py-20  bg-[linear-gradient(90deg,rgba(255,255,255,0.75),rgba(16,71,135,1))]"
      
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30 items-start">

          {/* Left: Heading + contact details */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 text-center lg:text-left">Let's Build Something Great Together</h2>
            <p className="text-gray-700 mb-8 text-center lg:text-left">Have a groundbreaking idea? We'd love to hear from you.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-600 shadow-lg">
                   <img src="/email.png" alt="email-icon" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Email</div>
                  <div className="text-sm text-gray-500">contact@vcel.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-linear-to-br from-pink-500 to-purple-500 shadow-lg">
                   <img src="/phone.png" alt="phone-icon" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Phone</div>
                  <div className="text-sm text-gray-500">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-linear-to-br from-green-400 to-teal-500 shadow-lg">
                  <img src="/location.png" alt="location-icon" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Office</div>
                  <div className="text-sm text-gray-500">123 Innovation Drive<br/>San Francisco, CA 94105</div>
                </div>
              </div>

              {/* CTA card like in image */}
              <div className="mt-6 bg-white/30 backdrop-blur rounded-xl p-6 shadow-lg max-w-md">
                <h3 className="text-lg font-semibold text-gray-900">Ready to pitch?</h3>
                <p className="text-sm text-gray-700 mt-2">Submit your deck and business plan for review by our investment team.</p>
                <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#104787] text-white text-sm shadow">Submit Pitch Deck</button>
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur rounded-xl shadow-2xl p-6 md:p-10 max-w-xl mx-auto lg:mx-0">
              <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted (dummy)'); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name *</label>
                  <input placeholder="Your name" required className="mt-2 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" placeholder="your@email.com" required className="mt-2 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input placeholder="Your company" className="mt-2 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message *</label>
                  <textarea placeholder="Tell us about your project..." required rows={4} className="mt-2 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300" />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#104787] text-white font-medium shadow hover:opacity-95">
                    Send Message
                     <img src="/submit.png" alt="submit-icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
