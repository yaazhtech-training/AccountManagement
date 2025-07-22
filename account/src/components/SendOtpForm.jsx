import React, { useState } from 'react';
import axios from 'axios';

const SendOtpForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8084/api/auth/send-otp', {
        email,
      });
      setMessage('✅ OTP sent successfully!');
    } catch (error) {
      setMessage('❌ Failed to send OTP.');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Send OTP to Email</h2>
      <form onSubmit={handleSendOtp} className="w-full">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 px-4 py-2 w-full mb-4 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Send OTP
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
};

export default SendOtpForm;
