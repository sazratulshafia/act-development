'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Sparkles, 
  Calendar, 
  ChevronRight, 
  Building2, 
  Award,
  Globe2,
  HardHat,
  SlidersHorizontal,
  PhoneCall,
  Search,
  Check
} from 'lucide-react';
import { PROJECTS_DATA, LOCATIONS_DATA, TESTIMONIALS_DATA, Project } from '@/data/mockData';
import ThreeCanvas from '@/components/ThreeCanvas';
import EmiCalculator from '@/components/EmiCalculator';
import ScheduleModal from '@/components/ScheduleModal';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ongoing' | 'ready'>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProjectSlug, setModalProjectSlug] = useState<string | undefined>(undefined);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesStatus = activeFilter === 'all' || project.status === activeFilter;
    const matchesLocation = selectedLocation === 'all' || project.locationId === selectedLocation;
    const matchesSearch = searchKeyword === '' || 
      project.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      project.locationName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      project.address.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesStatus && matchesLocation && matchesSearch;
  });

  const openScheduleForProject = (slug?: string) => {
    setModalProjectSlug(slug);
    setIsModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff', color: '#111827' }}>
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Clean White & Soft Gray with Red Accents)                */}
      {/* ========================================================================= */}
      <section 
        style={{
          position: 'relative',
          paddingTop: '120px',
          paddingBottom: '80px',
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div className="container-luxury" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Pre-title Badge */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '6px 16px', 
              borderRadius: '999px', 
              background: '#fff0f2', 
              border: '1px solid #fecdd3', 
              marginBottom: '20px' 
            }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: '#e60023' 
              }} />
              <span style={{ 
                fontSize: '12px', 
                fontWeight: 700, 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                color: '#e60023' 
              }}>
                Dhaka Premier Luxury Real Estate • REHAB & RAJUK Certified
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5.5vw, 64px)', 
                fontWeight: 700, 
                lineHeight: 1.15, 
                color: '#111827',
                marginBottom: '20px',
                letterSpacing: '-0.02em'
              }}
            >
              Architectural Sanctuaries Crafted for <br />
              <span style={{ color: '#e60023', fontStyle: 'italic' }}>
                Enduring Family Prestige
              </span>
            </h1>

            {/* Sub-headline */}
            <p 
              style={{ 
                fontSize: 'clamp(16px, 1.8vw, 19px)', 
                color: '#4b5563', 
                lineHeight: 1.7, 
                maxWidth: '780px', 
                margin: '0 auto 36px' 
              }}
            >
              Discover bespoke single-unit residences and penthouses across Gulshan 2, Baridhara Diplomatic Zone, Uttara, and Bashundhara. Built to BNBC Zone-2 seismic standards with transparent joint ventures.
            </p>

            {/* Integrated Real Estate Search Box */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0',
              maxWidth: '820px',
              margin: '0 auto 40px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
            }}>
              {/* Location Select */}
              <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <MapPin size={18} style={{ color: '#e60023' }} />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    fontSize: '14px',
                    color: '#1f2937',
                    fontWeight: 600,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="all">All Enclaves (Dhaka)</option>
                  {LOCATIONS_DATA.map((loc) => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>

              {/* Status Select */}
              <div style={{ flex: '1 1 160px', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <Building2 size={18} style={{ color: '#e60023' }} />
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value as any)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    fontSize: '14px',
                    color: '#1f2937',
                    fontWeight: 600,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="all">Any Status</option>
                  <option value="ongoing">Under Construction</option>
                  <option value="ready">Ready to Handover</option>
                </select>
              </div>

              {/* Keyword input */}
              <div style={{ flex: '2 1 220px', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <Search size={18} style={{ color: '#9ca3af' }} />
                <input
                  type="text"
                  placeholder="Road, bedroom, or plot size..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    fontSize: '14px',
                    color: '#111827',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Search Button */}
              <Link
                href="/projects"
                className="btn-red"
                style={{ padding: '12px 24px', flexShrink: 0 }}
              >
                <span>Find Homes</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
              gap: '20px',
              paddingTop: '24px',
              borderTop: '1px solid #e2e8f0',
              maxWidth: '740px',
              margin: '0 auto'
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 700, color: '#e60023' }}>100%</div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>RAJUK Sanctioned</div>
              </div>
              <div style={{ borderLeft: '1px solid #e5e7eb' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 700, color: '#111827' }}>Zone-2</div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>BNBC Seismic Code</div>
              </div>
              <div style={{ borderLeft: '1px solid #e5e7eb' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 700, color: '#111827' }}>5,000+</div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>PSI Concrete Lab</div>
              </div>
              <div style={{ borderLeft: '1px solid #e5e7eb' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 700, color: '#e60023' }}>10-Year</div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>Structural Care</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 3D ARCHITECTURAL VISUALIZER SHOWCASE                                   */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#ffffff', padding: '80px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-luxury">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'center' }}>
            
            <div style={{ gridColumn: 'span 12' }} className="lg:col-span-5">
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#e60023' }}>
                Interactive 3D Masterpiece
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#111827', marginTop: '8px', marginBottom: '20px', lineHeight: 1.2 }}>
                Sculpted Glass & Fair-Faced Structural Tower
              </h2>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
                Experience the structural anatomy of Act Development’s high-rise architecture. Drag and rotate the 3D model to inspect our cantilevered double-height balconies, illuminated sky villas, and gold solar louvers designed for natural Dhaka cross-ventilation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'Single suite per floor for absolute acoustic privacy',
                  'Sound-insulated Schuco double-glazed facade',
                  'High-speed Mitsubishi elevators with emergency ARD',
                  'Landscaped rooftop infinity pool & sunset lounge'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#fff0f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e60023', flexShrink: 0 }}>
                      <Check size={12} />
                    </div>
                    <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openScheduleForProject('act-vertica-gulshan')}
                className="btn-red"
              >
                <Calendar size={16} />
                <span>Book 3D Model Private Viewing</span>
              </button>
            </div>

            <div style={{ gridColumn: 'span 12' }} className="lg:col-span-7">
              <div style={{
                backgroundColor: '#0f172a',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                border: '1px solid #334155'
              }}>
                <ThreeCanvas />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRIME ENCLAVES SECTION                                                 */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-luxury">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#e60023' }}>
              Strategic Locations
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: '#111827', marginTop: '8px' }}>
              Dhaka’s Most Coveted Enclaves
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {LOCATIONS_DATA.map((loc) => (
              <div
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                style={{
                  backgroundColor: selectedLocation === loc.id ? '#fff0f2' : '#ffffff',
                  border: selectedLocation === loc.id ? '2px solid #e60023' : '1px solid #e5e7eb',
                  borderRadius: '14px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: selectedLocation === loc.id ? '#e60023' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: selectedLocation === loc.id ? '#fff' : '#e60023' }}>
                    <MapPin size={20} />
                  </div>
                  <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 600 }}>{loc.district}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#111827', marginBottom: '8px' }}>
                  {loc.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  {loc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CURATED PORTFOLIO GRID                                                 */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#ffffff', padding: '90px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-luxury">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#e60023' }}>
                Featured Developments
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: '#111827', marginTop: '8px' }}>
                Architectural Landmarks
              </h2>
            </div>

            {/* Filter buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { label: 'All Projects', value: 'all' },
                { label: 'Under Construction', value: 'ongoing' },
                { label: 'Ready for Handover', value: 'ready' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value as any)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '999px',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: activeFilter === tab.value ? '1px solid #e60023' : '1px solid #e5e7eb',
                    backgroundColor: activeFilter === tab.value ? '#e60023' : '#f8fafc',
                    color: activeFilter === tab.value ? '#ffffff' : '#4b5563',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="luxury-card group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '16px',
                }}
              >
                {/* Image Container */}
                <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-105"
                  />
                  
                  {/* Top Badges */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{
                      backgroundColor: project.status === 'ready' ? '#16a34a' : '#e60023',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                    }}>
                      {project.status === 'ready' ? 'Ready to Handover' : `Ongoing • ${project.currentConstructionProgress}%`}
                    </div>

                    {project.isFlagship && (
                      <div style={{
                        backgroundColor: '#111827',
                        color: '#ffffff',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '4px 8px',
                        borderRadius: '4px',
                      }}>
                        Flagship
                      </div>
                    )}
                  </div>

                  {/* Location label */}
                  <div style={{ position: 'absolute', bottom: '12px', left: '14px', backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} style={{ color: '#e60023' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#111827' }}>{project.locationName}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#111827', marginBottom: '6px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5, marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {project.tagline}
                  </p>

                  {/* Specs Pill Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e5e7eb', marginBottom: '20px' }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Plot Size</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginTop: '2px' }}>{project.landAreaKatha.toFixed(2)} Katha</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Unit Sizes</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginTop: '2px' }}>{project.sizeRangeSft}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Structure</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827', marginTop: '2px' }}>{project.buildingStoried}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Permit</div>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#e60023', marginTop: '2px' }}>{project.rajukApprovalNo.split('/')[0]}</div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Starting Price</div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#e60023' }}>
                        ৳{project.startingPriceBdt.toFixed(2)} Cr
                      </div>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-red"
                      style={{ padding: '8px 16px', fontSize: '13px', textDecoration: 'none' }}
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LANDOWNER JOINT VENTURE CALLOUT                                        */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-luxury">
          <div style={{
            backgroundColor: '#ffffff',
            border: '2px solid #fee2e2',
            borderRadius: '20px',
            padding: '48px 36px',
            boxShadow: '0 10px 30px rgba(230, 0, 35, 0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '36px',
            alignItems: 'center'
          }}>
            <div style={{ gridColumn: 'span 12' }} className="lg:col-span-8">
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#e60023' }}>
                Landowner Joint Venture Wing
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 36px)', color: '#111827', marginTop: '6px', marginBottom: '14px' }}>
                Partner Your Land With Dhaka’s Most Trusted Luxury Developer
              </h2>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                Transparent 50:50 sharing ratio, maximized RAJUK FAR utilization, zero contractor sub-letting, and a legally binding daily penalty guarantee for punctuality.
              </p>
            </div>

            <div style={{ gridColumn: 'span 12', display: 'flex', gap: '14px', flexWrap: 'wrap' }} className="lg:col-span-4 lg:justify-end">
              <Link href="/landowners" className="btn-red" style={{ padding: '14px 28px' }}>
                <span>Calculate Your FAR & Submit Plot</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BANGLADESH HOME LOAN & EMI CALCULATOR                                  */}
      {/* ========================================================================= */}
      <section id="calculator" style={{ backgroundColor: '#ffffff', padding: '90px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-luxury">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#e60023' }}>
              Financial Planning Tool
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', color: '#111827', marginTop: '8px' }}>
              Bangladesh Home Loan & EMI Calculator
            </h2>
            <p style={{ color: '#6b7280', fontSize: '15px', maxWidth: '640px', margin: '8px auto 0' }}>
              Calibrated in BDT Crores (৳ Cr) and Lakhs for primary private and commercial banks across Bangladesh (DBH, IDLC, BRAC Bank, Standard Chartered).
            </p>
          </div>

          <EmiCalculator />
        </div>
      </section>

      {/* Viewing Scheduler Modal */}
      <ScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProject={modalProjectSlug}
      />

    </div>
  );
}
