// src/components/OtpVerification.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const navigate = useNavigate();

  const email = localStorage.getItem("otpEmail");

  useEffect(() => {
    // ⛔ Redirect if no email found (user skipped signup/forgot)
    if (!email) {
      setMessage("⚠️ No email found. Please go back and start again.");
      setStatus("error");

      setTimeout(() => {
        navigate("/signup"); // or "/forgot-password"
      }, 3000);
    }
  }, [email, navigate]);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("✅ OTP verification successful! Redirecting...");

        setTimeout(() => {
          navigate("/login"); // change as needed: "/dashboard", etc.
        }, 2000);
      } else {
        setStatus("error");
        setMessage(`❌ ${result.message}`);
      }
    } catch (error) {
      setStatus("error");
      setMessage("❌ Server error during OTP verification.");
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("📧 A new OTP has been sent to your email.");
        setStatus("info");
        setTimeLeft(60);
      } else {
        setStatus("error");
        setMessage(`❌ ${result.message}`);
      }
    } catch (error) {
      setStatus("error");
      setMessage("❌ Error resending OTP.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-yellow-100 to-orange-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Email OTP Verification</h2>
        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label className="block font-semibold">Enter OTP sent to your Email</label>
            <input
              type="text"
              maxLength="6"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div className="text-center text-gray-600 font-medium">
            {timeLeft > 0 ? `⏱ OTP valid for: ${timeLeft} seconds` : `❌ OTP expired`}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition"
            disabled={timeLeft === 0}
          >
            Verify OTP
          </button>

          {timeLeft === 0 && (
            <button
              type="button"
              onClick={handleResendOtp}
              className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition"
            >
              Resend OTP
            </button>
          )}

          {message && (
            <p
              className={`text-sm text-center mt-4 font-medium ${
                status === 'success'
                  ? 'text-green-600'
                  : status === 'error'
                  ? 'text-red-600'
                  : 'text-blue-600'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
