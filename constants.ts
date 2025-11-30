
import { Block, Pattern, SlotType } from './types';

// Switching to InventivetalentDev's repo which reliably hosts unzipped 1.19+ assets
export const getTextureUrl = (textureId: string) => 
  `https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.2/assets/minecraft/textures/block/${textureId}.png`;

export const BLOCKS: Block[] = [
  // --- Natural / Ground ---
  { id: 'grass_block', name: 'Grass Block', category: 'nature', textureId: 'grass_block_side' },
  { id: 'dirt', name: 'Dirt', category: 'nature' },
  { id: 'coarse_dirt', name: 'Coarse Dirt', category: 'nature' },
  { id: 'podzol', name: 'Podzol', category: 'nature', textureId: 'podzol_side' },
  { id: 'rooted_dirt', name: 'Rooted Dirt', category: 'nature' },
  { id: 'mycelium', name: 'Mycelium', category: 'nature', textureId: 'mycelium_side' },
  { id: 'dirt_path', name: 'Dirt Path', category: 'nature', textureId: 'dirt_path_side' },
  { id: 'stone', name: 'Stone', category: 'stone' },
  { id: 'cobblestone', name: 'Cobblestone', category: 'stone' },
  { id: 'mossy_cobblestone', name: 'Mossy Cobblestone', category: 'stone' },
  { id: 'smooth_stone', name: 'Smooth Stone', category: 'stone' },
  { id: 'sand', name: 'Sand', category: 'nature' },
  { id: 'red_sand', name: 'Red Sand', category: 'nature' },
  { id: 'gravel', name: 'Gravel', category: 'nature' },
  { id: 'clay', name: 'Clay', category: 'nature' },
  { id: 'snow_block', name: 'Snow Block', category: 'nature', textureId: 'snow' },
  { id: 'ice', name: 'Ice', category: 'nature' },
  { id: 'packed_ice', name: 'Packed Ice', category: 'nature' },
  { id: 'blue_ice', name: 'Blue Ice', category: 'nature' },
  { id: 'mud', name: 'Mud', category: 'nature' },
  { id: 'packed_mud', name: 'Packed Mud', category: 'nature' },
  { id: 'mud_bricks', name: 'Mud Bricks', category: 'nature' },

  // --- Stones & Bricks ---
  { id: 'stone_bricks', name: 'Stone Bricks', category: 'stone' },
  { id: 'mossy_stone_bricks', name: 'Mossy Stone Bricks', category: 'stone' },
  { id: 'cracked_stone_bricks', name: 'Cracked Stone Bricks', category: 'stone' },
  { id: 'chiseled_stone_bricks', name: 'Chiseled Stone Bricks', category: 'stone' },
  { id: 'andesite', name: 'Andesite', category: 'stone' },
  { id: 'polished_andesite', name: 'Polished Andesite', category: 'stone' },
  { id: 'diorite', name: 'Diorite', category: 'stone' },
  { id: 'polished_diorite', name: 'Polished Diorite', category: 'stone' },
  { id: 'granite', name: 'Granite', category: 'stone' },
  { id: 'polished_granite', name: 'Polished Granite', category: 'stone' },
  { id: 'bricks', name: 'Bricks', category: 'building' },
  { id: 'tuff', name: 'Tuff', category: 'stone' },
  { id: 'calcite', name: 'Calcite', category: 'stone' },
  { id: 'dripstone_block', name: 'Dripstone Block', category: 'stone' },
  
  // --- Deepslate ---
  { id: 'deepslate', name: 'Deepslate', category: 'stone' }, 
  { id: 'cobbled_deepslate', name: 'Cobbled Deepslate', category: 'stone' },
  { id: 'deepslate_bricks', name: 'Deepslate Bricks', category: 'stone' },
  { id: 'cracked_deepslate_bricks', name: 'Cracked Deepslate Bricks', category: 'stone' },
  { id: 'deepslate_tiles', name: 'Deepslate Tiles', category: 'stone' },
  { id: 'polished_deepslate', name: 'Polished Deepslate', category: 'stone' },
  { id: 'chiseled_deepslate', name: 'Chiseled Deepslate', category: 'stone' },
  { id: 'reinforced_deepslate', name: 'Reinforced Deepslate', category: 'stone', textureId: 'reinforced_deepslate_side' },

  // --- Woods (Logs) ---
  { id: 'oak_log', name: 'Oak Log', category: 'wood' },
  { id: 'spruce_log', name: 'Spruce Log', category: 'wood' },
  { id: 'birch_log', name: 'Birch Log', category: 'wood' },
  { id: 'jungle_log', name: 'Jungle Log', category: 'wood' },
  { id: 'acacia_log', name: 'Acacia Log', category: 'wood' },
  { id: 'dark_oak_log', name: 'Dark Oak Log', category: 'wood' },
  { id: 'mangrove_log', name: 'Mangrove Log', category: 'wood' },
  { id: 'crimson_stem', name: 'Crimson Stem', category: 'wood' },
  { id: 'warped_stem', name: 'Warped Stem', category: 'wood' },
  { id: 'stripped_oak_log', name: 'Stripped Oak Log', category: 'wood' },
  { id: 'stripped_spruce_log', name: 'Stripped Spruce Log', category: 'wood' },
  { id: 'stripped_birch_log', name: 'Stripped Birch Log', category: 'wood' },
  { id: 'stripped_jungle_log', name: 'Stripped Jungle Log', category: 'wood' },
  { id: 'stripped_acacia_log', name: 'Stripped Acacia Log', category: 'wood' },
  { id: 'stripped_dark_oak_log', name: 'Stripped Dark Oak Log', category: 'wood' },
  { id: 'stripped_mangrove_log', name: 'Stripped Mangrove Log', category: 'wood' },

  // --- Woods (Planks) ---
  { id: 'oak_planks', name: 'Oak Planks', category: 'wood' },
  { id: 'spruce_planks', name: 'Spruce Planks', category: 'wood' },
  { id: 'birch_planks', name: 'Birch Planks', category: 'wood' },
  { id: 'jungle_planks', name: 'Jungle Planks', category: 'wood' },
  { id: 'acacia_planks', name: 'Acacia Planks', category: 'wood' },
  { id: 'dark_oak_planks', name: 'Dark Oak Planks', category: 'wood' },
  { id: 'mangrove_planks', name: 'Mangrove Planks', category: 'wood' },
  { id: 'crimson_planks', name: 'Crimson Planks', category: 'wood' },
  { id: 'warped_planks', name: 'Warped Planks', category: 'wood' },

  // --- Building Blocks ---
  { id: 'bookshelf', name: 'Bookshelf', category: 'building' },
  { id: 'sandstone', name: 'Sandstone', category: 'building', textureId: 'sandstone_side' },
  { id: 'chiseled_sandstone', name: 'Chiseled Sandstone', category: 'building' },
  { id: 'cut_sandstone', name: 'Cut Sandstone', category: 'building' },
  { id: 'smooth_sandstone', name: 'Smooth Sandstone', category: 'building' },
  { id: 'red_sandstone', name: 'Red Sandstone', category: 'building', textureId: 'red_sandstone_side' },
  { id: 'chiseled_red_sandstone', name: 'Chiseled Red Sandstone', category: 'building' },
  { id: 'cut_red_sandstone', name: 'Cut Red Sandstone', category: 'building' },
  { id: 'quartz_block', name: 'Quartz Block', category: 'building', textureId: 'quartz_block_side' },
  { id: 'quartz_pillar', name: 'Quartz Pillar', category: 'building', textureId: 'quartz_pillar_side' },
  { id: 'quartz_bricks', name: 'Quartz Bricks', category: 'building' },
  { id: 'smooth_quartz', name: 'Smooth Quartz', category: 'building', textureId: 'quartz_block_bottom' },
  { id: 'chiseled_quartz_block', name: 'Chiseled Quartz', category: 'building', textureId: 'chiseled_quartz_block_side' },
  { id: 'prismarine', name: 'Prismarine', category: 'building' },
  { id: 'prismarine_bricks', name: 'Prismarine Bricks', category: 'building' },
  { id: 'dark_prismarine', name: 'Dark Prismarine', category: 'building' },
  { id: 'sea_lantern', name: 'Sea Lantern', category: 'building' },
  
  // --- Glass ---
  { id: 'glass', name: 'Glass', category: 'glass' },
  { id: 'tinted_glass', name: 'Tinted Glass', category: 'glass' },
  { id: 'white_stained_glass', name: 'White Glass', category: 'glass' },
  { id: 'light_gray_stained_glass', name: 'Light Gray Glass', category: 'glass' },
  { id: 'gray_stained_glass', name: 'Gray Glass', category: 'glass' },
  { id: 'black_stained_glass', name: 'Black Glass', category: 'glass' },
  { id: 'brown_stained_glass', name: 'Brown Glass', category: 'glass' },
  { id: 'red_stained_glass', name: 'Red Glass', category: 'glass' },
  { id: 'orange_stained_glass', name: 'Orange Glass', category: 'glass' },
  { id: 'yellow_stained_glass', name: 'Yellow Glass', category: 'glass' },
  { id: 'lime_stained_glass', name: 'Lime Glass', category: 'glass' },
  { id: 'green_stained_glass', name: 'Green Glass', category: 'glass' },
  { id: 'cyan_stained_glass', name: 'Cyan Glass', category: 'glass' },
  { id: 'light_blue_stained_glass', name: 'Light Blue Glass', category: 'glass' },
  { id: 'blue_stained_glass', name: 'Blue Glass', category: 'glass' },
  { id: 'purple_stained_glass', name: 'Purple Glass', category: 'glass' },
  { id: 'magenta_stained_glass', name: 'Magenta Glass', category: 'glass' },
  { id: 'pink_stained_glass', name: 'Pink Glass', category: 'glass' },

  // --- Functional / Decor ---
  { id: 'crafting_table', name: 'Crafting Table', category: 'functional', textureId: 'crafting_table_front' },
  { id: 'furnace', name: 'Furnace', category: 'functional', textureId: 'furnace_front' },
  { id: 'barrel', name: 'Barrel', category: 'functional', textureId: 'barrel_side' },
  { id: 'chest', name: 'Chest', category: 'functional', textureId: 'cartography_table_side3' }, // Chest texture is complex, using filler
  { id: 'cartography_table', name: 'Cartography Table', category: 'functional', textureId: 'cartography_table_side3' },
  { id: 'fletching_table', name: 'Fletching Table', category: 'functional', textureId: 'fletching_table_side' },
  { id: 'smithing_table', name: 'Smithing Table', category: 'functional', textureId: 'smithing_table_front' },
  { id: 'glowstone', name: 'Glowstone', category: 'functional' },
  { id: 'shroomlight', name: 'Shroomlight', category: 'functional' },
  { id: 'ochre_froglight', name: 'Ochre Froglight', category: 'functional', textureId: 'ochre_froglight_side' },
  { id: 'pearlescent_froglight', name: 'Pearlescent Froglight', category: 'functional', textureId: 'pearlescent_froglight_side' },
  { id: 'verdant_froglight', name: 'Verdant Froglight', category: 'functional', textureId: 'verdant_froglight_side' },
  { id: 'sculk', name: 'Sculk', category: 'functional' },
  { id: 'sculk_catalyst', name: 'Sculk Catalyst', category: 'functional', textureId: 'sculk_catalyst_side' },
  
  // --- Ores & Minerals ---
  { id: 'coal_ore', name: 'Coal Ore', category: 'ore' },
  { id: 'iron_ore', name: 'Iron Ore', category: 'ore' },
  { id: 'gold_ore', name: 'Gold Ore', category: 'ore' },
  { id: 'diamond_ore', name: 'Diamond Ore', category: 'ore' },
  { id: 'lapis_ore', name: 'Lapis Ore', category: 'ore' },
  { id: 'redstone_ore', name: 'Redstone Ore', category: 'ore' },
  { id: 'emerald_ore', name: 'Emerald Ore', category: 'ore' },
  { id: 'nether_quartz_ore', name: 'Nether Quartz Ore', category: 'ore' },
  { id: 'nether_gold_ore', name: 'Nether Gold Ore', category: 'ore' },
  { id: 'amethyst_block', name: 'Amethyst Block', category: 'ore' },
  { id: 'copper_block', name: 'Copper Block', category: 'ore' },
  { id: 'exposed_copper', name: 'Exposed Copper', category: 'ore' },
  { id: 'weathered_copper', name: 'Weathered Copper', category: 'ore' },
  { id: 'oxidized_copper', name: 'Oxidized Copper', category: 'ore' },
  { id: 'cut_copper', name: 'Cut Copper', category: 'ore' },
  { id: 'exposed_cut_copper', name: 'Exposed Cut Copper', category: 'ore' },
  { id: 'weathered_cut_copper', name: 'Weathered Cut Copper', category: 'ore' },
  { id: 'oxidized_cut_copper', name: 'Oxidized Cut Copper', category: 'ore' },
  { id: 'raw_iron_block', name: 'Raw Iron Block', category: 'ore' },
  { id: 'raw_gold_block', name: 'Raw Gold Block', category: 'ore' },
  { id: 'raw_copper_block', name: 'Raw Copper Block', category: 'ore' },

  // --- Nether ---
  { id: 'netherrack', name: 'Netherrack', category: 'nether' },
  { id: 'nether_bricks', name: 'Nether Bricks', category: 'nether' },
  { id: 'red_nether_bricks', name: 'Red Nether Bricks', category: 'nether' },
  { id: 'chiseled_nether_bricks', name: 'Chiseled Nether Bricks', category: 'nether' },
  { id: 'cracked_nether_bricks', name: 'Cracked Nether Bricks', category: 'nether' },
  { id: 'basalt', name: 'Basalt', category: 'nether', textureId: 'basalt_side' },
  { id: 'polished_basalt', name: 'Polished Basalt', category: 'nether', textureId: 'polished_basalt_side' },
  { id: 'smooth_basalt', name: 'Smooth Basalt', category: 'nether' },
  { id: 'blackstone', name: 'Blackstone', category: 'nether' },
  { id: 'polished_blackstone', name: 'Polished Blackstone', category: 'nether' },
  { id: 'polished_blackstone_bricks', name: 'Polished Blackstone Bricks', category: 'nether' },
  { id: 'chiseled_polished_blackstone', name: 'Chiseled Polished Blackstone', category: 'nether' },
  { id: 'gilded_blackstone', name: 'Gilded Blackstone', category: 'nether' },
  { id: 'soul_sand', name: 'Soul Sand', category: 'nether' },
  { id: 'soul_soil', name: 'Soul Soil', category: 'nether' },
  { id: 'magma_block', name: 'Magma Block', category: 'nether' },
  { id: 'crimson_nylium', name: 'Crimson Nylium', category: 'nether', textureId: 'crimson_nylium_side' },
  { id: 'warped_nylium', name: 'Warped Nylium', category: 'nether', textureId: 'warped_nylium_side' },
  { id: 'nether_wart_block', name: 'Nether Wart Block', category: 'nether' },
  { id: 'warped_wart_block', name: 'Warped Wart Block', category: 'nether' },

  // --- End ---
  { id: 'end_stone', name: 'End Stone', category: 'end' },
  { id: 'end_stone_bricks', name: 'End Stone Bricks', category: 'end' },
  { id: 'purpur_block', name: 'Purpur Block', category: 'end' },
  { id: 'purpur_pillar', name: 'Purpur Pillar', category: 'end', textureId: 'purpur_pillar' },
  { id: 'obsidian', name: 'Obsidian', category: 'end' },
  { id: 'crying_obsidian', name: 'Crying Obsidian', category: 'end' },

  // --- Colors (Wool) ---
  { id: 'white_wool', name: 'White Wool', category: 'color' },
  { id: 'light_gray_wool', name: 'Light Gray Wool', category: 'color' },
  { id: 'gray_wool', name: 'Gray Wool', category: 'color' },
  { id: 'black_wool', name: 'Black Wool', category: 'color' },
  { id: 'brown_wool', name: 'Brown Wool', category: 'color' },
  { id: 'red_wool', name: 'Red Wool', category: 'color' },
  { id: 'orange_wool', name: 'Orange Wool', category: 'color' },
  { id: 'yellow_wool', name: 'Yellow Wool', category: 'color' },
  { id: 'lime_wool', name: 'Lime Wool', category: 'color' },
  { id: 'green_wool', name: 'Green Wool', category: 'color' },
  { id: 'cyan_wool', name: 'Cyan Wool', category: 'color' },
  { id: 'light_blue_wool', name: 'Light Blue Wool', category: 'color' },
  { id: 'blue_wool', name: 'Blue Wool', category: 'color' },
  { id: 'purple_wool', name: 'Purple Wool', category: 'color' },
  { id: 'magenta_wool', name: 'Magenta Wool', category: 'color' },
  { id: 'pink_wool', name: 'Pink Wool', category: 'color' },

  // --- Colors (Concrete) ---
  { id: 'white_concrete', name: 'White Concrete', category: 'color' },
  { id: 'black_concrete', name: 'Black Concrete', category: 'color' },
  { id: 'gray_concrete', name: 'Gray Concrete', category: 'color' },
  { id: 'light_gray_concrete', name: 'Light Gray Concrete', category: 'color' },
  { id: 'red_concrete', name: 'Red Concrete', category: 'color' },
  { id: 'blue_concrete', name: 'Blue Concrete', category: 'color' },
  { id: 'light_blue_concrete', name: 'Light Blue Concrete', category: 'color' },
  { id: 'lime_concrete', name: 'Lime Concrete', category: 'color' },
  { id: 'green_concrete', name: 'Green Concrete', category: 'color' },
  { id: 'yellow_concrete', name: 'Yellow Concrete', category: 'color' },
  { id: 'cyan_concrete', name: 'Cyan Concrete', category: 'color' },
  { id: 'orange_concrete', name: 'Orange Concrete', category: 'color' },
  { id: 'purple_concrete', name: 'Purple Concrete', category: 'color' },
  { id: 'magenta_concrete', name: 'Magenta Concrete', category: 'color' },
  { id: 'pink_concrete', name: 'Pink Concrete', category: 'color' },
  { id: 'brown_concrete', name: 'Brown Concrete', category: 'color' },
  
  // --- Concrete Powder ---
  { id: 'white_concrete_powder', name: 'White Powder', category: 'color' },
  { id: 'black_concrete_powder', name: 'Black Powder', category: 'color' },
  { id: 'gray_concrete_powder', name: 'Gray Powder', category: 'color' },
  { id: 'light_gray_concrete_powder', name: 'Lt. Gray Powder', category: 'color' },
  { id: 'red_concrete_powder', name: 'Red Powder', category: 'color' },
  { id: 'blue_concrete_powder', name: 'Blue Powder', category: 'color' },
  { id: 'light_blue_concrete_powder', name: 'Lt. Blue Powder', category: 'color' },
  { id: 'lime_concrete_powder', name: 'Lime Powder', category: 'color' },
  { id: 'green_concrete_powder', name: 'Green Powder', category: 'color' },
  { id: 'yellow_concrete_powder', name: 'Yellow Powder', category: 'color' },
  { id: 'cyan_concrete_powder', name: 'Cyan Powder', category: 'color' },
  { id: 'orange_concrete_powder', name: 'Orange Powder', category: 'color' },
  { id: 'purple_concrete_powder', name: 'Purple Powder', category: 'color' },
  { id: 'magenta_concrete_powder', name: 'Magenta Powder', category: 'color' },
  { id: 'pink_concrete_powder', name: 'Pink Powder', category: 'color' },
  { id: 'brown_concrete_powder', name: 'Brown Powder', category: 'color' },

  // --- Terracotta ---
  { id: 'terracotta', name: 'Terracotta', category: 'color' },
  { id: 'white_terracotta', name: 'White Terracotta', category: 'color' },
  { id: 'orange_terracotta', name: 'Orange Terracotta', category: 'color' },
  { id: 'magenta_terracotta', name: 'Magenta Terracotta', category: 'color' },
  { id: 'light_blue_terracotta', name: 'Light Blue Terracotta', category: 'color' },
  { id: 'yellow_terracotta', name: 'Yellow Terracotta', category: 'color' },
  { id: 'lime_terracotta', name: 'Lime Terracotta', category: 'color' },
  { id: 'pink_terracotta', name: 'Pink Terracotta', category: 'color' },
  { id: 'gray_terracotta', name: 'Gray Terracotta', category: 'color' },
  { id: 'light_gray_terracotta', name: 'Light Gray Terracotta', category: 'color' },
  { id: 'cyan_terracotta', name: 'Cyan Terracotta', category: 'color' },
  { id: 'purple_terracotta', name: 'Purple Terracotta', category: 'color' },
  { id: 'blue_terracotta', name: 'Blue Terracotta', category: 'color' },
  { id: 'brown_terracotta', name: 'Brown Terracotta', category: 'color' },
  { id: 'green_terracotta', name: 'Green Terracotta', category: 'color' },
  { id: 'red_terracotta', name: 'Red Terracotta', category: 'color' },
  { id: 'black_terracotta', name: 'Black Terracotta', category: 'color' },

  // --- Redstone & Misc ---
  { id: 'redstone_lamp', name: 'Redstone Lamp', category: 'redstone', textureId: 'redstone_lamp_off' },
  { id: 'observer', name: 'Observer', category: 'redstone', textureId: 'observer_front' },
  { id: 'dispenser', name: 'Dispenser', category: 'redstone', textureId: 'dispenser_front' },
  { id: 'dropper', name: 'Dropper', category: 'redstone', textureId: 'dropper_front' },
  { id: 'piston', name: 'Piston', category: 'redstone', textureId: 'piston_side' },
  { id: 'sticky_piston', name: 'Sticky Piston', category: 'redstone', textureId: 'piston_side' },
  { id: 'tnt', name: 'TNT', category: 'redstone', textureId: 'tnt_side' },
  { id: 'target', name: 'Target', category: 'redstone', textureId: 'target_top' },
  { id: 'honey_block', name: 'Honey Block', category: 'nature', textureId: 'honey_block_side' },
  { id: 'slime_block', name: 'Slime Block', category: 'nature' },
  { id: 'sponge', name: 'Sponge', category: 'functional' },
  { id: 'wet_sponge', name: 'Wet Sponge', category: 'functional' },
  { id: 'pumpkin', name: 'Pumpkin', category: 'nature', textureId: 'pumpkin_side' },
  { id: 'carved_pumpkin', name: 'Carved Pumpkin', category: 'nature', textureId: 'carved_pumpkin' },
  { id: 'jack_o_lantern', name: 'Jack o Lantern', category: 'functional', textureId: 'jack_o_lantern' },
  { id: 'melon', name: 'Melon', category: 'nature', textureId: 'melon_side' },
  { id: 'hay_block', name: 'Hay Bale', category: 'nature', textureId: 'hay_block_side' },
];

// Helper shorthand
const P: SlotType = 'primary';
const S: SlotType = 'secondary';
const A: SlotType = 'accent';
const _: SlotType = 'none';

// NOTE: Layers are defined Bottom -> Top (Y axis).
// Each layer is [Row (Z)][Col (X)]

export const PATTERNS: Pattern[] = [
  {
    id: 'cozy_cottage',
    name: 'Cozy Cottage',
    description: 'A complete small house structure with roof.',
    recommendedView: '3d',
    layers: [
      // Layer 0: Foundation / Floor
      [
        [S, S, S, S, S, S, S],
        [S, P, P, P, P, P, S],
        [S, P, P, P, P, P, S],
        [S, P, P, P, P, P, S],
        [S, P, P, P, P, P, S],
        [S, S, S, _, S, S, S],
      ],
      // Layer 1: Walls
      [
        [S, A, A, A, A, A, S],
        [A, _, _, _, _, _, A],
        [A, _, _, _, _, _, A],
        [A, _, _, _, _, _, A],
        [A, _, _, _, _, _, A],
        [S, A, A, _, A, A, S],
      ],
       // Layer 2: Walls + Windows
      [
        [S, A, S, S, S, A, S],
        [A, _, _, _, _, _, A],
        [S, _, _, _, _, _, S],
        [S, _, _, _, _, _, S],
        [A, _, _, _, _, _, A],
        [S, A, S, _, S, A, S],
      ],
       // Layer 3: Walls Top
      [
        [S, A, A, A, A, A, S],
        [A, _, _, _, _, _, A],
        [A, _, _, _, _, _, A],
        [A, _, _, _, _, _, A],
        [A, _, _, _, _, _, A],
        [S, A, A, A, A, A, S],
      ],
       // Layer 4: Roof Base
      [
        [_, _, _, _, _, _, _],
        [_, S, S, S, S, S, _],
        [_, S, _, _, _, S, _],
        [_, S, _, _, _, S, _],
        [_, S, S, S, S, S, _],
        [_, _, _, S, _, _, _],
      ],
       // Layer 5: Roof Mid
      [
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, S, S, S, _, _],
        [_, _, S, S, S, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
      ],
       // Layer 6: Roof Top
      [
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, S, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
        [_, _, _, _, _, _, _],
      ],
    ]
  },
  {
    id: 'gothic_window',
    name: 'Gothic Window',
    description: 'An ornate standing window frame.',
    recommendedView: '3d',
    layers: [
      // Layer 0: Base Sill
      [
         [S, S, S, S, S],
         [_, _, _, _, _],
      ],
      // Layer 1: Pillars start
      [
         [S, P, P, P, S],
         [_, _, _, _, _],
      ],
      // Layer 2
      [
         [S, A, A, A, S],
         [_, _, _, _, _],
      ],
       // Layer 3
      [
         [S, A, A, A, S],
         [_, _, _, _, _],
      ],
       // Layer 4
      [
         [S, A, A, A, S],
         [_, _, _, _, _],
      ],
       // Layer 5: Arch Start
      [
         [S, P, A, P, S],
         [_, _, _, _, _],
      ],
       // Layer 6: Arch Top
      [
         [_, S, P, S, _],
         [_, _, _, _, _],
      ],
    ]
  },
  {
    id: 'wall_design',
    name: 'Fortified Wall',
    description: 'A thick, tall wall segment with depth.',
    recommendedView: '3d',
    layers: [
      // Layer 0: Foundation
      [
        [S, S, S, S, S, S, S, S, S],
        [S, P, P, P, P, P, P, P, S],
        [S, S, S, S, S, S, S, S, S],
      ],
      // Layer 1
      [
        [S, _, A, _, A, _, A, _, S],
        [S, P, P, P, P, P, P, P, S],
        [S, _, A, _, A, _, A, _, S],
      ],
       // Layer 2
      [
        [S, _, A, _, A, _, A, _, S],
        [S, P, P, P, P, P, P, P, S],
        [S, _, A, _, A, _, A, _, S],
      ],
      // Layer 3
      [
        [S, _, A, _, A, _, A, _, S],
        [S, P, P, P, P, P, P, P, S],
        [S, _, A, _, A, _, A, _, S],
      ],
      // Layer 4: Top Trim
      [
        [S, S, S, S, S, S, S, S, S],
        [S, P, P, P, P, P, P, P, S],
        [S, S, S, S, S, S, S, S, S],
      ],
       // Layer 5: Battlements
      [
        [S, _, S, _, S, _, S, _, S],
        [_, _, _, _, _, _, _, _, _],
        [S, _, S, _, S, _, S, _, S],
      ],
    ]
  },
  {
    id: 'village_well',
    name: 'Village Well',
    description: 'A classic 3x3 well structure.',
    recommendedView: '3d',
    layers: [
      // Layer 0 (Ground/Water)
      [
        [P, P, P, P, P],
        [P, S, S, S, P],
        [P, S, A, S, P],
        [P, S, S, S, P],
        [P, P, P, P, P],
      ],
       // Layer 1 (Rim)
       [
        [_, _, _, _, _],
        [_, P, P, P, _],
        [_, P, _, P, _],
        [_, P, P, P, _],
        [_, _, _, _, _],
      ],
       // Layer 2 (Supports)
       [
        [_, _, _, _, _],
        [_, S, _, S, _],
        [_, _, _, _, _],
        [_, S, _, S, _],
        [_, _, _, _, _],
      ],
       // Layer 3 (Roof)
       [
        [_, _, _, _, _],
        [_, S, P, S, _],
        [_, P, P, P, _],
        [_, S, P, S, _],
        [_, _, _, _, _],
      ]
    ]
  },
   {
    id: 'tiny_keep',
    name: 'Tiny Keep',
    description: 'A small fortified tower base.',
    recommendedView: '3d',
    layers: [
       // Layer 0: Base
       [
         [S, S, S, S, S],
         [S, P, P, P, S],
         [S, P, P, P, S],
         [S, P, P, P, S],
         [S, S, S, S, S],
       ],
       // Layer 1: Walls
       [
         [S, S, S, S, S],
         [S, _, _, _, S],
         [S, _, _, _, S],
         [S, _, _, _, S],
         [S, S, _, _, S], // Door
       ],
       // Layer 2: Walls
        [
         [S, S, S, S, S],
         [S, _, _, _, S],
         [S, _, _, _, S],
         [S, _, _, _, S],
         [S, S, _, _, S],
       ],
       // Layer 3: Battlements
       [
         [A, _, A, _, A],
         [_, _, _, _, _],
         [A, _, _, _, A],
         [_, _, _, _, _],
         [A, _, _, _, A],
       ]
    ]
  },
  {
      id: 'ruined_portal',
      name: 'Portal Frame',
      description: 'A thick, ancient portal frame.',
      recommendedView: '3d',
      layers: [
          // Layer 0: Base
          [
            [S, S, S, S],
            [_, _, _, _],
            [_, _, _, _],
          ],
           // Layer 1
           [
            [S, _, _, S],
            [_, _, _, _],
            [_, _, _, _],
          ],
           // Layer 2
           [
            [S, _, _, S],
            [_, _, _, _],
            [_, _, _, _],
          ],
           // Layer 3
           [
            [S, _, _, S],
            [_, _, _, _],
            [_, _, _, _],
          ],
           // Layer 4 Top
           [
            [S, S, S, S],
            [_, _, _, _],
            [_, _, _, _],
          ],
      ]
  },
  {
    id: 'checkerboard',
    name: 'Grand Floor',
    description: 'Classic checkerboard pattern with a border.',
    recommendedView: '2d',
    layers: [[
      [S, S, S, S, S, S, S, S, S],
      [S, P, A, P, A, P, A, P, S],
      [S, A, P, A, P, A, P, A, S],
      [S, P, A, P, A, P, A, P, S],
      [S, A, P, A, P, A, P, A, S],
      [S, S, S, S, S, S, S, S, S],
    ]]
  }
];
