'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  FileCheck, 
  Layers, 
  Sparkles, 
  Hammer, 
  HardHat, 
  ArrowRight, 
  Building2,
  Calendar,
  Microscope,
  Award,
  Download
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/mockData';

export default function ConstructionTrackerPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('all');

  const filteredProjects = selectedProjectId === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.id === selectedProjectId);

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
            <Activity size={14} style={{ color: '#e60023' }} />
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e60023', fontWeight: 700 }}>
              Live Transparency & Materials Testing Lab
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
            Engineering Monuments of <br />
            <span style={{ color: '#e60023', fontStyle: 'italic' }}>
              Verifiable Structural Permanence
            </span>
          </h1>

          <p style={{ 
            maxWidth: '720px', 
            margin: '0 auto', 
            color: '#4b5563', 
            fontSize: '16px', 
            lineHeight: 1.8 
          }}>
            At Act Development, luxury is not skin-deep. Every cubic yard of concrete, every rebar metric ton, and every foundation pile undergoes rigorous non-destructive laboratory testing in adherence to Bangladesh National Building Code (BNBC Zone-2) seismic requirements.
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
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>5,000+ PSI</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Cylinder Concrete Strength</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }} />
            <div>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#111827', fontWeight: 700 }}>72.5 Grade</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>High-Yield TMT Steel</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#e2e8f0' }} />
            <div>
              <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>100% PIT</div>
              <div style={{ fontSize: '12px', color: '#6b7280', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Sonic Pile Integrity Tests</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Laboratory Quality Pillars */}
      <section style={{ padding: '80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
            Quality Assurance Protocol
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#111827', marginTop: '6px' }}>
            In-House Testing Laboratory Standards
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            {
              icon: Microscope,
              title: 'Cylinder Concrete Crushing Tests',
              spec: 'ASTM C39 / BNBC Standard',
              desc: '7-day, 14-day, and 28-day hydraulic compression crushing tests performed on every continuous slab pour. Certified to exceed 4,500–5,000 PSI.',
            },
            {
              icon: HardHat,
              title: '72.5 Grade High-Yield Rebar Tensile Strain',
              spec: 'BDS ISO 6935-2 / ASTM A615',
              desc: 'High-ductility thermo-mechanically treated (TMT) 500W rebar testing to guarantee seismic ductility against cyclic earthquake ground motions.',
            },
            {
              icon: Activity,
              title: 'Sonic Pile Integrity Testing (PIT)',
              spec: 'ASTM D5882 Low-Strain Testing',
              desc: 'Ultrasonic wave propagation scans conducted on 100% of cast-in-situ foundation piles to detect micro-voids, necking, or soil contamination.',
            },
            {
              icon: ShieldCheck,
              title: 'Crystalline Multi-Layer Waterproofing',
              spec: 'German Bituminous Membrane',
              desc: 'Substructure basements and landscaped rooftop terraces sealed with torch-applied waterproofing membranes preventing dampness permanently.',
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
                <div style={{ fontSize: '11px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '4px' }}>
                  {item.spec}
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

      {/* Live Construction Milestones by Project */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 24px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#e60023', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700 }}>
                Real-Time Site Logs
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: '#111827', marginTop: '6px' }}>
                Active Development Milestones
              </h2>
            </div>

            {/* Project Filter Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>Filter Project:</span>
              <select
                value={selectedProjectId}
                onChange={(e) => setSelectedProjectId(e.target.value)}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  color: '#111827',
                  padding: '8px 16px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  outline: 'none',
                }}
              >
                <option value="all">All Ongoing Projects</option>
                {PROJECTS_DATA.map((p) => (
                  <option key={p.id} value={p.id}>{p.title} ({p.locationName})</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
                }}
              >
                {/* Project Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ position: 'relative', width: '64px', height: '64px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
                      <Image src={project.heroImage} alt={project.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#111827', margin: 0 }}>
                        {project.title}
                      </h3>
                      <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
                        {project.address} • RAJUK Permitted: <span style={{ color: '#e60023', fontWeight: 600 }}>{project.rajukApprovalNo}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: '#e60023', fontWeight: 700 }}>
                      {project.currentConstructionProgress}%
                    </div>
                    <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 600 }}>
                      Target Handover: {project.expectedHandoverDate}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '999px', overflow: 'hidden', marginBottom: '28px' }}>
                  <div 
                    style={{ 
                      width: `${project.currentConstructionProgress}%`, 
                      height: '100%', 
                      backgroundColor: '#e60023',
                      borderRadius: '999px' 
                    }} 
                  />
                </div>

                {/* Milestone History List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {project.constructionUpdates.map((update) => (
                    <div
                      key={update.id}
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '16px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={16} style={{ color: '#e60023' }} />
                          <h4 style={{ fontSize: '14.5px', color: '#111827', fontWeight: 700, margin: 0 }}>
                            {update.milestoneTitle}
                          </h4>
                        </div>
                        <span style={{ fontSize: '11px', color: '#e60023', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#fff0f2', fontWeight: 600 }}>
                          {update.updateDate}
                        </span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                        {update.notes}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      color: '#e60023',
                      textDecoration: 'none',
                      fontWeight: 700,
                    }}
                  >
                    <span>View Project Blueprint & Specifications</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
