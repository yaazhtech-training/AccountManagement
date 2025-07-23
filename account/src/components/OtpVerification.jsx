import React, { useState } from 'react';
import axios from 'axios';

function OtpVerification() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleVerify = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:8081/account/auth/verify-otp', { otp });
    console.log(res.data); // for debugging

    if (res.data.success) {
      alert('✅ OTP verified successfully. Account created!');
      window.location.href = '/login'; // or home/dashboard
    } else {
      setError(true);
    }
  } catch (err) {
    console.error(err);
    setError(true);
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">OTP Verification</h2>
        <p className="text-center text-gray-500 mb-4">Please enter the OTP sent to your email:</p>
        <form onSubmit={handleVerify}>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setError(false);
              setSuccess(false);
            }}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Verify OTP
          </button>

          {error && (
            <p className="text-red-600 mt-4 text-sm text-center flex items-center justify-center gap-1">
              <span>❌</span> Invalid OTP or verification failed.
            </p>
          )}

          {success && (
            <p className="text-green-600 mt-4 text-sm text-center flex items-center justify-center gap-1">
              <span>✅</span> Verification successful. Account created.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
