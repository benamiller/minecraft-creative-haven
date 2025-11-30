
import React from 'react';
import { Palette, SlotType } from '../types';
import { getTextureUrl } from '../constants';
import { X } from 'lucide-react';

interface PaletteBarProps {
  palette: Palette;
  activeSlot: SlotType;
  onSlotClick: (slot: SlotType) => void;
  onClearSlot: (slot: SlotType) => void;
}

const PaletteBar: React.FC<PaletteBarProps> = ({ palette, activeSlot, onSlotClick, onClearSlot }) => {
  const slots: { key: keyof Palette; label: string; color: string }[] = [
    { key: 'primary', label: 'Primary (Walls/Fill)', color: 'border-blue-500' },
    { key: 'secondary', label: 'Secondary (Trim/Frame)', color: 'border-orange-500' },
    { key: 'accent', label: 'Accent (Detailing)', color: 'border-purple-500' },
  ];

  return (
    <div className="h-32 bg-slate-900 border-t border-slate-700 flex flex-col justify-center px-8 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] z-20">
      <div className="flex items-center justify-between max-w-5xl mx-auto w-full gap-8">
        
        <div className="text-slate-400 text-sm font-medium w-48 hidden md:block">
          <p className="text-slate-200">Active Palette</p>
          <p className="text-xs text-slate-500 font-normal mt-1">Select a slot, then choose a block.</p>
        </div>

        <div className="flex gap-6 flex-1 justify-center">
          {slots.map((slot) => (
            <div key={slot.key} className="flex flex-col items-center gap-2">
              <div 
                onClick={() => onSlotClick(slot.key as SlotType)}
                className={`
                  relative w-16 h-16 md:w-20 md:h-20 rounded-xl cursor-pointer transition-all duration-200
                  flex items-center justify-center bg-slate-800
                  ${activeSlot === slot.key ? `ring-2 ring-offset-2 ring-offset-slate-900 ring-green-500 scale-105 shadow-lg shadow-green-900/20` : 'hover:bg-slate-700 border border-slate-700'}
                  ${!palette[slot.key] ? 'border-2 border-dashed border-slate-600 opacity-70 hover:opacity-100' : ''}
                `}
              >
                {palette[slot.key] ? (
                  <>
                    <img 
                      src={getTextureUrl(palette[slot.key]!.textureId || palette[slot.key]!.id)} 
                      alt={palette[slot.key]!.name} 
                      className="w-full h-full object-cover rounded-lg pixelated" 
                      onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.src = `https://placehold.co/64x64/334155/94a3b8?text=${palette[slot.key]!.name.substring(0, 2)}`;
                      }}
                    />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onClearSlot(slot.key as SlotType);
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 text-white hover:bg-red-600 shadow-md transition-transform hover:scale-110"
                      title="Clear slot"
                    >
                      <X size={10} strokeWidth={3} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 rounded-b-lg py-0.5 px-1 backdrop-blur-sm">
                       <p className="text-[9px] md:text-[10px] text-center text-white truncate font-medium">{palette[slot.key]!.name}</p>
                    </div>
                  </>
                ) : (
                  <span className="text-slate-600 text-xs font-bold uppercase tracking-wide">Empty</span>
                )}
              </div>
              <span className={`text-xs font-medium uppercase tracking-wider ${activeSlot === slot.key ? 'text-green-400' : 'text-slate-500'}`}>
                {slot.label.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>

        <div className="w-48 hidden md:flex justify-end items-center opacity-50 hover:opacity-100 transition-opacity">
           {/* Future controls */}
        </div>

      </div>
    </div>
  );
};

export default PaletteBar;
