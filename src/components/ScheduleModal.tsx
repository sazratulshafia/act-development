'use client';

import { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Building, Globe } from 'lucide-react';
import { PROJECTS_DATA } from '@/data/mockData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectSlug?: string;
  initialProject?: string;
}

export default function ScheduleModal({ isOpen, onClose, defaultProjectSlug, initialProject }: ScheduleModalProps) {
  const [selectedProject, setSelectedProject] = useState(initialProject || defaultProjectSlug || 'general');
  const [isNrb, setIsNrb] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate instant client response & lead registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '36px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f5f9',
            border: 'none',
            color: '#64748b',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e2e8f0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          /* Submission Success State */
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#fff0f2',
              color: '#e60023',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#111827', marginBottom: '10px' }}>
              Private Viewing Requested
            </h3>
            
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, marginBottom: '28px' }}>
              Thank you, <strong>{fullName}</strong>. Our Luxury Concierge Directorate has reserved your slot for <strong>{timeSlot}</strong>. We will coordinate via WhatsApp/phone at <strong>{phone}</strong>.
            </p>

            <button
              onClick={handleReset}
              className="btn-red"
              style={{ width: '100%', padding: '12px' }}
            >
              Done
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '11px', color: '#e60023', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Private Concierge
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#111827', marginTop: '4px' }}>
                Schedule a Private Viewing
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                Exclusive on-site walkthrough with our Chief Project Architect.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Project Select */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Select Development of Interest
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#111827',
                      fontSize: '13.5px',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="general">General Portfolio Consultation</option>
                    {PROJECTS_DATA.map((p) => (
                      <option key={p.id} value={p.slug}>
                        {p.title} — {p.locationName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Barrister / Engr. ..."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: '#111827',
                    fontSize: '13.5px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Contact Information */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 17..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#111827',
                      fontSize: '13.5px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#111827',
                      fontSize: '13.5px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
                  Preferred Time Slot
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {['11:00 AM', '03:00 PM', '05:30 PM'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      style={{
                        padding: '8px',
                        borderRadius: '6px',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        border: timeSlot === slot ? '1px solid #e60023' : '1px solid #cbd5e1',
                        backgroundColor: timeSlot === slot ? '#fff0f2' : '#f8fafc',
                        color: timeSlot === slot ? '#e60023' : '#475569',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-red"
                style={{
                  width: '100%',
                  padding: '13px',
                  fontSize: '14px',
                  marginTop: '8px',
                }}
              >
                {isSubmitting ? 'Confirming Reservation...' : 'Confirm Private Viewing'}
              </button>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
