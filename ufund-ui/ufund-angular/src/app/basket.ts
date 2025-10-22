import { Need } from './need';

export interface Basket {
  id: number;
  user: string;
  contents: Need[];
}