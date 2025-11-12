import { Need } from './need';

export interface Basket {
  id: number;
  user: string;
  contents: Need[];
  styles: string[];
  sel_background: string;
  sel_header: string;
  sel_subheader: string;
  sel_text: string;
  sel_input: string;
  sel_button: string;
}