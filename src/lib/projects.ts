import { PROJECTS_DATA, LOCATIONS_DATA, Project, ProjectLocation } from '@/data/mockData';

export async function getAllProjects(): Promise<Project[]> {
  return PROJECTS_DATA;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return PROJECTS_DATA.filter((p) => p.isFeatured);
}

export async function getProjectsByLocation(locationSlug: string): Promise<Project[]> {
  const loc = LOCATIONS_DATA.find((l) => l.slug === locationSlug);
  if (!loc) return [];
  return PROJECTS_DATA.filter((p) => p.locationId === loc.id);
}

export async function getLocations(): Promise<ProjectLocation[]> {
  return LOCATIONS_DATA;
}
