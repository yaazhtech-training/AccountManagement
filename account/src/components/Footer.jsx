import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const privacyPolicy = [
    "Your username, password, and other login details are securely stored and never shared with anyone.",
    "The bank records your account activity to help detect fraud.",
    "Changes made in the portal are securely recorded.",
    "The system may log you out after inactivity.",
    "Information about linked accounts is confidential.",
    "No data is sold or misused.",
    "Secure logs are maintained for compliance.",
  ];

  const securityTips = [
    "Use a strong password with special characters.",
    "Enable 2FA or OTP for sensitive actions.",
    "Always log out after use.",
    "Avoid public Wi-Fi for banking.",
    "Regularly review account statements.",
    "Keep contact details updated.",
    "Never share credentials or OTP.",
  ];

  const termsConditions = [
    "Use is limited to authorized users.",
    "Ensure personal/account info is accurate.",
    "No liability for downtime or interruptions.",
    "Maintain login confidentiality.",
    "Bank may update terms without notice.",
  ];

  const handleLinkClick = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalTitle("");
  };

  return (
    <>
      <footer className="bg-[#0a2342] text-white mt-10">
        <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h2 className="font-bold text-lg mb-2">Overview</h2>
            <p>
              Use our secure platform to manage bank accounts, personal info,
              and view financial activities.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Help & Policies</h2>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() =>
                    handleLinkClick("Privacy Policy", privacyPolicy)
                  }
                  className="hover:underline"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("Security Tips", securityTips)}
                  className="hover:underline"
                >
                  Security Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleLinkClick("Terms & Conditions", termsConditions)
                  }
                  className="hover:underline"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Reach Us</h2>
            <p>Email: hr@yaazhtech.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Social</h2>
            <div className="flex space-x-4 mt-2 text-xl">
              <a
                href="https://facebook.com/yaazhtech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com/company/yaazhtech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/yaazhtech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/yaazhtech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs py-4 border-t border-gray-700">
          © 2025 YaazhTech. All rights reserved.
        </div>

        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-bold mb-4">{modalTitle}</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {modalContent.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
