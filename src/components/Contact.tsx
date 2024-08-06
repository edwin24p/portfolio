import React, { useEffect, useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { GitHub, LinkedIn } from "@mui/icons-material";
import emailjs from "emailjs-com";
const Contact: React.FC = () => {
  useEffect(() => emailjs.init("-JJ6FeArBQMf6XSoe"), []);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current; // Get the form from the ref
    if (!form) return;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message =
      "Email: " +
      email +
      ".\n " +
      (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const templateParams = {
      from_name: name,
      message,
    };

    const serviceId = "service_85qm6w6";
    const templateId = "template_qt9o886";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, templateParams);
      alert("email successfully sent");
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#202020] text-white" id="contact">
      <h2 className="flex justify-center text-3xl  pt-10">Contact Me</h2>
      <div className="flex flex-col md:flex-row  justify-between  p-2  md:p-20">
        <div className="md:w-1/2 mb-6 md:mb-0 pt-8 text-center md:text-left">
          <h3 className="mb-6 text-center md:text-left text-2xl hidden md:block">
            Get in Touch
          </h3>
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <span className="text-white mr-2">
              <EmailIcon />
            </span>
            <span className="group relative">
              <a href="mailto:padillaedwin28@gmail.com">
                padillaedwin28@gmail.com
              </a>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#309F77] transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300 origin-left"></span>
            </span>
          </div>
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <span className="text-white mr-2">
              <GitHub />
            </span>
            <span className="group relative">
              <a
                href="https://github.com/edwin24p"
                target="_blank"
                rel="noopener noreferrer"
              >
                edwin24p
              </a>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#309F77] transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300 origin-left"></span>
            </span>
          </div>
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <span className="text-white mr-2">
              <LinkedIn />
            </span>
            <span className="group relative">
              <a
                href="https://www.linkedin.com/in/edwin-padilla-151792219"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edwin Padilla
              </a>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#309F77] transform scale-x-0 group-hover:scale-x-100  transition-transform duration-300 origin-left"></span>
            </span>
          </div>
        </div>

        <div className="md:w-1/2 p-5 md:p-0">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-[#309F77]  py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#309F77] bg-[#202020]"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-[#309F77]  py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#309F77] bg-[#202020]"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="border border-[#309F77]  py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#309F77] h-32 bg-[#202020]"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex justify-center md:justify-start pb-10">
              <button
                type="submit"
                className={`bg-[#309F77] text-white py-2 px-4 hover:bg-[#309F77] transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
