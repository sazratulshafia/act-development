import { 
  pgTable, 
  uuid, 
  varchar, 
  text, 
  integer, 
  decimal, 
  boolean, 
  timestamp, 
  pgEnum, 
  jsonb 
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const projectStatusEnum = pgEnum('project_status', [
  'upcoming', 
  'ongoing', 
  'ready', 
  'handed_over'
]);

export const projectTypeEnum = pgEnum('project_type', [
  'residential', 
  'commercial', 
  'mixed_use', 
  'penthouse_collection'
]);

export const leadTypeEnum = pgEnum('lead_type', [
  'buyer_inquiry', 
  'landowner_proposal', 
  'nrb_consultation', 
  'schedule_visit', 
  'brochure_download'
]);

// 1. Locations Table (Dhaka Micro-Markets)
export const locations = pgTable('locations', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(), // e.g. "Gulshan 2", "Bashundhara R/A", "Uttara"
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  district: varchar('district', { length: 50 }).default('Dhaka').notNull(),
  description: text('description'),
  featuredImage: varchar('featured_image', { length: 500 }),
  latitude: decimal('latitude', { precision: 10, scale: 7 }),
  longitude: decimal('longitude', { precision: 10, scale: 7 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 2. Projects Table
export const projects = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  tagline: varchar('tagline', { length: 300 }),
  description: text('description').notNull(),
  locationId: uuid('location_id').references(() => locations.id).notNull(),
  address: text('address').notNull(),
  
  // Specific Bangladesh Real Estate Metrics
  landAreaKatha: decimal('land_area_katha', { precision: 6, scale: 2 }).notNull(), // e.g. 10.50 Katha
  buildingStoried: varchar('building_storied', { length: 100 }).notNull(), // e.g. "2B + G + 14"
  totalUnits: integer('total_units').notNull(),
  unitsPerFloor: integer('units_per_floor'),
  sizeRangeSft: varchar('size_range_sft', { length: 100 }).notNull(), // e.g. "2,450 – 4,800 sft"
  bedroomRange: varchar('bedroom_range', { length: 50 }).notNull(), // e.g. "3 - 4 Beds"
  startingPriceBdt: decimal('starting_price_bdt', { precision: 14, scale: 2 }), // in BDT crore/lakh
  
  // Categorization & Badges
  status: projectStatusEnum('status').notNull().default('ongoing'),
  type: projectTypeEnum('type').notNull().default('residential'),
  isFeatured: boolean('is_featured').default(false).notNull(),
  isFlagship: boolean('is_flagship').default(false).notNull(),
  
  // Compliance & Approvals
  rajukApprovalNo: varchar('rajuk_approval_no', { length: 100 }),
  expectedHandoverDate: varchar('expected_handover_date', { length: 50 }),
  currentConstructionProgress: integer('current_construction_progress').default(0), // 0 to 100%
  
  // Media Assets
  heroImage: varchar('hero_image', { length: 500 }).notNull(),
  galleryImages: jsonb('gallery_images').$type<string[]>().default([]).notNull(),
  videoWalkthroughUrl: varchar('video_walkthrough_url', { length: 500 }),
  virtualTour360Url: varchar('virtual_tour_360_url', { length: 500 }),
  brochurePdfUrl: varchar('brochure_pdf_url', { length: 500 }),
  
  // SEO Meta
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// 3. Project Amenities Table
export const amenities = pgTable('amenities', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  iconName: varchar('icon_name', { length: 50 }).notNull(),
  category: varchar('category', { length: 50 }).default('lifestyle'),
});

// Cross-table Project <-> Amenities
export const projectToAmenities = pgTable('project_to_amenities', {
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  amenityId: uuid('amenity_id').references(() => amenities.id).notNull(),
});

// 4. Floorplans / Unit Types Table
export const floorplans = pgTable('floorplans', {
  id: uuid('id').defaultRandom().primaryKey(),
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  unitTitle: varchar('unit_title', { length: 100 }).notNull(),
  sizeSft: integer('size_sft').notNull(),
  bedrooms: integer('bedrooms').notNull(),
  bathrooms: integer('bathrooms').notNull(),
  balconies: integer('balconies').notNull(),
  facing: varchar('facing', { length: 50 }),
  planImageUrl: varchar('plan_image_url', { length: 500 }).notNull(),
  isAvailable: boolean('is_available').default(true).notNull(),
});

// 5. Construction Updates (Milestone Tracker)
export const constructionUpdates = pgTable('construction_updates', {
  id: uuid('id').defaultRandom().primaryKey(),
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  milestoneTitle: varchar('milestone_title', { length: 255 }).notNull(),
  percentageCompleted: integer('percentage_completed').notNull(),
  updateDate: timestamp('update_date').notNull(),
  notes: text('notes'),
  images: jsonb('images').$type<string[]>().default([]).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 6. Testimonials Table
export const testimonials = pgTable('testimonials', {
  id: uuid('id').defaultRandom().primaryKey(),
  clientName: varchar('client_name', { length: 150 }).notNull(),
  clientRole: varchar('client_role', { length: 100 }).notNull(),
  quote: text('quote').notNull(),
  avatarUrl: varchar('avatar_url', { length: 500 }),
  videoUrl: varchar('video_url', { length: 500 }),
  rating: integer('rating').default(5),
  isFeatured: boolean('is_featured').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 7. Comprehensive Leads & Land Submissions
export const leads = pgTable('leads', {
  id: uuid('id').defaultRandom().primaryKey(),
  leadType: leadTypeEnum('lead_type').notNull(),
  fullName: varchar('full_name', { length: 150 }).notNull(),
  phone: varchar('phone', { length: 30 }).notNull(),
  email: varchar('email', { length: 150 }).notNull(),
  
  // Contextual Data
  projectId: uuid('project_id').references(() => projects.id),
  preferredTimeSlot: varchar('preferred_time_slot', { length: 50 }),
  isNrb: boolean('is_nrb').default(false),
  countryOfResidence: varchar('country_of_residence', { length: 100 }).default('Bangladesh'),
  
  // Landowners
  landLocation: varchar('land_location', { length: 255 }),
  landSizeKatha: decimal('land_size_katha', { precision: 6, scale: 2 }),
  roadWidthFeet: integer('road_width_feet'),
  
  message: text('message'),
  status: varchar('status', { length: 50 }).default('new'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations
export const projectsRelations = relations(projects, ({ one, many }) => ({
  location: one(locations, {
    fields: [projects.locationId],
    references: [locations.id],
  }),
  floorplans: many(floorplans),
  constructionUpdates: many(constructionUpdates),
  amenities: many(projectToAmenities),
}));

export const floorplansRelations = relations(floorplans, ({ one }) => ({
  project: one(projects, {
    fields: [floorplans.projectId],
    references: [projects.id],
  }),
}));
