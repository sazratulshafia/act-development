'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  FileText, 
  Sparkles, 
  Scale, 
  Clock, 
  Award, 
  Send,
  Calculator,
  Compass,
  Check
} from 'lucide-react';

export default function LandownersPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Gulshan 1 / 2',
    landAreaKatha: '',
    roadWidthFeet: '',
    plotType: 'Corner Plot (Two Sides Open)',
    ownershipStatus: 'Single Heir / Clean Title',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Quick FAR Estimator
  const estimatedBuiltArea = React.useMemo(() => {
    const katha = parseFloat(formData.landAreaKatha);
    const road = parseFloat(formData.roadWidthFeet);
    if (!katha || isNaN(katha) || katha <= 0) return null;
    
    let farFactor = 3.5;
    if (road >= 40) farFactor = 5.0;
    else if (road >= 30) farFactor = 4.2;
    else if (road >= 25) farFactor = 3.8;
    else if (road >= 20) farFactor = 3.2;

    const plotSft = katha * 720;
    const totalPotentialSft = Math.round(plotSft * farFactor);
    const landownerShareSft = Math.round(totalPotentialSft * 0.5);

    return {
      plotSft,
      farFactor,
      totalPotentialSft,
      landownerShareSft,
    };
  }, [formData.landAreaKatha, formData.roadWidthFeet]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'landowner_joint_venture',
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

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* Hero Section */}
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
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e60023' }} />
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e60023', fontWeight: 700 }}>
              Landowner Joint Venture Directorate
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
            Transform Your Ancestral Land Into an <br />
            <span style={{ color: '#e60023', fontStyle: 'italic' }}>
              Enduring Architectural Masterpiece
            </span>
          </h1>

          <p style={{ 
            maxWidth: '720px', 
            margin: '0 auto', 
            color: '#4b5563', 
            fontSize: '16px', 
            lineHeight: 1.8 
          }}>
            Partnering with Act Development ensures institutional transparency, maximum Floor Area Ratio (FAR) utilization under RAJUK regulations, strictly audited construction timelines, and an uncompromising standard of luxury that commands the highest rental yield and capital appreciation in Dhaka.
          </p>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '32px', 
            marginTop: '36px',
            paddingTop: '28px',
            borderTop: '1px solid #e2e8f0'
          }}>
            <div>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>50:50</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Equitable Sharing</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }} />
            <div>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700 }}>100%</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>In-House Construction</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }} />
            <div>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>0 Delay</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Daily Indemnity Guarantee</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pillars to Landowners */}
      <section style={{ padding: '80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
            The Act Landowner Guarantee
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#111827', marginTop: '6px' }}>
            Why Discerning Landowners Choose Act
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            {
              icon: Scale,
              title: 'Fair & Transparent Sharing Ratio',
              desc: 'Detailed square-footage accounting based on transparent RAJUK FAR calculations. No hidden deductions, car parking disputes, or ambiguity.',
            },
            {
              icon: Clock,
              title: 'Guaranteed Handover With Penalty Clause',
              desc: 'We back our handover date with a legally binding financial penalty for every day of unapproved delay. We take punctuality as a core corporate duty.',
            },
            {
              icon: ShieldCheck,
              title: 'Strict Quality Auditing (BNBC Zone-2)',
              desc: 'In-house certified concrete batch crushing tests (4,500+ PSI) and 72.5 grade rebar. Complete material test dossiers handed over to the landowner.',
            },
            {
              icon: Award,
              title: 'Premium Brand Prestige',
              desc: 'Act Development properties achieve Dhaka’s highest rental premiums from multinational corporations and diplomatic missions, enhancing your family’s generational wealth.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '10px', 
                  backgroundColor: '#fff0f2', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#e60023',
                  marginBottom: '18px'
                }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#111827', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Land Feasibility & Submission Form */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 24px 100px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'start' }}>
            
            {/* Left Info & Live Estimator */}
            <div style={{ gridColumn: 'span 12' }} className="lg:col-span-5">
              <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                Confidential Assessment
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '30px', color: '#111827', marginTop: '6px', marginBottom: '16px' }}>
                Submit Your Plot Parameters
              </h2>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
                Our Managing Director and Chief Structural Engineer will personally evaluate your plot’s potential under RAJUK Dhaka Imarat Nirman Bidhimala and provide a comprehensive Feasibility Report within 48 hours.
              </p>

              {/* Live FAR Projection Box */}
              <div style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #fecdd3', 
                borderRadius: '16px', 
                padding: '24px',
                marginBottom: '28px',
                boxShadow: '0 4px 14px rgba(230,0,35,0.05)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <Calculator size={18} style={{ color: '#e60023' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', color: '#111827', margin: 0 }}>
                    Instant Built-Area Estimate
                  </h4>
                </div>

                {estimatedBuiltArea ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                      <span style={{ color: '#6b7280' }}>Plot Footprint:</span>
                      <span style={{ color: '#111827', fontWeight: 700 }}>{estimatedBuiltArea.plotSft.toLocaleString()} Sq Ft</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                      <span style={{ color: '#6b7280' }}>Estimated RAJUK FAR:</span>
                      <span style={{ color: '#e60023', fontWeight: 700 }}>~{estimatedBuiltArea.farFactor.toFixed(1)}x</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                      <span style={{ color: '#6b7280' }}>Total Potential Built-up:</span>
                      <span style={{ color: '#111827', fontWeight: 700 }}>~{estimatedBuiltArea.totalPotentialSft.toLocaleString()} sft</span>
                    </div>
                    <div style={{ 
                      paddingTop: '12px', 
                      marginTop: '4px', 
                      borderTop: '1px solid #fee2e2', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      fontSize: '14px' 
                    }}>
                      <span style={{ color: '#e60023', fontWeight: 700 }}>Estimated Landowner Share (50%):</span>
                      <span style={{ color: '#e60023', fontWeight: 800 }}>~{estimatedBuiltArea.landownerShareSft.toLocaleString()} sft</span>
                    </div>
                  </div>
                ) : (
                  <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                    Enter your plot size in Katha and road width on the form to see an instant projection of your potential built area.
                  </p>
                )}
              </div>

              {/* Direct hotline */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px', 
                  backgroundColor: '#fff0f2', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#e60023' 
                }}>
                  <PhoneCall size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Direct Landowner Concierge</div>
                  <div style={{ fontSize: '16px', color: '#111827', fontWeight: 700 }}>16760 / +880 1700-000000</div>
                </div>
              </div>
            </div>

            {/* Right Form Container */}
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
                      Proposal Received in Confidence
                    </h3>
                    <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 24px' }}>
                      Thank you, <strong>{formData.name}</strong>. Our Land Development Directorate has initiated preliminary cadastral mapping for your plot in {formData.location}. We will contact you at <strong>{formData.phone}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-red"
                      style={{ padding: '10px 24px', fontSize: '13px' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#111827', marginBottom: '4px' }}>
                      Landowner Details & Plot Parameters
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Al-Haj Dr. Anisur Rahman"
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
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+880 17..."
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
                          Plot Location / Enclave *
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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
                          <option value="Gulshan 1 / 2">Gulshan 1 / 2</option>
                          <option value="Banani">Banani</option>
                          <option value="Baridhara Diplomatic Zone">Baridhara Diplomatic Zone</option>
                          <option value="Uttara (Sectors 1–14)">Uttara (Sectors 1–14)</option>
                          <option value="Bashundhara R/A">Bashundhara R/A</option>
                          <option value="Dhanmondi">Dhanmondi</option>
                          <option value="Other Prime Dhaka Enclave">Other Prime Dhaka Enclave</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                          Land Area (in Katha) *
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          required
                          placeholder="e.g. 7.50"
                          value={formData.landAreaKatha}
                          onChange={(e) => setFormData({ ...formData, landAreaKatha: e.target.value })}
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
                          Front Road Width (in Feet) *
                        </label>
                        <input
                          type="number"
                          required
                          placeholder="e.g. 30"
                          value={formData.roadWidthFeet}
                          onChange={(e) => setFormData({ ...formData, roadWidthFeet: e.target.value })}
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

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Additional Notes or Expectations
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Seeking single-unit boutique apartment building with delivery in 24 months..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
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
                      {loading ? 'Submitting Proposal...' : 'Request Confidential Feasibility Study'}
                    </button>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
