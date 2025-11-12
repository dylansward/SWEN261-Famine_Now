export interface Need {
  id: number;
  name: string;
  cost: number;
  quantity: number;
  location: string;
  current: boolean;
  current_quantity: number;
}