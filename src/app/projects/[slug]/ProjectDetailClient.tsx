'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  PhoneCall, 
  ArrowLeft, 
  Share2, 
  Bed, 
  Bath, 
  Maximize2, 
  ShieldCheck, 
  Zap, 
  Waves, 
  Layers, 
  ChevronsUp, 
  Check, 
  Sparkles,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { Project, Floorplan } from '@/data/mockData';
import ScheduleModal from '@/components/ScheduleModal';

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const [activeFloorplanId, setActiveFloorplanId] = useState<string>(
    project.floorplans[0]?.id || ''
  );
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>(project.heroImage);
  const [isScheduleOpen, setIsScheduleOpen] = useState<boolean>(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState<boolean>(false);
  const [brochureEmail, setBrochureEmail] = useState<string>('');
  const [brochurePhone, setBrochurePhone] = useState<string>('');
  const [brochureSuccess, setBrochureSuccess] = useState<boolean>(false);

  const activeFloorplan = project.floorplans.find((f) => f.id === activeFloorplanId) || project.floorplans[0];

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureEmail && !brochurePhone) return;
    setBrochureSuccess(true);
    setTimeout(() => {
      window.open('/images/brand/act-banner-cover.png', '_blank');
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Act Development, I would like to inquire about ${project.title} (${project.locationName}). Starting price: ৳${project.startingPriceBdt} Cr.`
  );

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '76px' }}>
      
      {/* Top Breadcrumb Bar */}
      <div style={{ 
        backgroundColor: '#f8fafc', 
        borderBottom: '1px solid #e2e8f0',
        padding: '12px 24px'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link 
            href="/projects" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#4b5563', 
              fontSize: '13px', 
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#e60023')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#4b5563')}
          >
            <ArrowLeft size={16} />
            <span>Back to All Residences</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '13px', color: '#111827', fontWeight: 700, display: 'none' }} className="md:inline">
              {project.title} • {project.locationName}
            </span>
            <button
              onClick={() => setIsScheduleOpen(true)}
              className="btn-red"
              style={{ padding: '6px 16px', fontSize: '12px' }}
            >
              Book Viewing
            </button>
          </div>
        </div>
      </div>

      {/* Hero Showcase Section */}
      <section style={{ position: 'relative', height: '70vh', minHeight: '520px', width: '100%' }}>
        <Image
          src={selectedGalleryImage}
          alt={project.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        {/* Subtle gradient overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.3) 60%, rgba(17, 24, 39, 0.6) 100%)' 
        }} />

        {/* Content over hero */}
        <div style={{ 
          position: 'absolute', 
          bottom: '36px', 
          left: 0, 
          right: 0, 
          padding: '0 24px' 
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            
            {/* Top Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ 
                padding: '4px 10px', 
                borderRadius: '4px', 
                fontSize: '11px', 
                fontWeight: 700, 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase',
                backgroundColor: project.status === 'ready' ? '#16a34a' : '#e60023',
                color: '#ffffff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
              }}>
                {project.status === 'ready' ? 'Ready for Handover' : `Under Construction (${project.currentConstructionProgress}% Complete)`}
              </div>

              <div style={{ 
                padding: '4px 10px', 
                borderRadius: '4px', 
                fontSize: '11px', 
                letterSpacing: '0.05em', 
                backgroundColor: 'rgba(255, 255, 255, 0.92)', 
                color: '#111827',
                fontWeight: 600,
              }}>
                RAJUK Permitted: <span style={{ color: '#e60023' }}>{project.rajukApprovalNo}</span>
              </div>
            </div>

            {/* Title & Tagline */}
            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(32px, 5vw, 56px)', 
              color: '#ffffff', 
              marginBottom: '10px',
              lineHeight: 1.15,
              fontWeight: 700,
            }}>
              {project.title}
            </h1>
            <p style={{ 
              fontSize: 'clamp(16px, 2.2vw, 20px)', 
              color: '#f8fafc', 
              fontStyle: 'italic',
              marginBottom: '16px',
              maxWidth: '800px',
            }}>
              {project.tagline}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '14px', marginBottom: '28px' }}>
              <MapPin size={16} style={{ color: '#e60023' }} />
              <span>{project.address}</span>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <button
                onClick={() => setIsScheduleOpen(true)}
                className="btn-red"
                style={{ padding: '12px 24px', fontSize: '13px' }}
              >
                <Calendar size={16} />
                <span>Schedule Private Viewing</span>
              </button>

              <button
                onClick={() => setIsBrochureModalOpen(true)}
                style={{
                  padding: '12px 20px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.4)',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease',
                }}
              >
                <FileText size={16} />
                <span>Download Brochure</span>
              </button>

              <a
                href={`https://wa.me/8801700000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 20px',
                  borderRadius: '8px',
                  backgroundColor: '#25D366',
                  color: '#000000',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Thumbnail Selector */}
      {project.galleryImages && project.galleryImages.length > 1 && (
        <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '14px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '12px', overflowX: 'auto' }}>
            {project.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGalleryImage(img)}
                style={{
                  position: 'relative',
                  width: '96px',
                  height: '60px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: selectedGalleryImage === img ? '2px solid #e60023' : '1px solid #cbd5e1',
                  cursor: 'pointer',
                  opacity: selectedGalleryImage === img ? 1 : 0.65,
                }}
              >
                <Image src={img} alt={`View ${idx + 1}`} fill style={{ objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Key Metrics Ribbon */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '28px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', textAlign: 'center' }}>
            
            <div style={{ padding: '8px' }}>
              <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Plot Area</div>
              <div style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700, marginTop: '2px' }}>
                {project.landAreaKatha.toFixed(2)} Katha
              </div>
              <div style={{ fontSize: '12px', color: '#e60023', fontWeight: 600 }}>
                {(project.landAreaKatha * 720).toLocaleString()} Sq Ft
              </div>
            </div>

            <div style={{ padding: '8px', borderLeft: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Height</div>
              <div style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700, marginTop: '2px' }}>
                {project.buildingStoried}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                Earthquake Zone-2
              </div>
            </div>

            <div style={{ padding: '8px', borderLeft: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Unit Sizes</div>
              <div style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700, marginTop: '2px' }}>
                {project.sizeRangeSft}
              </div>
              <div style={{ fontSize: '12px', color: '#e60023', fontWeight: 600 }}>
                {project.bedroomRange}
              </div>
            </div>

            <div style={{ padding: '8px', borderLeft: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Handover</div>
              <div style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700, marginTop: '4px' }}>
                {project.expectedHandoverDate}
              </div>
              <div style={{ fontSize: '12px', color: '#16a34a', fontWeight: 600 }}>
                Guaranteed Schedule
              </div>
            </div>

            <div style={{ padding: '8px', borderLeft: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Starting Price</div>
              <div style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700, marginTop: '2px' }}>
                ৳{project.startingPriceBdt.toFixed(2)} Cr
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                ~${((project.startingPriceBdt * 10000000) / (120 * 1000000)).toFixed(2)}M USD
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Details & Floorplan Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '70px 24px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px' }}>
          
          {/* Left Column: Narrative, Specifications, and Live Updates */}
          <div style={{ gridColumn: 'span 12' }} className="lg:col-span-7">
            
            {/* Overview Narrative */}
            <div style={{ marginBottom: '50px' }}>
              <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                Architectural Vision
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '30px', color: '#111827', marginTop: '6px', marginBottom: '18px' }}>
                A Sanctuary of Discretion & Light
              </h2>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
                {project.description}
              </p>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8 }}>
                Every residence within {project.title} has been sculpted with cross-ventilation corridors, expansive thermal insulated glass framing, and generous balcony verandas that offer private retreats amidst Dhaka’s vibrant energy. Structural calculations are peer-reviewed according to BNBC Zone-2 seismic safety mandates.
              </p>
            </div>

            {/* Master Specifications Table */}
            <div style={{ marginBottom: '50px' }}>
              <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                Engineering Benchmarks
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#111827', marginTop: '6px', marginBottom: '20px' }}>
                The Act Engineering Benchmark
              </h3>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
                {[
                  {
                    title: 'Structural Frame',
                    detail: 'Substructure with cast-in-situ reinforced piles. High-strength 72.5 Grade Deformed Steel and 4,500+ PSI cylinder-tested concrete resisting earthquake zone-2 stresses.',
                  },
                  {
                    title: 'Vertical Transportation',
                    detail: 'High-speed European Mitsubishi / Schindler passenger lifts with emergency ARD (Automatic Rescue Device) and regenerative drive systems.',
                  },
                  {
                    title: 'Standby Power Backup',
                    detail: '100% full building power generation (Perkins/Cummins sound-attenuated generator) covering all apartment air-conditioners, refrigerators, lights, and appliances without load-shedding interruption.',
                  },
                  {
                    title: 'Glazing & Acoustic Insulation',
                    detail: 'Double-glazed thermal-break Schuco/equivalent acoustic glass windows reducing exterior city noise by up to 38dB.',
                  },
                  {
                    title: 'Sanitary & Wellness Fittings',
                    detail: 'Concealed German Hansgrohe / Grohe thermostatic mixers and Kohler premium porcelain sanitary suites.',
                  },
                  {
                    title: 'Fire Safety & Water Management',
                    detail: 'NFPA-compliant wet-riser hydrant system, heat detectors, multi-stage subterranean water filtration, and rainwater retention cells.',
                  },
                ].map((spec, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      padding: '16px 20px', 
                      borderBottom: i < 5 ? '1px solid #f1f5f9' : 'none',
                      backgroundColor: i % 2 === 0 ? '#ffffff' : '#f8fafc'
                    }}
                  >
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#e60023', marginBottom: '4px' }}>
                      {spec.title}
                    </div>
                    <div style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: 1.6 }}>
                      {spec.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Construction Tracker */}
            {project.constructionUpdates && project.constructionUpdates.length > 0 && (
              <div>
                <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                  Live Construction Logs
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#111827', marginTop: '6px', marginBottom: '20px' }}>
                  Progress & Material Audits
                </h3>

                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
                  
                  {/* Progress bar */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 700 }}>Overall Structural Completion</span>
                      <span style={{ fontSize: '13px', color: '#e60023', fontWeight: 700 }}>{project.currentConstructionProgress}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: `${project.currentConstructionProgress}%`, height: '100%', backgroundColor: '#e60023', borderRadius: '999px' }} />
                    </div>
                  </div>

                  {/* Milestones list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {project.constructionUpdates.map((update) => (
                      <div key={update.id} style={{ display: 'flex', gap: '14px', backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#fff0f2', color: '#e60023', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Check size={16} />
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <h4 style={{ fontSize: '14px', color: '#111827', fontWeight: 700, margin: 0 }}>{update.milestoneTitle}</h4>
                            <span style={{ fontSize: '11px', color: '#e60023', backgroundColor: '#fff0f2', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>{update.updateDate}</span>
                          </div>
                          <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>{update.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Right Column: Interactive Floorplans */}
          <div style={{ gridColumn: 'span 12' }} className="lg:col-span-5">
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              {/* Floorplan Card */}
              <div style={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '16px', 
                padding: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#111827', margin: 0 }}>
                    Floorplate & Layout
                  </h3>
                  <span style={{ fontSize: '11px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                    CAD Blueprints
                  </span>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
                  {project.floorplans.map((fp) => (
                    <button
                      key={fp.id}
                      onClick={() => setActiveFloorplanId(fp.id)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 700,
                        border: activeFloorplanId === fp.id ? '1px solid #e60023' : '1px solid #cbd5e1',
                        backgroundColor: activeFloorplanId === fp.id ? '#e60023' : '#f8fafc',
                        color: activeFloorplanId === fp.id ? '#ffffff' : '#475569',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {fp.unitTitle.split('(')[0]}
                    </button>
                  ))}
                </div>

                {/* Active Floorplan Preview */}
                {activeFloorplan && (
                  <div>
                    <div style={{ 
                      position: 'relative', 
                      height: '220px', 
                      width: '100%', 
                      borderRadius: '10px', 
                      overflow: 'hidden', 
                      marginBottom: '18px',
                      border: '1px solid #e5e7eb',
                      backgroundColor: '#f8fafc',
                    }}>
                      <Image
                        src={activeFloorplan.planImageUrl}
                        alt={activeFloorplan.unitTitle}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                      <div style={{ position: 'absolute', bottom: '10px', right: '10px', padding: '3px 8px', backgroundColor: '#111827', color: '#fff', fontSize: '10px', borderRadius: '4px', fontWeight: 600 }}>
                        Architectural Schematic
                      </div>
                    </div>

                    <h4 style={{ fontSize: '16px', color: '#111827', fontWeight: 700, marginBottom: '12px' }}>
                      {activeFloorplan.unitTitle}
                    </h4>

                    {/* Metric pills */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
                      <div style={{ padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '11px', color: '#6b7280' }}>Total Area</div>
                        <div style={{ fontSize: '15px', color: '#111827', fontWeight: 700 }}>{activeFloorplan.sizeSft.toLocaleString()} sft</div>
                      </div>
                      <div style={{ padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '11px', color: '#6b7280' }}>Bed & Bath</div>
                        <div style={{ fontSize: '15px', color: '#111827', fontWeight: 700 }}>{activeFloorplan.bedrooms} Beds • {activeFloorplan.bathrooms} Baths</div>
                      </div>
                      <div style={{ padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '11px', color: '#6b7280' }}>Verandas</div>
                        <div style={{ fontSize: '15px', color: '#111827', fontWeight: 700 }}>{activeFloorplan.balconies} Balconies</div>
                      </div>
                      <div style={{ padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '11px', color: '#6b7280' }}>Orientation</div>
                        <div style={{ fontSize: '12px', color: '#e60023', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{activeFloorplan.facing}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsBrochureModalOpen(true)}
                      className="btn-outline-red"
                      style={{ width: '100%', padding: '11px', fontSize: '13px' }}
                    >
                      Request High-Res Technical Blueprint
                    </button>
                  </div>
                )}
              </div>

              {/* Private Viewing Callout Card */}
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', color: '#111827', marginBottom: '8px' }}>
                  Private Concierge Hotline
                </h4>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, marginBottom: '20px' }}>
                  Our sales advisors are available 7 days a week to arrange confidential private viewings or discuss bespoke interior layouts.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href="tel:16760"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      backgroundColor: '#fff0f2',
                      border: '1px solid #fecdd3',
                      borderRadius: '8px',
                      color: '#e60023',
                      fontWeight: 700,
                      fontSize: '13px',
                      textDecoration: 'none',
                    }}
                  >
                    <PhoneCall size={16} />
                    <span>Dial 16760 (Dhaka Direct)</span>
                  </a>

                  <button
                    onClick={() => setIsScheduleOpen(true)}
                    className="btn-red"
                    style={{ padding: '12px', fontSize: '13px', width: '100%' }}
                  >
                    Reserve Private Consultation
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Brochure Download Modal */}
      {isBrochureModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            maxWidth: '460px',
            width: '100%',
            padding: '32px',
            position: 'relative',
          }}>
            <button
              onClick={() => {
                setIsBrochureModalOpen(false);
                setBrochureSuccess(false);
              }}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#f1f5f9',
                border: 'none',
                color: '#64748b',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>

            {brochureSuccess ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={48} style={{ color: '#e60023', margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#111827', marginBottom: '8px' }}>
                  Brochure Unlocked
                </h3>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.6 }}>
                  Thank you! The architectural dossier for <strong>{project.title}</strong> has been opened in your browser.
                </p>
              </div>
            ) : (
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#111827', marginBottom: '8px' }}>
                  Download Architectural Dossier
                </h3>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Enter your contact details to instantly receive the complete floorplan blueprint, technical specifications, and investment brochure for <strong>{project.title}</strong>.
                </p>

                <form onSubmit={handleBrochureSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@domain.com"
                      value={brochureEmail}
                      onChange={(e) => setBrochureEmail(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        padding: '10px 14px',
                        color: '#111827',
                        fontSize: '13px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 17... or overseas number"
                      value={brochurePhone}
                      onChange={(e) => setBrochurePhone(e.target.value)}
                      style={{
                        width: '100%',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        padding: '10px 14px',
                        color: '#111827',
                        fontSize: '13px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-red"
                    style={{ padding: '12px', fontSize: '13px', marginTop: '6px' }}
                  >
                    Unlock & Download PDF
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Viewing Scheduler Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        initialProject={project.title}
      />
    </div>
  );
}
