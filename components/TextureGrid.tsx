
import React, { useState, useMemo } from 'react';
import { Block } from '../types';
import { BLOCKS, getTextureUrl } from '../constants';
import { Search } from 'lucide-react';

interface TextureGridProps {
  onSelect: (block: Block) => void;
}

const TextureGrid: React.FC<TextureGridProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Memoize categories to prevent flicker
  const categories = useMemo(() => ['all', ...Array.from(new Set(BLOCKS.map(b => b.category)))], []);

  const filteredBlocks = useMemo(() => {
    return BLOCKS.filter(block => {
      const matchesSearch = block.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || block.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-700 w-80 flex-shrink-0">
      <div className="p-4 border-b border-slate-700 bg-slate-800 shadow-md z-10">
        <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
          <img 
            src={getTextureUrl('grass_block_side')}
            alt="Icon" 
            className="w-6 h-6 pixelated" 
          />
          Block Library
        </h2>
        
        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            placeholder="Search blocks..."
            className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-200 focus:outline-none focus:border-green-500 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap capitalize transition-colors font-medium ${
                activeCategory === cat 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' 
                  : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="grid grid-cols-4 gap-2">
          {filteredBlocks.map((block) => (
            <button
              key={block.id}
              onClick={() => onSelect(block)}
              className="group relative aspect-square bg-slate-800 rounded-md border border-slate-700/50 hover:border-green-500 hover:ring-2 hover:ring-green-500/50 hover:z-10 transition-all flex items-center justify-center overflow-hidden"
              title={block.name}
            >
              <img 
                src={getTextureUrl(block.textureId || block.id)}
                alt={block.name}
                loading="lazy"
                className="w-full h-full object-cover pixelated"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('placehold.co')) return;
                  // If standard texture fails, fallback to a colored placeholder with initials
                  target.src = `https://placehold.co/64x64/334155/94a3b8?text=${block.name.substring(0, 2)}`;
                }}
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 pointer-events-none">
                 <span className="text-[9px] text-white font-medium text-center leading-tight">
                   {block.name}
                 </span>
              </div>
            </button>
          ))}
          {filteredBlocks.length === 0 && (
             <div className="col-span-4 text-center text-slate-500 py-12 flex flex-col items-center">
               <span className="text-4xl mb-2">🧊</span>
               <p className="text-sm">No blocks found.</p>
             </div>
          )}
        </div>
        
        <div className="mt-8 text-center text-xs text-slate-600">
            {filteredBlocks.length} blocks loaded from PrismarineJS
        </div>
      </div>
    </div>
  );
};

export default TextureGrid;
