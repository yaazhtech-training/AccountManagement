import { useState } from "react";

const Userupload = () => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
    phoneNumber: "",
    accountType: "Savings",
    accountNumber: "",
    bankName: "",
    branch: "",
  });

  const [status, setStatus] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setStatus("❌ Phone number must be exactly 10 digits.");
      return;
    }

    // Account number validation (optional)
    if (formData.accountNumber && !/^\d{8,16}$/.test(formData.accountNumber)) {
      setStatus("❌ Account number must be between 8 to 16 digits.");
      return;
    }

    setStatus("✅ Account created successfully!");
    setAccountCreated(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/images/upload.jpg')" }}
    >
      {!accountCreated ? (
        <div className="max-w-md mx-auto bg-white bg-opacity-90 shadow-md p-6 rounded-xl mt-8">
          <h2 className="text-xl font-bold mb-4 text-center">Account Creation Form</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
                placeholder="e.g. 9876543210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Account Type</label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
                <option value="Joint">Joint</option>
                <option value="Student">Student</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Leave blank to auto-generate"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
                placeholder="e.g. SBI, HDFC"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Branch</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
                placeholder="e.g. RT Nagar"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>

          {status && (
            <div className="mt-4 text-sm text-center text-gray-700">{status}</div>
          )}
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white bg-opacity-90 shadow-md p-6 rounded-xl mt-8 text-center">
          <h2 className="text-xl font-bold mb-4">✅ Account Created Successfully!</h2>
          <div className="text-left space-y-2">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phoneNumber}</p>
            <p><strong>Account Type:</strong> {formData.accountType}</p>
            <p><strong>Account Number:</strong> {formData.accountNumber || "(Auto-generated)"}</p>
            <p><strong>Bank:</strong> {formData.bankName}</p>
            <p><strong>Branch:</strong> {formData.branch}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userupload;
