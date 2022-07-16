export interface LinkAttrs {
  text: string;
  href: string;
  description?: string;
  category?: string;
}

export interface LinkData {
  [category: string]: LinkAttrs[];
}
