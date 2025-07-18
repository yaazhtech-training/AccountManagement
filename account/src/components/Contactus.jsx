import { useState } from "react";

const Contactus = () => {
  const [ticketData, setTicketData] = useState({
    issueType: "Login Issue",
    description: "",
  });

  const [tickets, setTickets] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: tickets.length + 1,
      ...ticketData,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };
    setTickets((prev) => [...prev, newTicket]);
    alert("✅ Support ticket submitted!");
    setTicketData({ issueType: "Login Issue", description: "" });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/images/contact.jpg')" }}
    >
    <div className="p-4 bg-white rounded-xl shadow-md mt-4 max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold mb-4">Help & Support</h3>

      <div className="mb-4 text-sm">
        <p>📞 <strong>Call us:</strong> 1800-123-456</p>
        <p>📧 <strong>Email:</strong> support@yourbank.com</p>
      </div>

      {/* Raise Ticket Form */}
      <div className="border-t pt-4 mt-4">
        <h4 className="text-md font-bold mb-2">Raise a Support Ticket</h4>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded">
          <div>
            <label className="block text-sm font-medium">Issue Type</label>
            <select
              name="issueType"
              value={ticketData.issueType}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option>Login Issue</option>
              <option>Transaction Failed</option>
              <option>Loan Inquiry</option>
              <option>Card Blocked</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={ticketData.description}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
              rows={3}
              placeholder="Describe your issue..."
            ></textarea>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit Ticket
          </button>
        </form>
      </div>

      {/* Ticket List */}
      {tickets.length > 0 && (
        <div className="mt-6">
          <h4 className="text-md font-bold mb-2">Your Support Tickets</h4>
          <table className="w-full text-sm border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Issue</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-t">
                  <td className="p-2">{ticket.date}</td>
                  <td className="p-2">{ticket.issueType}</td>
                  <td className="p-2">{ticket.description}</td>
                  <td
                    className={`p-2 font-semibold ${
                      ticket.status === "Pending"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {ticket.status}
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

export default Contactus;