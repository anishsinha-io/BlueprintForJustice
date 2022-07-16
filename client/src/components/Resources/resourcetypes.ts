export interface LinkAttrs {
  text: string;
  href: string;
  description: string;
}

export interface LinkData {
  [category: string]: LinkAttrs[];
}

export interface ResourceBlock {
  category: string;
  contentBlocks: LinkAttrs[];
}
