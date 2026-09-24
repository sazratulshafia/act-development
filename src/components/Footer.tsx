import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Shield, CheckCircle, ArrowRight, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e2e8f0', position: 'relative' }}>
      
      {/* Top Credentials & Badges Bar */}
      <div style={{ borderBottom: '1px solid #e9ecef', padding: '24px 0', backgroundColor: '#ffffff' }}>
        <div className="container-luxury" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fff0f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e60023' }}>
              <Shield size={20} />
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#111827' }}>REHAB Member Developer</div>
              <div style={{ fontSize: '11px', color: '#6b7280' }}>Real Estate & Housing Association of Bangladesh</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
              <CheckCircle size={20} />
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#111827' }}>100% RAJUK Sanctioned</div>
              <div style={{ fontSize: '11px', color: '#6b7280' }}>Strict Rajdhani Unnayan Kartripakkha Approvals</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fff0f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e60023' }}>
              <Award size={20} />
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#111827' }}>BNBC Zone-2 Seismic Code</div>
              <div style={{ fontSize: '11px', color: '#6b7280' }}>In-house concrete & structural testing laboratory</div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-luxury" style={{ padding: '70px 20px 50px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px' }}>
          
          {/* Col 1: Brand & Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative', width: '44px', height: '42px', flexShrink: 0 }}>
                <Image
                  src="/images/brand/act-official-logo.png"
                  alt="Act Development"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#111827' }}>
                Act <span style={{ color: '#e60023' }}>Development</span>
              </span>
            </div>

            <p style={{ color: '#4b5563', fontSize: '13.5px', lineHeight: '1.7', margin: 0 }}>
              Act Development is a premier luxury developer in Bangladesh, creating sculptural, sustainable architectural landmarks across Gulshan, Baridhara, Uttara, and Bashundhara.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: '#fee2e2',
                color: '#b91c1c',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                10-Year Post-Handover Care
              </span>
            </div>
          </div>

          {/* Col 2: Portfolio & Enclaves */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#111827', marginBottom: '18px', fontWeight: 700 }}>
              Signature Portfolio
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/projects/act-vertica-gulshan" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  Act Vertica — Gulshan 2
                </Link>
              </li>
              <li>
                <Link href="/projects/act-sovereign-baridhara" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  Act Sovereign — Baridhara Diplomatic Zone
                </Link>
              </li>
              <li>
                <Link href="/projects/act-heights-uttara" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  Act Heights — Uttara Sector 3
                </Link>
              </li>
              <li>
                <Link href="/projects/act-luminance-bashundhara" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  Act Luminance — Bashundhara R/A
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ color: '#e60023', fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
                  View All Residences <ArrowRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Portals */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#111827', marginBottom: '18px', fontWeight: 700 }}>
              Specialized Portals
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/landowners" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  Landowner Joint Ventures (50:50)
                </Link>
              </li>
              <li>
                <Link href="/nrb" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  NRB Expatriate Wing & Remittance
                </Link>
              </li>
              <li>
                <Link href="/construction-tracker" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  Live Materials & Testing Lab
                </Link>
              </li>
              <li>
                <Link href="/#calculator" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  Bangladesh Home Loan & EMI Tool
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: '#4b5563', fontSize: '13.5px', textDecoration: 'none' }}>
                  Corporate Heritage & Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#111827', marginBottom: '18px', fontWeight: 700 }}>
              Dhaka Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#4b5563' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} style={{ color: '#e60023', flexShrink: 0, marginTop: '2px' }} />
                <span>Act Tower, Level 8, Plot 14, Road 11, Banani / Gulshan 2, Dhaka 1213</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#e60023', flexShrink: 0 }} />
                <a href="tel:16760" style={{ color: '#111827', textDecoration: 'none', fontWeight: 700 }}>Hotline: 16760 / +880 1700-000000</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#e60023', flexShrink: 0 }} />
                <a href="mailto:concierge@actdevelopmentbd.com" style={{ color: '#4b5563', textDecoration: 'none' }}>concierge@actdevelopmentbd.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #e5e7eb', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: '#6b7280' }}>
          <div>
            © {new Date().getFullYear()} Act Development Real Estate. All rights reserved. Registered under REHAB & RAJUK.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/about" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/about" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/contact" style={{ color: '#6b7280', textDecoration: 'none' }}>Experience Center</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
