import React from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA, Project } from '@/data/mockData';
import ProjectDetailClient from './ProjectDetailClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Act Development',
    };
  }

  return {
    title: `${project.title} - ${project.locationName} | Act Development`,
    description: `${project.tagline}. RAJUK approved luxury residence with ${project.landAreaKatha} Katha plot, ${project.sizeRangeSft} floor plates in ${project.locationName}, Dhaka.`,
    openGraph: {
      title: `${project.title} | Luxury Real Estate Dhaka`,
      description: project.description,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
