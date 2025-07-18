import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('user');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleSendOTP = async () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const generated = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(generated);

    try {
      const response = await fetch('http://localhost:8081/account/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: generated }),
      });

      if (response.ok) {
        alert(`OTP has been sent to ${email}`);
      } else {
        alert('Failed to send OTP.');
      }
    } catch (error) {
      alert('Error sending OTP. Try again later.');
      console.error(error);
    }
  };

  const handleVerifyOTP = () => {
    if (otp === generatedOtp) {
      setIsOtpVerified(true);
      alert('OTP verified successfully!');
    } else {
      setIsOtpVerified(false);
      alert('OTP verification failed.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // if (!isOtpVerified) {
    //   alert('Please verify the OTP before signing up.');
    //   return;
    // }

    const userData = { userName, email, userType, phone, password };

    try {
      const response = await fetch('http://localhost:8081/account/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      alert(result.message || 'Signup successful!');
    } catch (err) {
      alert('Signup failed.');
      console.error(err);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: "url('/images/signup-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side - Welcome Message */}
        <div className="md:w-1/2 bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 text-black p-10 hidden md:flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to<br />Account Management</h2>
          <p className="text-lg leading-relaxed">
            🔐 Securely register and manage your profile anytime, anywhere.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full p-8 sm:p-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Create Your Account</h3>

          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="User Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-50"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-green-50"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) setPhone(value);
              }}
              placeholder="Phone Number"
              maxLength={10}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-yellow-50"
            />
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-pink-50"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            {/* OTP Row */}
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={handleSendOTP}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md"
              >
                Send OTP
              </button>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
              <button
                type="button"
                onClick={handleVerifyOTP}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md"
              >
                Verify
              </button>
              {isOtpVerified && <CheckCircle className="text-green-500" size={24} />}
            </div>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
            />

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-700 mt-6 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline ml-1">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
