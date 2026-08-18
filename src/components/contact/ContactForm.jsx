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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const servicesList = [
    { value: "custom", label: "Custom Software Development" },
    { value: "automation", label: "Process Automation" },
    { value: "consulting", label: "Technical Consulting" },
    { value: "other", label: "Other" }
  ];

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

  const inputStyles = "w-full bg-[#f4f4f4] text-primary rounded-none px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-body-md text-body-md placeholder:text-outline";
  const labelStyles = "font-label-caps text-[11px] text-outline uppercase block mb-3 font-medium tracking-wider";

  return (
    <div className="relative">
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
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`${inputStyles} flex items-center justify-between cursor-pointer w-full text-left`}
              >
                <span className={formData.service ? "text-primary" : "text-outline"}>
                  {formData.service 
                    ? servicesList.find(s => s.value === formData.service)?.label 
                    : "Select a service..."}
                </span>
                <span className={`material-symbols-outlined text-outline transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-outline-variant/30 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <ul className="py-2">
                      {servicesList.map((svc) => (
                        <li key={svc.value}>
                          <button
                            type="button"
                            onClick={() => {
                              handleChange({ target: { name: 'service', value: svc.value }});
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-5 py-3 hover:bg-[#f4f4f4] transition-colors font-body-md text-primary ${formData.service === svc.value ? 'bg-[#f4f4f4] font-medium' : ''}`}
                          >
                            {svc.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
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
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-[#1a1a1a] text-white px-8 py-4 text-sm font-medium flex items-center gap-2 hover:bg-black transition-colors rounded-none w-full md:w-auto justify-center"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
              <span className="material-symbols-outlined text-[16px] transform -rotate-45 -mt-1">send</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
