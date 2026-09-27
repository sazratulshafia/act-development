'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  PhoneCall, 
  MapPin, 
  Menu, 
  X, 
  Calendar, 
  Search, 
  ArrowRight, 
  Sparkles,
  Layers,
  Building,
  ShieldCheck,
  Globe
} from 'lucide-react';
import ScheduleModal from './ScheduleModal';

type ActiveMenu = 'buy' | 'rent' | 'projects' | 'land' | 'resources' | null;

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header 
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          height: '76px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div 
          className="container-luxury" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            width: '100%' 
          }}
        >
          {/* Official Brand Logo */}
          <Link 
            href="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              textDecoration: 'none' 
            }}
          >
            <div style={{ position: 'relative', width: '50px', height: '48px', flexShrink: 0 }}>
              <Image 
                src="/images/brand/act-official-logo.png" 
                alt="Act Development" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 700, 
                  fontSize: '21px', 
                  color: '#111827',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15
                }}>
                  Act <span style={{ color: '#e60023' }}>Development</span>
                </span>
              </div>
              <span style={{ 
                fontSize: '9.5px', 
                fontWeight: 700, 
                letterSpacing: '0.18em', 
                textTransform: 'uppercase', 
                color: '#6b7280' 
              }}>
                Real Estate • Dhaka
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Dropdown Carets */}
          <nav 
            className="header-desktop-nav"
            style={{ 
              alignItems: 'center', 
              gap: '6px' 
            }} 
          >
            {/* 1. Buy Property */}
            <button
              onClick={() => setActiveMenu(activeMenu === 'buy' ? null : 'buy')}
              onMouseEnter={() => setActiveMenu('buy')}
              className={`nav-tab-item ${activeMenu === 'buy' ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 14px',
                fontSize: '15px',
                fontWeight: 600,
                color: activeMenu === 'buy' ? '#e60023' : '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <span>Buy Property</span>
              <ChevronDown 
                size={15} 
                style={{ 
                  transition: 'transform 0.2s ease',
                  transform: activeMenu === 'buy' ? 'rotate(180deg)' : 'rotate(0)' 
                }} 
              />
              {activeMenu === 'buy' && (
                <div style={{
                  position: 'absolute',
                  bottom: '-19px',
                  left: '14px',
                  right: '14px',
                  height: '3px',
                  backgroundColor: '#e60023',
                  borderRadius: '2px 2px 0 0'
                }} />
              )}
            </button>

            {/* 2. Rent (as highlighted in screenshot!) */}
            <button
              onClick={() => setActiveMenu(activeMenu === 'rent' ? null : 'rent')}
              onMouseEnter={() => setActiveMenu('rent')}
              className={`nav-tab-item ${activeMenu === 'rent' ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 14px',
                fontSize: '15px',
                fontWeight: 600,
                color: activeMenu === 'rent' ? '#e60023' : '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <span style={{ color: activeMenu === 'rent' ? '#e60023' : '#1f2937' }}>Rent</span>
              <ChevronDown 
                size={15} 
                style={{ 
                  transition: 'transform 0.2s ease',
                  transform: activeMenu === 'rent' ? 'rotate(180deg)' : 'rotate(0)',
                  color: activeMenu === 'rent' ? '#e60023' : '#6b7280'
                }} 
              />
              {activeMenu === 'rent' && (
                <div style={{
                  position: 'absolute',
                  bottom: '-19px',
                  left: '14px',
                  right: '14px',
                  height: '3px',
                  backgroundColor: '#e60023',
                  borderRadius: '2px 2px 0 0'
                }} />
              )}
            </button>

            {/* 3. Projects */}
            <button
              onClick={() => setActiveMenu(activeMenu === 'projects' ? null : 'projects')}
              onMouseEnter={() => setActiveMenu('projects')}
              className={`nav-tab-item ${activeMenu === 'projects' ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 14px',
                fontSize: '15px',
                fontWeight: 600,
                color: activeMenu === 'projects' ? '#e60023' : '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <span>Projects</span>
              <ChevronDown 
                size={15} 
                style={{ 
                  transition: 'transform 0.2s ease',
                  transform: activeMenu === 'projects' ? 'rotate(180deg)' : 'rotate(0)' 
                }} 
              />
              {activeMenu === 'projects' && (
                <div style={{
                  position: 'absolute',
                  bottom: '-19px',
                  left: '14px',
                  right: '14px',
                  height: '3px',
                  backgroundColor: '#e60023',
                  borderRadius: '2px 2px 0 0'
                }} />
              )}
            </button>

            {/* 4. Land & Plots */}
            <button
              onClick={() => setActiveMenu(activeMenu === 'land' ? null : 'land')}
              onMouseEnter={() => setActiveMenu('land')}
              className={`nav-tab-item ${activeMenu === 'land' ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 14px',
                fontSize: '15px',
                fontWeight: 600,
                color: activeMenu === 'land' ? '#e60023' : '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <span>Land & Plots</span>
              <ChevronDown 
                size={15} 
                style={{ 
                  transition: 'transform 0.2s ease',
                  transform: activeMenu === 'land' ? 'rotate(180deg)' : 'rotate(0)' 
                }} 
              />
              {activeMenu === 'land' && (
                <div style={{
                  position: 'absolute',
                  bottom: '-19px',
                  left: '14px',
                  right: '14px',
                  height: '3px',
                  backgroundColor: '#e60023',
                  borderRadius: '2px 2px 0 0'
                }} />
              )}
            </button>

            {/* 5. Resources */}
            <button
              onClick={() => setActiveMenu(activeMenu === 'resources' ? null : 'resources')}
              onMouseEnter={() => setActiveMenu('resources')}
              className={`nav-tab-item ${activeMenu === 'resources' ? 'active' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 14px',
                fontSize: '15px',
                fontWeight: 600,
                color: activeMenu === 'resources' ? '#e60023' : '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <span>Resources</span>
              <ChevronDown 
                size={15} 
                style={{ 
                  transition: 'transform 0.2s ease',
                  transform: activeMenu === 'resources' ? 'rotate(180deg)' : 'rotate(0)' 
                }} 
              />
              {activeMenu === 'resources' && (
                <div style={{
                  position: 'absolute',
                  bottom: '-19px',
                  left: '14px',
                  right: '14px',
                  height: '3px',
                  backgroundColor: '#e60023',
                  borderRadius: '2px 2px 0 0'
                }} />
              )}
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Phone hotline */}
            <a 
              href="tel:16760" 
              className="header-desktop-hotline"
              style={{ 
                alignItems: 'center', 
                gap: '6px', 
                textDecoration: 'none', 
                color: '#111827',
                fontSize: '14px',
                fontWeight: 700 
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#fff0f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e60023',
              }}>
                <PhoneCall size={14} />
              </div>
              <span>16760</span>
            </a>

            {/* Landowner / Private Viewing Red Button */}
            <button
              onClick={() => setIsScheduleOpen(true)}
              className="btn-red header-desktop-cta"
              style={{
                padding: '10px 18px',
                fontSize: '13px',
              }}
            >
              <Calendar size={14} />
              <span>Book Viewing</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="header-mobile-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                backgroundColor: '#f8fafc',
                color: '#111827',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MEGA MENU FLYOUT DROPDOWN (Matches Screenshot Layout & Columns)          */}
        {/* ========================================================================= */}
        {activeMenu && (
          <div
            onMouseLeave={() => setActiveMenu(null)}
            style={{
              position: 'absolute',
              top: '76px',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              borderBottom: '1px solid #e5e7eb',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
              padding: '32px 0 36px',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <div className="container-luxury">
              {/* === MEGA MENU VARIANT: RENT (Matches exact user screenshot) === */}
              {activeMenu === 'rent' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 1.2fr 2fr',
                  gap: '28px',
                  alignItems: 'start'
                }}>
                  {/* Column 1: RESIDENTIAL RENT */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Residential Rent
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/projects" className="mega-menu-link">1 BHK Flats</Link>
                      <Link href="/projects" className="mega-menu-link">2 BHK Flats</Link>
                      <Link href="/projects" className="mega-menu-link">3 BHK Flats</Link>
                      <Link href="/projects" className="mega-menu-link">Furnished Apartments</Link>
                      <Link href="/projects" className="mega-menu-link">Shared Rooms & Studios</Link>
                    </div>
                  </div>

                  {/* Column 2: COMMERCIAL RENT */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Commercial Rent
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/projects" className="mega-menu-link">Office Floors</Link>
                      <Link href="/projects" className="mega-menu-link">Co-working Spaces</Link>
                      <Link href="/projects" className="mega-menu-link">Shop Rentals & Retail</Link>
                      <Link href="/projects" className="mega-menu-link">Godown & Storage</Link>
                    </div>
                  </div>

                  {/* Column 3: SHORT TERM */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Short Term
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/projects" className="mega-menu-link">Daily Rentals</Link>
                      <Link href="/projects" className="mega-menu-link">Serviced Apartments</Link>
                      <Link href="/projects" className="mega-menu-link">Guest Houses</Link>
                    </div>
                  </div>

                  {/* Column 4: FEATURED CARD WITH RED "HOT DEAL" BADGE */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ position: 'relative', height: '150px', width: '100%' }}>
                      <Image
                        src="/images/projects/act-vertica.jpg"
                        alt="Gulshan 2 Corporate Suite"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      {/* Red HOT DEAL Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: '#e60023',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 6px rgba(230,0,35,0.4)',
                        textTransform: 'uppercase'
                      }}>
                        HOT DEAL
                      </div>
                    </div>

                    <div style={{ padding: '16px 20px 20px' }}>
                      <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', color: '#111827', fontWeight: 700, marginBottom: '6px' }}>
                        Gulshan 2 Corporate Suite
                      </h5>
                      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '14px', lineHeight: 1.5 }}>
                        Fully furnished luxury offices — flexible monthly & annual diplomatic lease.
                      </p>
                      <Link 
                        href="/projects/act-vertica-gulshan" 
                        style={{ 
                          color: '#e60023', 
                          fontSize: '13px', 
                          fontWeight: 700, 
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>View Details</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* === MEGA MENU VARIANT: BUY PROPERTY === */}
              {activeMenu === 'buy' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 1.2fr 2fr',
                  gap: '28px',
                  alignItems: 'start'
                }}>
                  {/* Column 1 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Residential Buy
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/projects" className="mega-menu-link">3 BHK Luxury Flats</Link>
                      <Link href="/projects" className="mega-menu-link">4 BHK Signature Suites</Link>
                      <Link href="/projects" className="mega-menu-link">Duplex Penthouses</Link>
                      <Link href="/projects" className="mega-menu-link">Single-Unit Floorplates</Link>
                      <Link href="/projects" className="mega-menu-link">Ready to Handover</Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Prime Enclaves
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/projects" className="mega-menu-link">Gulshan 1 & 2</Link>
                      <Link href="/projects" className="mega-menu-link">Baridhara Diplomatic Zone</Link>
                      <Link href="/projects" className="mega-menu-link">Uttara Model Town</Link>
                      <Link href="/projects" className="mega-menu-link">Bashundhara R/A</Link>
                      <Link href="/projects" className="mega-menu-link">Dhanmondi Lakeside</Link>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Investment Type
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/nrb" className="mega-menu-link">NRB Expat Portfolio</Link>
                      <Link href="/projects" className="mega-menu-link">High Rental Yield</Link>
                      <Link href="/projects" className="mega-menu-link">Pre-Launch Upcoming</Link>
                      <Link href="/projects" className="mega-menu-link">100% RAJUK Sanctioned</Link>
                    </div>
                  </div>

                  {/* Column 4: FEATURED CARD */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                  }}>
                    <div style={{ position: 'relative', height: '150px', width: '100%' }}>
                      <Image
                        src="/images/projects/act-sovereign.jpg"
                        alt="Act Sovereign Baridhara"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: '#e60023',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 6px rgba(230,0,35,0.4)',
                        textTransform: 'uppercase'
                      }}>
                        READY NOW
                      </div>
                    </div>
                    <div style={{ padding: '16px 20px 20px' }}>
                      <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', color: '#111827', fontWeight: 700, marginBottom: '6px' }}>
                        Act Sovereign • Baridhara
                      </h5>
                      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '14px', lineHeight: 1.5 }}>
                        5,100 sft lakeside residence with private rooftop pool. Diplomatic zone occupancy.
                      </p>
                      <Link 
                        href="/projects/act-sovereign-baridhara" 
                        style={{ 
                          color: '#e60023', 
                          fontSize: '13px', 
                          fontWeight: 700, 
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>View Details</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* === MEGA MENU VARIANT: PROJECTS === */}
              {activeMenu === 'projects' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 1.2fr 2fr',
                  gap: '28px',
                  alignItems: 'start'
                }}>
                  {/* Column 1 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Ongoing Landmarks
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/projects/act-heights-uttara" className="mega-menu-link">Act Heights (Uttara Sec 3)</Link>
                      <Link href="/projects/act-vertica-gulshan" className="mega-menu-link">Act Vertica (Gulshan 2)</Link>
                      <Link href="/projects/act-luminance-bashundhara" className="mega-menu-link">Act Luminance (Bashundhara)</Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Completed & Ready
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/projects/act-sovereign-baridhara" className="mega-menu-link">Act Sovereign (Baridhara)</Link>
                      <Link href="/projects" className="mega-menu-link">Diplomatic Suites Archive</Link>
                      <Link href="/projects" className="mega-menu-link">Handed Over Residences</Link>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Architecture & Lab
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/construction-tracker" className="mega-menu-link">Live Milestone Tracker</Link>
                      <Link href="/construction-tracker" className="mega-menu-link">5,000+ PSI Concrete Tests</Link>
                      <Link href="/construction-tracker" className="mega-menu-link">BNBC Zone-2 Seismic Code</Link>
                    </div>
                  </div>

                  {/* Column 4: FEATURED CARD */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                  }}>
                    <div style={{ position: 'relative', height: '150px', width: '100%' }}>
                      <Image
                        src="/images/projects/act-uttara.jpg"
                        alt="Act Heights Uttara"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: '#e60023',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 6px rgba(230,0,35,0.4)',
                        textTransform: 'uppercase'
                      }}>
                        FEATURED
                      </div>
                    </div>
                    <div style={{ padding: '16px 20px 20px' }}>
                      <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', color: '#111827', fontWeight: 700, marginBottom: '6px' }}>
                        Act Heights • Uttara Sector 3
                      </h5>
                      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '14px', lineHeight: 1.5 }}>
                        Boutique single unit per floor. 7.5 Katha corner plot facing serene avenue.
                      </p>
                      <Link 
                        href="/projects/act-heights-uttara" 
                        style={{ 
                          color: '#e60023', 
                          fontSize: '13px', 
                          fontWeight: 700, 
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>View Details</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* === MEGA MENU VARIANT: LAND & PLOTS === */}
              {activeMenu === 'land' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 1.2fr 2fr',
                  gap: '28px',
                  alignItems: 'start'
                }}>
                  {/* Column 1 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Landowner JV
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/landowners" className="mega-menu-link">50:50 Transparent Sharing</Link>
                      <Link href="/landowners" className="mega-menu-link">Instant FAR Calculator</Link>
                      <Link href="/landowners" className="mega-menu-link">Punctual Handover Penalty</Link>
                      <Link href="/landowners" className="mega-menu-link">Zero Subcontracting</Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Wanted Plot Enclaves
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/landowners" className="mega-menu-link">Gulshan 1 & 2 Plots</Link>
                      <Link href="/landowners" className="mega-menu-link">Banani & DOHS</Link>
                      <Link href="/landowners" className="mega-menu-link">Baridhara Diplomatic Zone</Link>
                      <Link href="/landowners" className="mega-menu-link">Uttara & Bashundhara R/A</Link>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Legal & Technical
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/landowners" className="mega-menu-link">RAJUK Approval Handling</Link>
                      <Link href="/landowners" className="mega-menu-link">Sub-soil Boring Test</Link>
                      <Link href="/landowners" className="mega-menu-link">10-Year Warranty Deed</Link>
                    </div>
                  </div>

                  {/* Column 4: FEATURED CARD */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                  }}>
                    <div style={{ position: 'relative', height: '150px', width: '100%' }}>
                      <Image
                        src="/images/brand/act-banner-cover.png"
                        alt="Landowner Partnership"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: '#e60023',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 6px rgba(230,0,35,0.4)',
                        textTransform: 'uppercase'
                      }}>
                        JV PROPOSAL
                      </div>
                    </div>
                    <div style={{ padding: '16px 20px 20px' }}>
                      <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', color: '#111827', fontWeight: 700, marginBottom: '6px' }}>
                        Partner Your Ancestral Plot
                      </h5>
                      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '14px', lineHeight: 1.5 }}>
                        Maximize your FAR yield with Dhaka’s most transparent luxury developer.
                      </p>
                      <Link 
                        href="/landowners" 
                        style={{ 
                          color: '#e60023', 
                          fontSize: '13px', 
                          fontWeight: 700, 
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>Calculate FAR & Submit</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* === MEGA MENU VARIANT: RESOURCES === */}
              {activeMenu === 'resources' && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.2fr 1.2fr 2fr',
                  gap: '28px',
                  alignItems: 'start'
                }}>
                  {/* Column 1 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Investment Suite
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/nrb" className="mega-menu-link">NRB Expatriate Wing</Link>
                      <Link href="/nrb" className="mega-menu-link">Bangladesh Bank Remittance</Link>
                      <Link href="/nrb" className="mega-menu-link">Consular PoA Guidance</Link>
                      <Link href="/#calculator" className="mega-menu-link">Home Loan EMI Calculator</Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Quality & Safety
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/construction-tracker" className="mega-menu-link">Materials Testing Lab</Link>
                      <Link href="/construction-tracker" className="mega-menu-link">5,000+ PSI Concrete Audits</Link>
                      <Link href="/construction-tracker" className="mega-menu-link">72.5 Grade Rebar Reports</Link>
                      <Link href="/about" className="mega-menu-link">BNBC Zone-2 Seismic Mandate</Link>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="mega-menu-column" style={{ borderRight: '1px solid #f1f3f5', paddingRight: '20px' }}>
                    <h4 style={{ color: '#e60023', fontWeight: 700, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Company
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Link href="/about" className="mega-menu-link">Corporate Heritage</Link>
                      <Link href="/about" className="mega-menu-link">Leadership & Architects</Link>
                      <Link href="/contact" className="mega-menu-link">Experience Center</Link>
                      <Link href="/contact" className="mega-menu-link">Contact & Hotline 16760</Link>
                    </div>
                  </div>

                  {/* Column 4: FEATURED CARD */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                  }}>
                    <div style={{ position: 'relative', height: '150px', width: '100%' }}>
                      <Image
                        src="/images/projects/act-luminance.jpg"
                        alt="NRB Investment Concierge"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: '#e60023',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 6px rgba(230,0,35,0.4)',
                        textTransform: 'uppercase'
                      }}>
                        GLOBAL DESK
                      </div>
                    </div>
                    <div style={{ padding: '16px 20px 20px' }}>
                      <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', color: '#111827', fontWeight: 700, marginBottom: '6px' }}>
                        NRB Virtual Video Consultation
                      </h5>
                      <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '14px', lineHeight: 1.5 }}>
                        Schedule a 1-on-1 Zoom or Google Meet briefing adjusted to your overseas time zone.
                      </p>
                      <Link 
                        href="/nrb" 
                        style={{ 
                          color: '#e60023', 
                          fontSize: '13px', 
                          fontWeight: 700, 
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>Schedule Briefing</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="header-mobile-drawer"
          style={{
          position: 'fixed',
          top: '76px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ffffff',
          zIndex: 90,
          padding: '24px',
          overflowY: 'auto',
          borderTop: '1px solid #e5e7eb',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#e60023', marginBottom: '8px' }}>
                Residences & Projects
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/projects" style={{ fontSize: '16px', color: '#111827', textDecoration: 'none', fontWeight: 600 }}>All Residences Catalog</Link>
                <Link href="/projects/act-vertica-gulshan" style={{ fontSize: '14px', color: '#4b5563', textDecoration: 'none' }}>Act Vertica (Gulshan 2)</Link>
                <Link href="/projects/act-sovereign-baridhara" style={{ fontSize: '14px', color: '#4b5563', textDecoration: 'none' }}>Act Sovereign (Baridhara)</Link>
                <Link href="/projects/act-heights-uttara" style={{ fontSize: '14px', color: '#4b5563', textDecoration: 'none' }}>Act Heights (Uttara)</Link>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f3f5' }} />

            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#e60023', marginBottom: '8px' }}>
                Specialized Portals
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/landowners" style={{ fontSize: '15px', color: '#111827', textDecoration: 'none', fontWeight: 600 }}>Landowner Joint Venture Portal</Link>
                <Link href="/nrb" style={{ fontSize: '15px', color: '#111827', textDecoration: 'none', fontWeight: 600 }}>NRB Expatriate Wing</Link>
                <Link href="/construction-tracker" style={{ fontSize: '15px', color: '#111827', textDecoration: 'none', fontWeight: 600 }}>Live Construction & Quality Lab</Link>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f3f5' }} />

            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#e60023', marginBottom: '8px' }}>
                Company & Contact
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/about" style={{ fontSize: '15px', color: '#111827', textDecoration: 'none' }}>About Act Development</Link>
                <Link href="/contact" style={{ fontSize: '15px', color: '#111827', textDecoration: 'none' }}>Experience Center & Concierge</Link>
                <a href="tel:16760" style={{ fontSize: '15px', color: '#e60023', fontWeight: 700, textDecoration: 'none' }}>Direct Hotline: 16760</a>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsScheduleOpen(true);
              }}
              className="btn-red"
              style={{ width: '100%', marginTop: '16px', padding: '14px' }}
            >
              Book Private Viewing
            </button>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </>
  );
}
