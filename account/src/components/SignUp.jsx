import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Mail, Phone, Lock, CheckCircle } from 'lucide-react';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Step 1: Sign Up (send OTP)
  const handleSubmit = async (e) => {
  e.preventDefault();

  const { userName, email, phoneNumber, password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    setError("❌ Passwords do not match.");
    return;
  }

  try {
    const response = await axios.post(
      'http://localhost:8081/account/auth/signup',
      {
        userName,
        email,
        phoneNumber,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === 200 || response.data.message === "✅ OTP sent to your email") {
      setOtpSent(true);
      setSuccessMsg('📨 OTP sent to your email. Please verify to complete signup.');
      setError('');
    } else {
      setError(response.data.message || 'Signup failed.');
      setSuccessMsg('');
    }
  } catch (err) {
    console.error('Signup error:', err);
    setError(err.response?.data?.message || 'Signup failed.');
    setSuccessMsg('');
  }
};


  // ✅ Step 2: Validate OTP
  const handleVerifyOtp = async () => {
  if (!otp || !formData.email) {
    setError('Please enter the OTP.');
    return;
  }

  try {
    const response = await axios.post(
      'http://localhost:8081/account/auth/validate-otp',
      {
        email: formData.email,
        otp: otp
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === 200) {
      const token = response.data.token || response.data.accessToken;

      // ✅ Save token to localStorage
      localStorage.setItem("authToken", token);

      setOtpVerified(true);
      setSuccessMsg('🎉 OTP verified! Account activated.');
      setError('');

      // ✅ Navigate to home
      setTimeout(() => navigate('/home'), 1000);
    } else {
      setError('❌ Invalid or expired OTP.');
    }
  } catch (err) {
    console.error('OTP verify error:', err);
    setError(err.response?.data?.message || 'OTP verification failed.');
    setSuccessMsg('');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/signup-bg.jpg')" }}>
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg flex w-[90%] max-w-5xl overflow-hidden">

        {/* Left Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>

          {!otpSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField icon={<User />} name="userName" value={formData.userName} onChange={handleChange} placeholder="Username" />
              <InputField icon={<Mail />} name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <InputField icon={<Phone />} name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" pattern="[0-9]{10}" />
              <InputField icon={<Lock />} name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
              <InputField icon={<Lock />} name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />

              <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
                Sign Up & Send OTP
              </button>
            </form>
          ) : (
            <>
              <div className="flex items-center border rounded px-3 py-2 mt-4">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full outline-none"
                />
                {otpVerified && <CheckCircle className="text-green-600 ml-2" />}
              </div>

              {!otpVerified && (
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="w-full bg-green-600 text-white py-2 mt-2 rounded hover:bg-green-700 transition"
                >
                  Verify OTP
                </button>
              )}
            </>
          )}

          <div className="text-sm mt-4">
            Already have an account?{' '}
            <span onClick={() => navigate('/login')} className="text-blue-600 cursor-pointer underline">
              Go to Login
            </span>
          </div>

          {error && <div className="text-red-600 mt-4 text-sm">{error}</div>}
          {successMsg && <div className="text-green-600 mt-4 text-sm">{successMsg}</div>}
        </div>

        {/* Right Info */}
        <div className="hidden md:flex w-1/2 bg-black items-center justify-center p-8">
          <p className="text-lg text-white font-semibold text-center leading-relaxed">
            Welcome to our platform! <br />
            Sign up to access the portal and manage your account with ease.<br />
            Secure, smart, and smooth.
          </p>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ icon, name, type = "text", value, onChange, placeholder, pattern }) => (
  <div className="flex items-center border rounded px-3 py-2">
    <span className="text-gray-500 mr-2">{icon}</span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full outline-none"
      required
      pattern={pattern}
    />
  </div>
);

export default SignUp;
