import React, { useState } from "react";
import Button from "../ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    details: ""
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
      details: ""
    });
    setStatus("idle");
  };

  const inputStyles = "w-full bg-white border border-outline-variant/60 text-primary rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-body-md text-body-md";
  const labelStyles = "font-label-caps text-[12px] text-primary uppercase block mb-2 font-medium tracking-wider";

  return (
    <div className="bg-white border border-outline-variant/60 p-8 md:p-12 rounded-xl shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
      {status === "success" ? (
        <div className="text-center py-16 space-y-8 animate-in fade-in duration-500">
          <div className="w-20 h-20 bg-surface-container-low border border-outline-variant/40 rounded-full flex items-center justify-center mx-auto text-primary">
            <span className="material-symbols-outlined text-4xl">check</span>
          </div>
          <h3 className="font-h2 text-3xl md:text-4xl font-bold text-primary tracking-tight">
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyles}>Name</label>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyles}>Email</label>
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
              <div className="relative flex items-center">
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
          </div>

          <div>
            <label className={labelStyles}>Service Required</label>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputStyles} appearance-none bg-transparent relative z-10 cursor-pointer`}
              >
                <option disabled value="">Select a service...</option>
                <option value="custom">Custom Software Development</option>
                <option value="automation">Process Automation</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none z-0">
                <span className="material-symbols-outlined text-outline">expand_more</span>
              </div>
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

          <div className="pt-4">
            <Button
              type="submit"
              disabled={status === "submitting"}
              variant="primary"
              arrow={status !== "submitting"}
              className="w-full md:w-auto"
            >
              {status === "submitting" ? "Transmitting..." : "Submit Inquiry"}
            </Button>
            <p className="font-label-caps text-[12px] text-outline mt-4 text-center md:text-left tracking-widest uppercase">
              We typically respond within 24 hours.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
