/**
 * LEGACY BOOKING FORM - INTENTIONALLY DISABLED
 *
 * This full booking form has been preserved for future use.
 * Currently replaced with a simplified Google Form redirect flow.
 *
 * To re-enable: Rename this file back to `page.tsx` and remove the new page.
 * Disabled: February 2026
 */

"use client";

import { useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";

const bodyPlacements = [
  "Select body area",
  "Arm (Upper)",
  "Arm (Forearm)",
  "Arm (Full Sleeve)",
  "Back (Upper)",
  "Back (Lower)",
  "Back (Full)",
  "Chest",
  "Ribs",
  "Leg (Thigh)",
  "Leg (Calf)",
  "Leg (Full)",
  "Shoulder",
  "Neck",
  "Hand",
  "Foot",
  "Other",
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    bodyPlacement: "",
    tattooIdea: "",
    preferredDate: "",
    referenceLinks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with email service or form backend
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your submission! We will get back to you within 24-48 hours."
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 text-center">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-foreground">
          BOOK A CONSULTATION
        </h1>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        <p className="mt-6 text-muted max-w-2xl mx-auto px-4">
          Ready to start your tattoo journey? Fill out the form below and
          we&apos;ll get back to you within 24-48 hours to discuss your design
          and schedule your session.
        </p>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-burgundy/30 rounded-2xl p-6 sm:p-8 lg:p-10"
              >
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-foreground text-sm mb-2">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 bg-burgundy-dark/50 border border-burgundy rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-foreground text-sm mb-2">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-burgundy-dark/50 border border-burgundy rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-foreground text-sm mb-2">
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <div className="flex gap-3">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-24 px-3 py-3 bg-burgundy-dark/50 border border-burgundy rounded-lg text-foreground focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="+1">+1</option>
                        <option value="+506">+506</option>
                        <option value="+44">+44</option>
                        <option value="+49">+49</option>
                        <option value="+33">+33</option>
                        <option value="+34">+34</option>
                        <option value="+52">+52</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        required
                        className="flex-1 px-4 py-3 bg-burgundy-dark/50 border border-burgundy rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Body Placement */}
                  <div>
                    <label className="block text-foreground text-sm mb-2">
                      Body Placement <span className="text-gold">*</span>
                    </label>
                    <select
                      name="bodyPlacement"
                      value={formData.bodyPlacement}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-burgundy-dark/50 border border-burgundy rounded-lg text-foreground focus:outline-none focus:border-gold transition-colors"
                    >
                      {bodyPlacements.map((placement) => (
                        <option key={placement} value={placement}>
                          {placement}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tattoo Idea */}
                  <div>
                    <label className="block text-foreground text-sm mb-2">
                      Tattoo Idea & Details <span className="text-gold">*</span>
                    </label>
                    <textarea
                      name="tattooIdea"
                      value={formData.tattooIdea}
                      onChange={handleChange}
                      placeholder="Describe your tattoo idea: size, style (fine line, traditional, blackwork, etc.), colors, and any relevant information..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-burgundy-dark/50 border border-burgundy rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-gold transition-colors resize-y"
                    />
                  </div>

                  {/* Preferred Date/Time */}
                  <div>
                    <label className="block text-foreground text-sm mb-2">
                      Preferred Date/Time{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      placeholder="e.g., Next week, March 15th afternoon"
                      className="w-full px-4 py-3 bg-burgundy-dark/50 border border-burgundy rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Reference Links */}
                  <div>
                    <label className="block text-foreground text-sm mb-2">
                      Reference Links{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <textarea
                      name="referenceLinks"
                      value={formData.referenceLinks}
                      onChange={handleChange}
                      placeholder="Pinterest, Instagram, or other image links for reference..."
                      rows={3}
                      className="w-full px-4 py-3 bg-burgundy-dark/50 border border-burgundy rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-gold transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-burgundy hover:bg-burgundy-dark border border-gold/50 hover:border-gold text-foreground text-sm tracking-[0.15em] rounded-lg transition-all duration-300 mt-4"
                  >
                    SUBMIT REQUEST
                  </button>

                  <p className="text-center text-sm text-muted mt-4">
                    We&apos;ll respond within 24-48 hours to discuss your design
                    and schedule your session.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* Process */}
              <div className="bg-charcoal/50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="text-foreground font-medium">Process</h3>
                </div>
                <ol className="space-y-3 text-foreground/80">
                  <li>1. Submit your request</li>
                  <li>2. We review & respond (24-48h)</li>
                  <li>3. Design consultation</li>
                  <li>4. Schedule your session</li>
                  <li>5. Get tattooed!</li>
                </ol>
              </div>

              {/* Location */}
              <div className="bg-charcoal/50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="text-foreground font-medium">Location</h3>
                </div>
                <div className="space-y-1 text-foreground/80">
                  <p>Plaza Nino, Local 2</p>
                  <p>Playas del Coco</p>
                  <p>Guanacaste, Costa Rica</p>
                </div>
              </div>

              {/* Questions */}
              <div className="bg-charcoal/50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-5 h-5 text-gold" />
                  <h3 className="text-foreground font-medium">Questions?</h3>
                </div>
                <p className="text-foreground/80 mb-2">DM us on Instagram</p>
                <a
                  href="https://www.instagram.com/nobori.tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-foreground transition-colors"
                >
                  @nobori.tattoo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
