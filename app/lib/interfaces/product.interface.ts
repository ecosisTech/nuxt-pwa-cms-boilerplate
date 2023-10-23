export interface Product {
  id: string; // Unique product identifier
  brand: string; // Brand name
  name: string; // Product name
  slug: string; // URL Slug
  propertyName: string; // Property name
  propertyValue: string; // Property value
  color: string; // Product color
  properties: string; // Additional product properties (you can adjust the data type)
  price: number; // Product price
  account: string; // Product account or category
  tax: number; // Tax percentage (e.g., 0.2 for 20% tax)
  EAN: string; // European Article Number (EAN) or barcode
  quantity: number; // Available quantity
  featured: boolean; // Is the product featured or not
  // Add any other necessary properties here
}
