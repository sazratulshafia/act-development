'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Globe, 
  ShieldCheck, 
  DollarSign, 
  Video, 
  Calendar, 
  CheckCircle2, 
  FileCheck, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Send,
  Building,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/mockData';

export default function NRBPage() {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('USD');
  const [consultForm, setConsultForm] = useState({
    name: '',
    country: 'United States',
    phone: '',
    email: '',
    timezone: 'Eastern Standard Time (EST)',
    preferredProject: 'Act Vertica (Gulshan 2)',
    preferredDate: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...consultForm,
          type: 'nrb_virtual_consultation',
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

  const formatPrice = (crores: number) => {
    if (currency === 'USD') {
      const usdMillions = (crores * 10000000) / (120 * 1000000);
      return `$${usdMillions.toFixed(2)}M USD`;
    }
    return `৳${crores.toFixed(2)} Cr BDT`;
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
            <Globe size={14} style={{ color: '#e60023' }} />
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e60023', fontWeight: 700 }}>
              Non-Resident Bangladeshi (NRB) Investment Wing
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
            Invest in Dhaka’s Most Prestigious Enclaves <br />
            <span style={{ color: '#e60023', fontStyle: 'italic' }}>
              From Anywhere Across the Globe
            </span>
          </h1>

          <p style={{ 
            maxWidth: '720px', 
            margin: '0 auto', 
            color: '#4b5563', 
            fontSize: '16px', 
            lineHeight: 1.8 
          }}>
            Designed specifically for expatriate Bangladeshis living in North America, Europe, Australia, and the Middle East. Enjoy zero-stress property acquisition backed by verified Bangladesh Bank remittance compliance, consular Power of Attorney (PoA) facilitation, and hands-off diplomatic rental asset management.
          </p>
        </div>
      </section>

      {/* 4 Pillars of NRB Protection */}
      <section style={{ padding: '80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
            Overseas Buyer Assurance
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#111827', marginTop: '6px' }}>
            Built for Transparency & Global Convenience
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            {
              icon: ShieldCheck,
              title: 'Bangladesh Bank Remittance Protocols',
              desc: 'Seamless routing through NITA and FC bank accounts. We provide complete paperwork guaranteeing 100% legal clearance and foreign repatriation entitlement.',
            },
            {
              icon: FileCheck,
              title: 'Embassy Power of Attorney (PoA) Assistance',
              desc: 'We assist with Bangladesh Embassy / High Commission PoA verification formats in Washington D.C., New York, London, Ottawa, Sydney, and Dubai.',
            },
            {
              icon: Video,
              title: 'Live 4K Virtual Walkthroughs & Drone Audits',
              desc: 'Monthly personalized video reports showing the structural slab casting, interior brickwork, and finishes of your specific apartment unit.',
            },
            {
              icon: TrendingUp,
              title: 'Diplomatic Tenancy & Asset Management',
              desc: 'Our in-house Facility Management team leases your residence to international embassy personnel, diplomats, and MNC directors, generating steady foreign currency returns.',
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

      {/* Book Virtual Video Consultation Form */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 24px 100px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'start' }}>
            
            <div style={{ gridColumn: 'span 12' }} className="lg:col-span-5">
              <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                Virtual Concierge
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '30px', color: '#111827', marginTop: '6px', marginBottom: '16px' }}>
                Schedule a 1-on-1 Video Briefing
              </h2>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
                Connect with our International Client Director via Zoom or Google Meet at a time suited to your overseas time zone. We will present complete CAD blueprints, live construction video feeds, and custom financial projections.
              </p>

              <div style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #25D366', 
                borderRadius: '12px', 
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.08)'
              }}>
                <div>
                  <div style={{ fontSize: '14px', color: '#111827', fontWeight: 700 }}>WhatsApp Concierge for NRBs</div>
                  <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: 600 }}>+880 1700-000000 (24/7 Global Desk)</div>
                </div>
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  Chat Now
                </a>
              </div>
            </div>

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
                      Virtual Briefing Confirmed
                    </h3>
                    <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 24px' }}>
                      Thank you, <strong>{consultForm.name}</strong>. A calendar invite and secure video conference link will be dispatched to <strong>{consultForm.email}</strong> adjusted for <strong>{consultForm.timezone}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-red"
                      style={{ padding: '10px 24px', fontSize: '13px' }}
                    >
                      Schedule Another Session
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#111827', marginBottom: '4px' }}>
                      Reserve Your Overseas Video Session
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Barrister Tariq Mahmood"
                          value={consultForm.name}
                          onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
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
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Country of Residence *</label>
                        <select
                          value={consultForm.country}
                          onChange={(e) => setConsultForm({ ...consultForm, country: e.target.value })}
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
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Other Country">Other Country</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="yourname@domain.com"
                          value={consultForm.email}
                          onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
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
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={consultForm.phone}
                          onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
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
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Your Local Time Zone</label>
                        <select
                          value={consultForm.timezone}
                          onChange={(e) => setConsultForm({ ...consultForm, timezone: e.target.value })}
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
                          <option value="Eastern Standard Time (EST)">Eastern Time (New York, Toronto)</option>
                          <option value="Pacific Standard Time (PST)">Pacific Time (Los Angeles, Vancouver)</option>
                          <option value="Central Standard Time (CST)">Central Time (Chicago, Dallas)</option>
                          <option value="Greenwich Mean Time (GMT / BST)">UK Time (London)</option>
                          <option value="Gulf Standard Time (GST)">Gulf Time (Dubai, Abu Dhabi)</option>
                          <option value="Australian Eastern Time (AEST)">Sydney / Melbourne</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Project of Interest</label>
                        <select
                          value={consultForm.preferredProject}
                          onChange={(e) => setConsultForm({ ...consultForm, preferredProject: e.target.value })}
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
                          <option value="Act Vertica (Gulshan 2)">Act Vertica (Gulshan 2)</option>
                          <option value="Act Sovereign (Baridhara Diplomatic Zone)">Act Sovereign (Baridhara Diplomatic Zone)</option>
                          <option value="Act Heights (Uttara Sector 3)">Act Heights (Uttara Sector 3)</option>
                          <option value="Act Luminance (Bashundhara R/A)">Act Luminance (Bashundhara R/A)</option>
                          <option value="General Dhaka Portfolio Overview">General Dhaka Portfolio Overview</option>
                        </select>
                      </div>
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
                      {loading ? 'Scheduling Session...' : 'Confirm Overseas Video Consultation'}
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
