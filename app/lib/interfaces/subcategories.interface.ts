export interface Subcategory {
  id: string; // Unique identifier for the category
  name: string; // Name of the category
  slug: string; // URL Slug
  description?: string; // Optional description of the category
  products?: string[]; // Array of products IDs within this category
  featured?: string[]; // Array of featured IDs products within this category
  created: Date; // Date when the category was created
  updated: Date; // Date when the category was last updated
}
