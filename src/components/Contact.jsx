import { Mail, Linkedin, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const email = "baburakesh2308@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/rakesh-babu-ba487820a/";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      setCopySuccess("Failed to copy");
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>

        <div className="space-y-8">
          {/* Email Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-gray-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Email</h2>
            </div>
            <div className="flex-col gap-4 lg:flex lg:flex-row lg:items-center lg:justify-between bg-white p-4 rounded-md border border-gray-200">
              <span className="text-gray-700">{email}</span>
              <div className="flex flex-row gap-4">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Copy className="w-5 h-5 mr-1" />
                  {copySuccess || "Copy"}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Linkedin className="w-6 h-6 text-gray-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">LinkedIn</h2>
            </div>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-4 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">View Profile</span>
              <ExternalLink className="w-5 h-5 text-gray-600" />
            </a>
          </div>

          {/* Contact Message */}
          <p className="text-gray-600 text-center mt-8">
            Feel free to reach out! I'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
