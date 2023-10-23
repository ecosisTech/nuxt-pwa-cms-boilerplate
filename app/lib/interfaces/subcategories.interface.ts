export interface Subcategory {
  id: string; // Unique identifier for the category
  name: string; // Name of the category
  slug: string; // URL Slug
  description?: string; // Optional description of the category
  products?: Product[]; // Array of products within this category
  featured?: Product[]; // Array of featured products within this category
  // subcategories: Subcategory[]; // Array of subcategories within this category
  created: Date; // Date when the category was created
  updated: Date; // Date when the category was last updated
}
