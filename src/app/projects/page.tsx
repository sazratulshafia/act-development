'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Filter, 
  Search, 
  Calendar,
  Sparkles,
  Layers,
  PhoneCall
} from 'lucide-react';
import { PROJECTS_DATA, LOCATIONS_DATA } from '@/data/mockData';
import ScheduleModal from '@/components/ScheduleModal';

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string | undefined>(undefined);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      if (selectedStatus !== 'all' && project.status !== selectedStatus) {
        return false;
      }
      if (selectedLocation !== 'all' && project.locationId !== selectedLocation) {
        return false;
      }
      if (selectedType !== 'all' && project.type !== selectedType) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesLocation = project.locationName.toLowerCase().includes(query);
        const matchesAddress = project.address.toLowerCase().includes(query);
        const matchesTagline = project.tagline.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesAddress && !matchesTagline) {
          return false;
        }
      }
      return true;
    });
  }, [selectedStatus, selectedLocation, selectedType, searchQuery]);

  const formatPrice = (crores: number) => {
    if (currency === 'USD') {
      const usdMillions = (crores * 10000000) / (120 * 1000000);
      return `$${usdMillions.toFixed(2)}M USD`;
    }
    return `৳${crores.toFixed(2)} Cr BDT`;
  };

  const handleOpenSchedule = (projectTitle?: string) => {
    setSelectedProjectTitle(projectTitle);
    setIsScheduleOpen(true);
  };

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
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#e60023' }} />
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e60023', fontWeight: 700 }}>
              The Act Portfolio • Dhaka
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
            Architectural Sanctuaries <br />
            <span style={{ color: '#e60023', fontStyle: 'italic' }}>
              Built for Generations
            </span>
          </h1>

          <p style={{ 
            maxWidth: '680px', 
            margin: '0 auto', 
            color: '#4b5563', 
            fontSize: '16px', 
            lineHeight: 1.7 
          }}>
            Explore our signature residences across Gulshan, Baridhara Diplomatic Enclave, Uttara, and Bashundhara. Each engineered to strict BNBC Zone-2 seismic standards with RAJUK compliance.
          </p>

          {/* Quick Badges Strip */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '32px', 
            marginTop: '36px',
            paddingTop: '28px',
            borderTop: '1px solid #e2e8f0'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>100%</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>RAJUK Approved</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700 }}>Zone-2</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Seismic Engineered</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>10-Year</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Structural Care</div>
            </div>
          </div>

        </div>
      </section>

      {/* Filter and Control Bar */}
      <section style={{ 
        position: 'sticky', 
        top: '76px', 
        zIndex: 20, 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #e5e7eb',
        padding: '16px 24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            {/* Top row: Search + Currency */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
              
              {/* Search */}
              <div style={{ 
                position: 'relative', 
                flex: '1', 
                minWidth: '260px', 
                maxWidth: '460px' 
              }}>
                <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#e60023' }} />
                <input 
                  type="text"
                  placeholder="Search neighborhood, road, or project name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '10px 16px 10px 42px',
                    color: '#111827',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Currency Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Currency:</span>
                <div style={{ 
                  display: 'flex', 
                  backgroundColor: '#f1f5f9', 
                  border: '1px solid #cbd5e1', 
                  borderRadius: '6px', 
                  padding: '2px' 
                }}>
                  <button
                    onClick={() => setCurrency('BDT')}
                    style={{
                      padding: '4px 12px',
                      fontSize: '12px',
                      fontWeight: 700,
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currency === 'BDT' ? '#e60023' : 'transparent',
                      color: currency === 'BDT' ? '#ffffff' : '#64748b',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    BDT (৳)
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    style={{
                      padding: '4px 12px',
                      fontSize: '12px',
                      fontWeight: 700,
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: currency === 'USD' ? '#e60023' : 'transparent',
                      color: currency === 'USD' ? '#ffffff' : '#64748b',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom row: Filter chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
              
              {/* Status Filters */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '4px', fontWeight: 600 }}>Status:</span>
                {[
                  { label: 'All Projects', value: 'all' },
                  { label: 'Ongoing', value: 'ongoing' },
                  { label: 'Ready to Move', value: 'ready' },
                  { label: 'Upcoming', value: 'upcoming' },
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSelectedStatus(s.value)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      border: selectedStatus === s.value ? '1px solid #e60023' : '1px solid #cbd5e1',
                      backgroundColor: selectedStatus === s.value ? '#e60023' : '#f8fafc',
                      color: selectedStatus === s.value ? '#ffffff' : '#475569',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Location Select */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Location:</span>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    color: '#111827',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="all">All Prime Enclaves</option>
                  {LOCATIONS_DATA.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section style={{ padding: '60px 24px 100px', maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Results summary */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <p style={{ color: '#4b5563', fontSize: '14px' }}>
            Showing <strong style={{ color: '#111827' }}>{filteredProjects.length}</strong> signature {filteredProjects.length === 1 ? 'development' : 'developments'}
          </p>
          {(selectedStatus !== 'all' || selectedLocation !== 'all' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedStatus('all');
                setSelectedLocation('all');
                setSelectedType('all');
                setSearchQuery('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#e60023',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Project Cards */}
        {filteredProjects.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '80px 24px', 
            backgroundColor: '#f8fafc', 
            borderRadius: '16px',
            border: '1px solid #e2e8f0'
          }}>
            <Building2 size={48} style={{ color: '#e60023', margin: '0 auto 16px', opacity: 0.6 }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#111827', marginBottom: '8px' }}>
              No Residences Match Your Filter
            </h3>
            <p style={{ color: '#6b7280', fontSize: '14px', maxWidth: '420px', margin: '0 auto 24px' }}>
              Try adjusting your location or status filters, or speak with our concierge directly about upcoming off-market releases.
            </p>
            <button
              onClick={() => {
                setSelectedStatus('all');
                setSelectedLocation('all');
                setSearchQuery('');
              }}
              className="btn-red"
              style={{ padding: '10px 24px', fontSize: '13px' }}
            >
              View All Properties
            </button>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '32px' 
          }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="luxury-card group"
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image Container */}
                <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ 
                      objectFit: 'cover', 
                      transition: 'transform 0.5s ease' 
                    }}
                    className="group-hover:scale-105"
                  />

                  {/* Top Badges */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ 
                      padding: '4px 10px', 
                      borderRadius: '4px', 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase',
                      backgroundColor: project.status === 'ready' ? '#16a34a' : '#e60023',
                      color: '#ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
                    }}>
                      {project.status === 'ready' ? 'Ready to Handover' : `Ongoing • ${project.currentConstructionProgress}% Done`}
                    </div>

                    {project.isFlagship && (
                      <div style={{ 
                        padding: '4px 8px', 
                        borderRadius: '4px', 
                        fontSize: '10px', 
                        fontWeight: 700, 
                        letterSpacing: '0.06em', 
                        textTransform: 'uppercase',
                        backgroundColor: '#111827',
                        color: '#ffffff',
                      }}>
                        Flagship
                      </div>
                    )}
                  </div>

                  {/* Location badge on bottom */}
                  <div style={{ position: 'absolute', bottom: '12px', left: '14px', display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(255,255,255,0.92)', padding: '4px 10px', borderRadius: '4px' }}>
                    <MapPin size={13} style={{ color: '#e60023' }} />
                    <span style={{ fontSize: '12px', color: '#111827', fontWeight: 600 }}>
                      {project.locationName}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '22px', 
                    color: '#111827', 
                    marginBottom: '6px',
                    fontWeight: 700 
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    fontSize: '13px', 
                    color: '#6b7280', 
                    marginBottom: '20px', 
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.tagline}
                  </p>

                  {/* BD Real Estate Specs Grid */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '10px', 
                    padding: '14px', 
                    backgroundColor: '#f8fafc', 
                    borderRadius: '10px',
                    border: '1px solid #e5e7eb',
                    marginBottom: '20px'
                  }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Plot Size</div>
                      <div style={{ fontSize: '14px', color: '#111827', fontWeight: 700, marginTop: '2px' }}>
                        {project.landAreaKatha.toFixed(2)} Katha
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Unit Sizes</div>
                      <div style={{ fontSize: '14px', color: '#111827', fontWeight: 700, marginTop: '2px' }}>
                        {project.sizeRangeSft}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Structure</div>
                      <div style={{ fontSize: '13px', color: '#111827', fontWeight: 600, marginTop: '2px' }}>
                        {project.buildingStoried}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>Layout</div>
                      <div style={{ fontSize: '13px', color: '#111827', fontWeight: 600, marginTop: '2px' }}>
                        {project.unitsPerFloor === 1 ? 'Single Unit/Floor' : `${project.unitsPerFloor} Units/Floor`}
                      </div>
                    </div>
                  </div>

                  {/* RAJUK & Compliance Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '18px' }}>
                    <CheckCircle2 size={14} style={{ color: '#16a34a' }} />
                    <span style={{ fontSize: '11px', color: '#6b7280' }}>
                      RAJUK Approved: <span style={{ color: '#111827', fontWeight: 600 }}>{project.rajukApprovalNo}</span>
                    </span>
                  </div>

                  {/* Price & Action Row */}
                  <div style={{ 
                    marginTop: 'auto', 
                    paddingTop: '16px', 
                    borderTop: '1px solid #e5e7eb', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' }}>
                        Starting From
                      </div>
                      <div style={{ 
                        fontSize: '19px', 
                        fontFamily: 'var(--font-heading)', 
                        fontWeight: 700, 
                        color: '#e60023',
                        marginTop: '2px'
                      }}>
                        {formatPrice(project.startingPriceBdt)}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => handleOpenSchedule(project.title)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '6px',
                          border: '1px solid #fecdd3',
                          backgroundColor: '#fff0f2',
                          color: '#e60023',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: 600,
                        }}
                        title="Book Private Viewing"
                      >
                        <Calendar size={14} />
                      </button>

                      <Link 
                        href={`/projects/${project.slug}`}
                        className="btn-red"
                        style={{
                          padding: '8px 16px',
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          textDecoration: 'none',
                        }}
                      >
                        <span>Details</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Schedule Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        initialProject={selectedProjectTitle}
      />
    </div>
  );
}
