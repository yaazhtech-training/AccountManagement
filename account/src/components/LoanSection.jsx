import { useState } from "react";

const LoanSection = ({ loans }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    accountNumber: "",
    name: "",
    loanType: "Personal Loan",
    amount: "",
    document: null,
  });
  const [applications, setApplications] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "accountNumber") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 18) {
        setFormData((prev) => ({ ...prev, accountNumber: digitsOnly }));
        setErrors((prev) => ({ ...prev, accountNumber: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          accountNumber: "Account Number cannot exceed 18 digits.",
        }));
      }
    } else if (name === "amount") {
      const digitsOnly = value.replace(/\D/g, "");
      if (
        digitsOnly.length <= 7 &&
        parseInt(digitsOnly || 0) <= 5000000
      ) {
        setFormData((prev) => ({ ...prev, amount: digitsOnly }));
        setErrors((prev) => ({ ...prev, amount: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          amount: "Loan Amount cannot exceed ₹50,00,000.",
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.accountNumber || errors.amount) {
      alert("Please fix the errors before submitting.");
      return;
    }

    const newApplication = {
      ...formData,
      status: "Pending",
      id: applications.length + 1,
      date: new Date().toLocaleDateString(),
    };

    setApplications((prev) => [...prev, newApplication]);
    alert(`Loan request submitted for ₹${formData.amount}`);

    setFormData({
      accountNumber: "",
      name: "",
      loanType: "Personal Loan",
      amount: "",
      document: null,
    });
    setErrors({});
    setShowForm(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/images/loans.jpg')" }}
    >
      <div className="p-4 bg-white rounded-xl shadow-md mt-4">
        <h3 className="text-lg font-semibold mb-2">Your Loans</h3>

        {Array.isArray(loans) && loans.length > 0 ? (
          loans.map((loan, idx) => (
            <div key={idx} className="mb-2 border-b pb-2">
              <p>Type: {loan.type}</p>
              <p>
                EMI: ₹{loan.emi} | Balance: ₹{loan.balance}
              </p>
              <p>Next Due: {loan.dueDate}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No existing loans found.</p>
        )}

        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          {showForm ? "Cancel Application" : "Apply for New Loan"}
        </button>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-4 border-t pt-4 space-y-4 bg-gray-50 p-4 rounded"
          >
            <div>
              <label className="block text-sm font-medium">
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                required
                placeholder="Up to 18 digits"
                className={`w-full border p-2 rounded ${
                  errors.accountNumber ? "border-red-500" : ""
                }`}
              />
              {errors.accountNumber && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.accountNumber}
                </p>
              )}
            </div>

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
              <label className="block text-sm font-medium">Loan Type</label>
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Education Loan</option>
                <option>Vehicle Loan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">
                Loan Amount (₹)
              </label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                placeholder="Up to ₹50,00,000"
                className={`w-full border p-2 rounded ${
                  errors.amount ? "border-red-500" : ""
                }`}
              />
              {errors.amount && (
                <p className="text-red-600 text-xs mt-1">{errors.amount}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Upload Security Document
              </label>
              <input
                type="file"
                name="document"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit Loan Application
            </button>
          </form>
        )}

        {applications.length > 0 && (
          <div className="mt-6">
            <h4 className="text-md font-bold mb-2">Loan Applications Status</h4>
            <table className="w-full text-sm border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Account No</th>
                  <th className="p-2 text-left">Loan Type</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-t">
                    <td className="p-2">{app.date}</td>
                    <td className="p-2">{app.accountNumber.slice(-4)}</td>
                    <td className="p-2">{app.loanType}</td>
                    <td className="p-2">₹{app.amount}</td>
                    <td
                      className={`p-2 font-semibold ${
                        app.status === "Pending"
                          ? "text-yellow-600"
                          : app.status === "Approved"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {app.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanSection;
