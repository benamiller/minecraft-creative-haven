
export type BlockCategory = 
  | 'stone' 
  | 'wood' 
  | 'nature' 
  | 'building' 
  | 'nether' 
  | 'end' 
  | 'color' 
  | 'ore' 
  | 'functional' 
  | 'glass'
  | 'redstone';

export interface Block {
  id: string;
  name: string;
  category: BlockCategory;
  textureId?: string; // If the texture file name is different from the block ID
}

export interface Palette {
  primary: Block | null;
  secondary: Block | null;
  accent: Block | null;
}

export type SlotType = 'primary' | 'secondary' | 'accent' | 'none';

export type PatternViewMode = '2d' | '3d';

// A pattern is now a 3D grid of SlotTypes (Layers -> Rows -> Columns)
export interface Pattern {
  id: string;
  name: string;
  description: string;
  layers: SlotType[][][]; // 3D array: [y (height)][z (depth/row)][x (width/col)]
  recommendedView: PatternViewMode;
}

export interface BuildIdea {
  title: string;
  description: string;
  suggestedTheme: string;
}
