import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8081/account/auth/send-otp', { email }, {
        headers: { 'Content-Type': 'application/json' }
      });
      setShowOtp(true);
      setMessage('OTP sent to your email');
    } catch (error) {
      setMessage('❌ Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8081/account/auth/verify-otp', { email, otp }, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.data === true) {
        setOtpVerified(true);
        setMessage('✅ OTP Verified. You can now reset your password.');
      } else {
        setMessage('❌ Invalid OTP.');
      }
    } catch (error) {
      setMessage('❌ OTP verification failed.');
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage('❌ Passwords do not match.');
      return;
    }

    try {
      await axios.post('http://localhost:8081/account/auth/reset-password', {
        email,
        newPassword
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      setMessage('✅ Password reset successful.');
    } catch (error) {
      setMessage('❌ Failed to reset password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">🔒 Forgot Password</h2>

        <input
          type="email"
          className="w-full p-3 border rounded mb-4"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {!showOtp && (
          <button onClick={handleSendOtp} className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600">
            Send OTP
          </button>
        )}

        {showOtp && !otpVerified && (
          <>
            <input
              type="text"
              className="w-full p-3 border rounded mb-4"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp} className="w-full bg-green-500 text-white py-2 rounded mb-4 hover:bg-green-600">
              Verify OTP
            </button>
          </>
        )}

        {otpVerified && (
          <>
            <input
              type="password"
              className="w-full p-3 border rounded mb-4"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              className="w-full p-3 border rounded mb-4"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleResetPassword} className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
              Reset Password
            </button>
          </>
        )}

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
