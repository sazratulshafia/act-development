import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Leaf, 
  Clock, 
  PhoneCall,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'About Act Development | Bangladesh Premier Luxury Real Estate',
  description: 'Act Development is Dhaka’s bespoke luxury real estate developer, engineering monuments of discretion and structural permanence across Gulshan, Baridhara, and Uttara.',
};

export default function AboutPage() {
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
              The Act Heritage & Vision
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
            The Pursuit of Discretion, Integrity & <br />
            <span style={{ color: '#e60023', fontStyle: 'italic' }}>
              Architectural Permanence
            </span>
          </h1>

          <p style={{ 
            maxWidth: '740px', 
            margin: '0 auto', 
            color: '#4b5563', 
            fontSize: '16px', 
            lineHeight: 1.8 
          }}>
            Act Development was founded on a singular premise: that true luxury in Dhaka is not mere cosmetic ornamentation, but the harmony of rigorous structural engineering, mindful environmental design, and absolute institutional integrity.
          </p>
        </div>
      </section>

      {/* Corporate Philosophy Narrative */}
      <section style={{ padding: '80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'center' }}>
          
          <div style={{ gridColumn: 'span 12' }} className="lg:col-span-6">
            <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
              Our Foundation
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#111827', marginTop: '6px', marginBottom: '20px' }}>
              Redefining Dhaka’s Skyline Through Craftsmanship
            </h2>
            <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
              In an era of rapid commoditization, Act Development curates a boutique portfolio of signature residential landmarks. We intentionally limit our active project count each year to ensure that our executive directors, chief structural engineers, and master craftsmen remain intimately involved with every foundation pour.
            </p>
            <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
              From the quiet lakeside boulevards of Baridhara Diplomatic Zone to the prime avenues of Gulshan 2 and Uttara, our residences feature expansive single-unit floor plates, acoustically insulated double-glazed envelopes, and earthquake-resistant BNBC Zone-2 structural framing.
            </p>

            <div style={{ display: 'flex', gap: '24px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
              <div>
                <div style={{ fontSize: '26px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>100%</div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>RAJUK Clearances</div>
              </div>
              <div style={{ width: '1px', backgroundColor: '#e5e7eb' }} />
              <div>
                <div style={{ fontSize: '26px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700 }}>10-Yr</div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Structural Guarantee</div>
              </div>
              <div style={{ width: '1px', backgroundColor: '#e5e7eb' }} />
              <div>
                <div style={{ fontSize: '26px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>REHAB</div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Member Developer</div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 12' }} className="lg:col-span-6">
            <div style={{ position: 'relative', height: '460px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <Image
                src="/images/projects/act-sovereign.jpg"
                alt="Act Sovereign Baridhara"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', padding: '16px 20px', borderRadius: '10px' }}>
                <div style={{ fontSize: '11px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Completed Masterpiece</div>
                <div style={{ fontSize: '17px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700 }}>Act Sovereign • Baridhara Diplomatic Zone</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pillars of Integrity */}
      <section style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
              The Act Distinction
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#111827', marginTop: '6px' }}>
              Four Pillars of Uncompromising Standards
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: ShieldCheck,
                title: 'BNBC Zone-2 Seismic Mandate',
                desc: 'All structural designs are vetted by leading structural engineering professors and modeled against peak ground acceleration (PGA) seismic simulations.',
              },
              {
                icon: Layers,
                title: 'Zero Contractor Sub-Letting',
                desc: 'We never outsource the structural superstructure to 3rd-party labour brokers. All pouring, shuttering, and reinforcement is supervised by our full-time site engineers.',
              },
              {
                icon: Clock,
                title: 'Contractual Punctuality',
                desc: 'Our joint-venture agreements and buyer deeds incorporate legally binding delay compensation clauses. Timeliness is a matter of corporate honour.',
              },
              {
                icon: Leaf,
                title: 'Eco-Mindful Architecture',
                desc: 'Rainwater retention tanks, thermal heat-reflective rooftop gardens, and high-efficiency VRF HVAC ducting reduce energy bills by up to 25%.',
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                    padding: '30px 24px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '10px', 
                    backgroundColor: '#fff0f2', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: '#e60023',
                    marginBottom: '18px'
                  }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#111827', marginBottom: '10px' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Corporate Leadership Team */}
      <section style={{ padding: '80px 24px 100px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
            Leadership & Governance
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#111827', marginTop: '6px' }}>
            Custodians of Quality
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {[
            {
              name: 'K. M. Ashraful Islam',
              role: 'Managing Director & Founder',
              bio: 'With over two decades of experience in real estate and infrastructure development across Bangladesh, guiding Act’s strategic commitment to uncompromised craftsmanship.',
            },
            {
              name: 'Engr. Syed Tanvir Ahmed, PEng.',
              role: 'Chief Structural Consultant',
              bio: 'Former BUET structural faculty consultant specializing in high-rise seismic wind analysis and BNBC Zone-2 foundation dynamics.',
            },
            {
              name: 'Ar. Nusrat Jahan Chowdhury',
              role: 'Principal Architect & Space Planner',
              bio: 'Award-winning architect recognized for bioclimatic residential facades, natural microclimate circulation, and understated Scandinavian-tropical minimalism.',
            },
            {
              name: 'Mahbubul Alam',
              role: 'Director, Landowner Relations & Legal',
              bio: 'Specialist in Dhaka cadastral laws, RAJUK FAR optimization studies, and equitable Joint Venture structuring with generational land-owning families.',
            },
          ].map((leader, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '28px 24px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#111827', marginBottom: '4px' }}>
                {leader.name}
              </h3>
              <div style={{ fontSize: '12px', color: '#e60023', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {leader.role}
              </div>
              <p style={{ color: '#4b5563', fontSize: '13.5px', lineHeight: 1.7, margin: 0 }}>
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
