import React from "react";
import Footer from "./Footer";
import {
  FaShieldAlt,
  FaHandsHelping,
  FaLightbulb,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow text-gray-800">
        {/* 🌐 Hero Section */}
        <section
          className="relative text-white text-center py-24 px-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3943722/pexels-photo-3943722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Empowering Your Financial Future</h1>
            <p className="text-lg">
              Smart. Secure. Simple. Your trusted partner in modern banking and account management.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="max-w-6xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Who We Are</h2>
              <p className="mb-4">
                At <span className="font-semibold">YaazhTech</span>, we combine the power of
                technology and financial expertise to build intuitive, secure, and innovative
                banking solutions that help our customers stay ahead.
              </p>
              <p>
                We’re not just a platform — we’re your partner in financial success, building trust
                through reliability and continuous improvement.
              </p>
            </div>
            <div
              className="h-64 w-full rounded-lg shadow-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300')",
              }}
            ></div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="text-center bg-white shadow rounded-lg p-6">
              <div
                className="h-40 w-full rounded bg-cover bg-center mb-4"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300')",
                }}
              ></div>
              <h3 className="text-2xl font-bold text-blue-800">Our Mission</h3>
              <p className="mt-2">
                Empower people and businesses with smart, reliable tools to manage and grow their
                financial lives.
              </p>
            </div>
            <div className="text-center bg-white shadow rounded-lg p-6">
              <div
                className="h-40 w-full rounded bg-cover bg-center mb-4"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/3943734/pexels-photo-3943734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300')",
                }}
              ></div>
              <h3 className="text-2xl font-bold text-indigo-800">Our Vision</h3>
              <p className="mt-2">
                To lead the way in digital banking innovation and deliver a seamless financial
                experience globally.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <FaShieldAlt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-lg text-blue-600">Secure Banking</h4>
              <p className="text-sm mt-2">
                Industry-leading security keeps your data and finances safe.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <FaHandsHelping className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-lg text-blue-600">24/7 Support</h4>
              <p className="text-sm mt-2">
                Our team is here around the clock to support your every need.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <FaLightbulb className="text-blue-600 text-4xl mx-auto mb-4" />
              <h4 className="font-bold text-lg text-blue-600">Continuous Innovation</h4>
              <p className="text-sm mt-2">
                Always improving to deliver the best banking experience.
              </p>
            </div>
          </div>
        </section>

        {/* New: Our Technology */}
        <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              Powered by Cutting-edge Technology
            </h2>
            <p>
              Leveraging AI, analytics, and cloud computing to deliver seamless banking.
            </p>
            <FaLaptopCode className="text-indigo-600 text-5xl mx-auto mt-4" />
          </div>
        </section>

        {/* Optional: Testimonials */}
        <section className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <p>
                <span className="italic">
                  “YaazhTech transformed how we manage our company’s finances. Simple, secure, and
                  always improving.”
                </span>
              </p>
              <p className="mt-2 font-semibold text-sm">— Business Owner</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p>
                <span className="italic">
                  “I love the user-friendly interface and how safe it feels. Highly recommend!”
                </span>
              </p>
              <p className="mt-2 font-semibold text-sm">— Individual User</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
