export interface IProdcut {
  id: number;
  name: string;
  quantity: number;
  neededAmount: number;
  price: number;
  img: string;
  categoryid: { id: number; name: string };
}
