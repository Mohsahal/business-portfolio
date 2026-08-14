import React, { useState } from "react";
import Button from "../ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    budget: "$10k - $50k",
    details: ""
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        console.error("API Error:", data.error);
        setStatus("error");
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus("error");
      alert("A network error occurred. Please try again later.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      businessName: "",
      email: "",
      phone: "",
      service: "",
      budget: "$10k - $50k",
      details: ""
    });
    setStatus("idle");
  };

  const inputStyles = "w-full bg-surface-bright border border-outline-variant/50 text-on-surface rounded-lg px-4 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 font-body-md text-body-md placeholder:text-outline-variant";
  const labelStyles = "font-label-caps text-xs text-secondary font-semibold uppercase tracking-wider block mb-2";

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 md:p-14 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500">
      {status === "success" ? (
        <div className="text-center py-16 space-y-8 animate-in fade-in duration-500">
          <div className="w-20 h-20 bg-surface-bright border border-outline-variant/40 rounded-full flex items-center justify-center mx-auto text-primary">
            <span className="material-symbols-outlined text-4xl">check</span>
          </div>
          <h3 className="font-h2-mobile md:font-h2 text-3xl font-bold text-primary tracking-tight">
            Inquiry Received
          </h3>
          <p className="font-body-lg text-secondary max-w-md mx-auto text-balance">
            Thank you, <span className="font-semibold text-primary">{formData.name}</span>. Our technical architects will review your project requirements and respond within 24 hours.
          </p>
          <Button onClick={resetForm} variant="outline" className="mt-8">
            Submit Another Project
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={labelStyles}>Name *</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={inputStyles}
              />
            </div>
            <div>
              <label className={labelStyles}>Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Acme Corp"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={labelStyles}>Email *</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@acme.com"
                className={inputStyles}
              />
            </div>
            <div>
              <label className={labelStyles}>Phone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={inputStyles}
              />
            </div>
          </div>

          <div>
            <label className={labelStyles}>Service Required</label>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputStyles} appearance-none cursor-pointer pr-12`}
              >
                <option value="">Select a service...</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Applications</option>
                <option value="ai-solutions">AI & Automation</option>
                <option value="custom-software">Custom Software Development</option>
                <option value="cloud-devops">Cloud & DevOps</option>
                <option value="cybersecurity">Cybersecurity & Compliance</option>
                <option value="other">Other / Custom Strategy</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline">expand_more</span>
              </div>
            </div>
          </div>

          <div>
            <label className={labelStyles}>Budget Range</label>
            <div className="flex flex-wrap gap-3 mt-2">
              {["<$10k", "$10k - $50k", "$50k+"].map((tier) => (
                <button
                  type="button"
                  key={tier}
                  onClick={() => setFormData((prev) => ({ ...prev, budget: tier }))}
                  className={`px-6 py-3 rounded-full font-label-caps text-xs tracking-wider transition-all duration-300 ${
                    formData.budget === tier
                      ? "bg-primary text-on-primary border border-primary shadow-md scale-105"
                      : "bg-surface-bright text-secondary border border-outline-variant/50 hover:border-primary hover:text-primary"
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelStyles}>Project Details</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals, timeline, and any specific requirements..."
              className={`${inputStyles} resize-y min-h-[120px]`}
            ></textarea>
          </div>

          <div className="pt-6 flex flex-col md:flex-row md:items-center gap-6">
            <Button
              type="submit"
              disabled={status === "submitting"}
              variant="primary"
              arrow={status !== "submitting"}
              className="w-full md:w-auto"
            >
              {status === "submitting" ? "Transmitting..." : "Start a Conversation"}
            </Button>
            <p className="font-label-caps text-[11px] text-outline tracking-widest text-center md:text-left">
              WE TYPICALLY RESPOND WITHIN 24 HOURS. CONFIDENTIALITY GUARANTEED.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
