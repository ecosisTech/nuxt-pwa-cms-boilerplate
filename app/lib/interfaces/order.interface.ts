export interface Order {
  id: string;
  created: Date;
  updated: Date;
  userId?: string; // ID of the user (if the order is from a registered user)
  clientId: string; // ID of the client (if the order is from a client)
  products: Array<{ productId: string; quantity: number }>; // List of ordered products
  totalPrice: number; // Total Price to pay
  currency: string; // Total Price to pay
  currency: string; // Total Price to pay
  // Add other properties as needed
}
