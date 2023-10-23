export interface Client {
  id: string;
  created: Date;
  updated: Date;
  company?: string;
  title?: string;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  isActive: boolean;
  // Add other client properties as needed
}
