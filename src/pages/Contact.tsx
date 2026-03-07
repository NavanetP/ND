
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Clock,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    'project-type': '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/navanet88@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New inquiry from Nitham Designs website',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      if (data.success === 'true') {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          'project-type': '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section - Fixed gradient syntax */}
      <section className="py-10 px-6 bg-gradient-to-br from-cyan-50 to-cyan-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 reveal">
            Let's Build Your <span className="text-cyan-500">Dream Space</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto reveal">
            We'd love to hear from you! Let's build your dream space together.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="reveal">
              <h2 className="text-3xl font-bold text-black mb-8">
                Send us a Message
              </h2>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  There was an error submitting your form. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-black mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-sm font-bold text-black mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    required
                    value={formData['project-type']}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="">Select a project type</option>
                    <option value="Residential Interior">Residential Interior</option>
                    <option value="Commercial Interior">Commercial Interior</option>
                    <option value="Architectural Planning">Architectural Planning</option>
                    <option value="Elevation Design">Elevation Design</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Landscape Design">Landscape Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, ideas, or questions..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-cyan-500 hover:to-cyan-700 hover:scale-[1.02]'
                      } shadow-lg hover:shadow-xl`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="reveal">
              <h2 className="text-3xl font-bold text-black mb-8">
                Get in Touch
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Location</h3>
                      <p className="text-gray-600">Chennai, Tamil Nadu</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Email</h3>
                      <a
                        href="mailto:nithamdesigns@gmail.com"
                        className="text-cyan-500 hover:text-cyan-600 transition-colors"
                      >

                        nithamdesigns@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">Phone</h3>
                      <p className="text-gray-600">+91-XXXXXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">
                        Social Media
                      </h3>
                      <a
                        href="https://instagram.com/nithamdesigns"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-600 transition-colors"
                      >
                        @nithamdesigns
                      </a>
                    </div>
                  </div>
                </div>

                {/* Full width bottom item */}
                <div className="md:col-span-2">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-black mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Response within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Free initial consultation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Detailed project discussion</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Transparent pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
