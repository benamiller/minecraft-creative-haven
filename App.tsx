import React, { useState } from 'react';
import TextureGrid from './components/TextureGrid';
import PaletteBar from './components/PaletteBar';
import BuildPreview from './components/BuildPreview';
import InspirationAssistant from './components/InspirationAssistant';
import { Palette, Block, SlotType } from './types';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [palette, setPalette] = useState<Palette>({
    primary: null,
    secondary: null,
    accent: null,
  });

  const [activeSlot, setActiveSlot] = useState<SlotType>('primary');
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  // Default initial selection to make the app look alive
  React.useEffect(() => {
    // Only set if completely empty
    if (!palette.primary && !palette.secondary && !palette.accent) {
         // Assuming blocks exist in constants, lets lazy load some IDs if we wanted, 
         // but for now we let user explore.
    }
  }, []);

  const handleBlockSelect = (block: Block) => {
    if (activeSlot === 'none') return;
    
    setPalette(prev => ({
      ...prev,
      [activeSlot]: block
    }));

    // Auto-advance to next empty slot or cycle
    if (activeSlot === 'primary') setActiveSlot('secondary');
    else if (activeSlot === 'secondary') setActiveSlot('accent');
    else setActiveSlot('primary');
  };

  const handleClearSlot = (slot: SlotType) => {
      setPalette(prev => ({
          ...prev,
          [slot]: null
      }));
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-950 text-slate-200 font-sans">
      
      {/* Mobile Header */}
      <div className="md:hidden h-14 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-4">
        <span className="font-bold text-white">BlockPalette</span>
        <button onClick={() => setShowLeftSidebar(!showLeftSidebar)} className="p-2 text-slate-300">
            {showLeftSidebar ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Sidebar: Texture Library */}
        <div className={`
            absolute md:static inset-y-0 left-0 z-30 transition-transform duration-300
            ${showLeftSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
             <TextureGrid onSelect={handleBlockSelect} />
        </div>

        {/* Main Content: Preview */}
        <BuildPreview palette={palette} />

        {/* Right Sidebar: AI Assistant */}
        <div className={`
             hidden md:flex transition-transform duration-300
             ${showRightSidebar ? 'translate-x-0' : 'translate-x-full'}
        `}>
             <InspirationAssistant />
        </div>
      </div>

      {/* Bottom Bar: Palette */}
      <PaletteBar 
        palette={palette} 
        activeSlot={activeSlot} 
        onSlotClick={setActiveSlot}
        onClearSlot={handleClearSlot}
      />

    </div>
  );
};

export default App;