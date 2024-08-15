export interface PayloadAction {
  type: "change" | "clear" | "delete" | "swap";
  payload?: Card;
}

export interface Card {
  id: number;
  title?: string;
  remuneration?: Array<string>;
  image?: string;
  character?: {
    utilities: Array<string>;
    characteristic: Array<string>;
    condition: Array<string>;
    object: Array<string>;
    file: Array<string>;
  };
}
