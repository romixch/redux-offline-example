export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
  items: Item[];
}

export interface Item {
  id: string;
}
