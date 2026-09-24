'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Send,
  HelpCircle,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/mockData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'property_purchase',
    preferredProject: 'Act Vertica (Gulshan 2)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: formData.inquiryType,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: 'How does Act Development ensure statutory compliance and RAJUK approvals?',
      a: 'Every Act Development project undergoes full statutory sanction through the Rajdhani Unnayan Kartripakkha (RAJUK), including structural vetted designs, Civil Aviation height clearances, and Fire Department NOCs. All approval permit numbers are prominently published on the project dossiers.',
    },
    {
      q: 'How are Joint Venture ratios calculated for prime Dhaka landowners?',
      a: 'Our Joint Venture models are calibrated using exact Floor Area Ratio (FAR) calculations under the Dhaka Imarat Nirman Bidhimala. We offer equitable 50:50 sharing (or customized ratios), backed by bank guarantees, upfront signing security, and legally binding daily delay indemnity clauses.',
    },
    {
      q: 'Can Non-Resident Bangladeshis (NRBs) legally repatriate property yields?',
      a: 'Yes. Under Bangladesh Bank Foreign Exchange Guidelines, non-resident investors remitting funds through formal banking channels (NITA / FC accounts) enjoy complete legal entitlement to repatriate net rental incomes and capital gains upon resale.',
    },
    {
      q: 'What is covered under the 10-Year Act Structural Guarantee?',
      a: 'Our 10-Year Guarantee covers the structural integrity of the reinforced concrete frame, foundation piles, shear cores, and substructure waterproofing against settlement, structural cracks, or water ingress.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* Header Banner */}
      <section style={{ backgroundColor: '#f8fafc', padding: '60px 24px 70px', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '6px 16px', 
            backgroundColor: '#fff0f2', 
            border: '1px solid #fecdd3', 
            borderRadius: '999px',
            marginBottom: '18px'
          }}>
            <Sparkles size={14} style={{ color: '#e60023' }} />
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e60023', fontWeight: 700 }}>
              Concierge & Client Advisory
            </span>
          </div>

          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(32px, 5vw, 54px)', 
            color: '#111827', 
            marginBottom: '18px',
            fontWeight: 700,
            lineHeight: 1.15
          }}>
            Connect With Our <br />
            <span style={{ color: '#e60023', fontStyle: 'italic' }}>
              Private Client Concierge
            </span>
          </h1>

          <p style={{ 
            maxWidth: '680px', 
            margin: '0 auto', 
            color: '#4b5563', 
            fontSize: '16px', 
            lineHeight: 1.8 
          }}>
            Whether you are considering acquiring a penthouse suite, evaluating a Joint Venture for your ancestral plot, or seeking an overseas NRB briefing, our senior advisory directorate is at your service.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section style={{ padding: '80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'start' }}>
          
          {/* Left Column: Coordinates & Hotlines */}
          <div style={{ gridColumn: 'span 12' }} className="lg:col-span-5">
            <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
              Headquarters & Gallery
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: '#111827', marginTop: '6px', marginBottom: '24px' }}>
              The Act Experience Center
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '36px' }}>
              
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '10px', 
                  backgroundColor: '#fff0f2', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#e60023',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Dhaka Corporate Address</div>
                  <div style={{ fontSize: '15px', color: '#111827', fontWeight: 700, marginTop: '2px' }}>
                    Act Tower, Level 8, Plot 14, Road 11
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>
                    Banani / Gulshan 2 Enclave, Dhaka 1213, Bangladesh
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '10px', 
                  backgroundColor: '#fff0f2', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#e60023',
                  flexShrink: 0
                }}>
                  <PhoneCall size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Dhaka Direct Hotline</div>
                  <div style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700, marginTop: '2px' }}>
                    16760
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>
                    Accessible nationwide 7 days a week
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '10px', 
                  backgroundColor: '#f0fdf4', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#16a34a',
                  flexShrink: 0
                }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>International & WhatsApp Concierge</div>
                  <div style={{ fontSize: '15px', color: '#111827', fontWeight: 700, marginTop: '2px' }}>
                    +880 1700-000000
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>
                    Direct WhatsApp response for overseas NRBs
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '10px', 
                  backgroundColor: '#fff0f2', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#e60023',
                  flexShrink: 0
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Visiting Hours</div>
                  <div style={{ fontSize: '14px', color: '#111827', fontWeight: 700, marginTop: '2px' }}>
                    Saturday – Thursday: 9:30 AM – 6:30 PM
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>
                    Private Friday appointments available by prior reservation
                  </div>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp button */}
            <a
              href="https://wa.me/8801700000000?text=Hello%20Act%20Development%20Concierge,%20I%20would%20like%20to%20inquire."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '8px',
                backgroundColor: '#25D366',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '13.5px',
                textDecoration: 'none',
              }}
            >
              <MessageCircle size={18} />
              <span>Connect Instantly on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div style={{ gridColumn: 'span 12' }} className="lg:col-span-7">
            <div style={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #e5e7eb', 
              borderRadius: '20px', 
              padding: '36px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)' 
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <CheckCircle2 size={56} style={{ color: '#e60023', margin: '0 auto 20px' }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#111827', marginBottom: '10px' }}>
                    Inquiry Received in Confidence
                  </h3>
                  <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 24px' }}>
                    Thank you, <strong>{formData.name}</strong>. Our senior relationship manager has received your dispatch and will be in communication via <strong>{formData.phone}</strong> within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        inquiryType: 'property_purchase',
                        preferredProject: 'Act Vertica (Gulshan 2)',
                        message: '',
                      });
                    }}
                    className="btn-red"
                    style={{ padding: '10px 24px', fontSize: '13px' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#111827', marginBottom: '4px' }}>
                    Send an Official Inquiry
                  </h3>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Nature of Inquiry *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        padding: '11px 14px',
                        color: '#111827',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    >
                      <option value="property_purchase">Apartment / Penthouse Purchase</option>
                      <option value="landowner_joint_venture">Landowner Joint Venture Proposal</option>
                      <option value="nrb_investment">Non-Resident Bangladeshi (NRB) Investment</option>
                      <option value="corporate_inquiry">Corporate / Architectural Collaboration</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Barrister / Engr. ..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          padding: '11px 14px',
                          color: '#111827',
                          fontSize: '13.5px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 17... or overseas number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          padding: '11px 14px',
                          color: '#111827',
                          fontSize: '13.5px',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          padding: '11px 14px',
                          color: '#111827',
                          fontSize: '13.5px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Project of Interest
                      </label>
                      <select
                        value={formData.preferredProject}
                        onChange={(e) => setFormData({ ...formData, preferredProject: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          padding: '11px 14px',
                          color: '#111827',
                          fontSize: '13.5px',
                          outline: 'none',
                        }}
                      >
                        {PROJECTS_DATA.map((p) => (
                          <option key={p.id} value={`${p.title} (${p.locationName})`}>
                            {p.title} ({p.locationName})
                          </option>
                        ))}
                        <option value="General Consultation">General Portfolio Overview</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Message or Specific Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share preferred unit sizes, bedroom preferences, or plot specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        padding: '11px 14px',
                        color: '#111827',
                        fontSize: '13.5px',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-red"
                    style={{
                      padding: '13px',
                      fontSize: '14px',
                      marginTop: '4px',
                    }}
                  >
                    {loading ? 'Transmitting...' : 'Send Confidential Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
              Clarity & Transparency
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#111827', marginTop: '6px' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#ffffff',
                    border: isOpen ? '1px solid #fca5a5' : '1px solid #e5e7eb',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: isOpen ? '#e60023' : '#111827',
                      fontSize: '15px',
                      fontWeight: 700,
                      gap: '16px',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-heading)' }}>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        color: isOpen ? '#e60023' : '#6b7280',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 22px 18px', color: '#4b5563', fontSize: '14px', lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
