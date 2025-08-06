import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus({ message: '', type: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ message: error.message, type: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-poppins">
          Get In <span className="text-teal">Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal bg-white dark:bg-gray-800" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal bg-white dark:bg-gray-800" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal bg-white dark:bg-gray-800" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal bg-white dark:bg-gray-800"></textarea>
              </div>

              <button type="submit" disabled={isSending}
                className="w-full md:w-auto px-8 py-3 bg-teal text-white rounded-lg font-medium hover:bg-teal-600 transition">
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {formStatus.message && (
              <div className={`mt-6 p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                {formStatus.message}
              </div>
            )}
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 font-poppins">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal/10 p-3 rounded-lg mr-4"><i className="fas fa-map-marker-alt text-teal"></i></div>
                  <div><h4 className="font-bold mb-1">Location</h4><p className="text-gray-600 dark:text-gray-300">Kathua, J&K</p></div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal/10 p-3 rounded-lg mr-4"><i className="fas fa-envelope text-teal"></i></div>
                  <div><h4 className="font-bold mb-1">Email</h4><p className="text-gray-600 dark:text-gray-300">nitishchoudharyc2@gmail.com</p></div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal/10 p-3 rounded-lg mr-4"><i className="fas fa-phone-alt text-teal"></i></div>
                  <div><h4 className="font-bold mb-1">Phone</h4><p className="text-gray-600 dark:text-gray-300">+91 (600) 655-6223</p></div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal/10 p-3 rounded-lg mr-4"><i className="fas fa-clock text-teal"></i></div>
                  <div><h4 className="font-bold mb-1">Working Hours</h4><p className="text-gray-600 dark:text-gray-300">Mon-Fri: 9AM - 5PM</p></div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://x.com/NitishChahal_" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.linkedin.com/in/nitish-choudhary-mr-13-jatt/" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.instagram.com/jk08edits/" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://github.com/nitishchahal" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  <a href="https://www.behance.net/nitishchoudhary11/appreciated" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;