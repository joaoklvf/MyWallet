//Data	Descrição	Categoria	Finalidade	Origem/Destino	Entrada	Saída
interface Category {
  id: number;
  name: string;
}

interface Purpose {
  id: number;
  name: string;
}

interface Wallet {
  id: number;
  name: string;
  bgColor: string;
  fgColor: string;
}

export interface Transaction {
  date: Date;
  description: string;
  category: Category;
  purpose: Purpose;
  wallet: Wallet;
  value: number;
}

const categories: Category[] = [
  { id: 1, name: "Groceries" },
  { id: 2, name: "Utilities" },
  { id: 3, name: "Entertainment" },
  { id: 4, name: "Transportation" },
];

const purposes: Purpose[] = [
  { id: 1, name: "Shopping" },
  { id: 2, name: "Bill payment" },
  { id: 3, name: "Dining out" },
  { id: 4, name: "Fuel" },
];

const wallets: Wallet[] = [
  { id: 1, name: "Savings Account", bgColor: '#ac0ac0', fgColor: '#ffffff' },
  { id: 2, name: "Credit Card", bgColor: '#ac0ac0', fgColor: '#ffffff' },
  { id: 3, name: "Cash", bgColor: '#ac0ac0', fgColor: '#ffffff' },
];

export const transactions: Transaction[] = [
  {
    date: new Date("2024-02-01"),
    description: "Grocery shopping at ABC Mart",
    category: categories[0],
    purpose: purposes[0],
    wallet: wallets[1],
    value: -50,
  },
  {
    date: new Date("2024-02-03"),
    description: "Electricity bill payment",
    category: categories[1],
    purpose: purposes[1],
    wallet: wallets[0],
    value: -80,
  },
  {
    date: new Date("2024-02-05"),
    description: "Movie tickets",
    category: categories[2],
    purpose: purposes[0],
    wallet: wallets[2],
    value: -25,
  },
  {
    date: new Date("2024-02-08"),
    description: "Gasoline refill",
    category: categories[3],
    purpose: purposes[3],
    wallet: wallets[1],
    value: -40,
  },
];

