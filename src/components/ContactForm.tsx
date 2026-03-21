"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    class: "",
    message: "",
    role: "student", // default role
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, send to API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", phone: "", class: "", message: "", role: "student" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 shadow-sm border border-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gradient-start/30 focus:border-gradient-start transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98XXX XXXXX"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gradient-start/30 focus:border-gradient-start transition-all"
          />
        </div>
      </div>

      {/* Role Selection */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-primary mb-2.5 uppercase tracking-wider text-center">
          I am a...
        </label>
        <div className="flex p-1 bg-bg rounded-full border border-border">
          <button
            type="button"
            onClick={() => setForm({ ...form, role: "student" })}
            className={`flex-1 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
              form.role === "student"
                ? "bg-primary text-white shadow-md"
                : "text-text-muted hover:text-primary"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, role: "parent" })}
            className={`flex-1 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
              form.role === "parent"
                ? "bg-primary text-white shadow-md"
                : "text-text-muted hover:text-primary"
            }`}
          >
            Parent
          </button>
        </div>
      </div>

      {/* Class */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">
          Class / Grade
        </label>
        <select
          required
          value={form.class}
          onChange={(e) => setForm({ ...form, class: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gradient-start/30 focus:border-gradient-start transition-all bg-white"
        >
          <option value="">Select your class</option>
          <option value="class-10">Class 10 (SSC/CBSE)</option>
          <option value="class-12-science">Class 12 Science</option>
          <option value="class-12-commerce">Class 12 Commerce</option>
          <option value="mht-cet">MHT-CET</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-primary mb-1.5 uppercase tracking-wider">
          Your Message
        </label>
        <textarea
          rows={4}
          placeholder="How can we help you?"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gradient-start/30 focus:border-gradient-start transition-all resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3.5 bg-gradient-to-r from-accent-orange to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
      >
        {submitted ? "✓ Inquiry Sent!" : "Send Inquiry"}
      </button>
    </form>
  );
}
