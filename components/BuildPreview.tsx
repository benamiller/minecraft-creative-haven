
import React, { useState, useEffect, useRef } from 'react';
import { Palette, SlotType, PatternViewMode } from '../types';
import { PATTERNS, getTextureUrl } from '../constants';
import { ChevronDown, Layers, Box, Square, RotateCw, ZoomIn, ZoomOut, RefreshCcw, MousePointer2 } from 'lucide-react';

interface BuildPreviewProps {
  palette: Palette;
}

const BuildPreview: React.FC<BuildPreviewProps> = ({ palette }) => {
  const [selectedPatternId, setSelectedPatternId] = useState<string>(PATTERNS[0].id);
  const [viewMode, setViewMode] = useState<PatternViewMode>('3d');
  
  // View State
  const [rotation, setRotation] = useState({ x: -25, y: 45 });
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const activePattern = PATTERNS.find(p => p.id === selectedPatternId) || PATTERNS[0];

  // Auto-switch view mode if pattern recommends it
  useEffect(() => {
     setViewMode(activePattern.recommendedView);
     // Reset view on pattern change
     setRotation({ x: -25, y: 45 });
     setZoom(1);
  }, [activePattern.id]);

  const getTexture = (slot: SlotType) => {
    if (slot === 'none') return null;
    const block = palette[slot];
    if (!block) return null;
    return getTextureUrl(block.textureId || block.id);
  };

  const getSlotColor = (slot: SlotType) => {
      switch(slot) {
          case 'primary': return 'rgba(59, 130, 246, 0.4)';
          case 'secondary': return 'rgba(249, 115, 22, 0.4)';
          case 'accent': return 'rgba(168, 85, 247, 0.4)';
          default: return 'transparent';
      }
  };

  // --- Mouse Interaction ---
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (viewMode !== '3d') return;
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || viewMode !== '3d') return;
    
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    setRotation(prev => ({
      x: Math.max(-90, Math.min(90, prev.x - deltaY * 0.5)), // Clamp pitch
      y: prev.y + deltaX * 0.5 // Allow infinite yaw
    }));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (viewMode !== '3d') return;
    // e.deltaY > 0 means scrolling down (zoom out), < 0 means scrolling up (zoom in)
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(prev => Math.max(0.2, Math.min(3, prev + delta)));
  };

  // --- 3D RENDERER ---
  const BLOCK_SIZE = 48; // slightly larger for better detail
  
  const render3D = () => {
    const depth = activePattern.layers.length; // Y axis (Height)
    const height = activePattern.layers[0].length; // Z axis (Depth)
    const width = activePattern.layers[0][0].length; // X axis (Width)

    return (
      <div 
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-move active:cursor-grabbing"
        style={{ perspective: '1200px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div 
          className="relative transition-transform duration-75 ease-out preserve-3d"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `scale(${zoom}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            width: '0px',
            height: '0px'
          }}
        >
          {/* Floor grid for context */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: Math.max(width, height) * BLOCK_SIZE * 3,
              height: Math.max(width, height) * BLOCK_SIZE * 3,
              transform: `rotateX(90deg) translateZ(-${(activePattern.layers.length * BLOCK_SIZE) / 2 + 40}px)`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)',
              pointerEvents: 'none'
            }}
          />

          {activePattern.layers.map((layer, y) => (
            <React.Fragment key={`layer-${y}`}>
              {layer.map((row, z) => (
                <React.Fragment key={`row-${z}`}>
                  {row.map((slot, x) => {
                     if (slot === 'none') return null;
                     
                     const texture = getTexture(slot);
                     const fallbackColor = getSlotColor(slot);
                     const hasTexture = !!texture;

                     // Centering logic
                     // X: Columns (Width)
                     // Y: Layers (Height) - In CSS, +Y is down. We want +Y up.
                     // Z: Rows (Depth)
                     
                     const posX = (x * BLOCK_SIZE) - (width * BLOCK_SIZE / 2) + (BLOCK_SIZE/2);
                     const posZ = (z * BLOCK_SIZE) - (height * BLOCK_SIZE / 2) + (BLOCK_SIZE/2);
                     // Adjust Y so the model sits roughly centered vertically, but layers stack UP
                     const totalHeight = activePattern.layers.length * BLOCK_SIZE;
                     const posY = -(y * BLOCK_SIZE) + (totalHeight / 2) - (BLOCK_SIZE/2);

                     return (
                       <div 
                         key={`${x}-${y}-${z}`}
                         className="absolute preserve-3d group"
                         style={{
                           width: BLOCK_SIZE,
                           height: BLOCK_SIZE,
                           transformStyle: 'preserve-3d',
                           transform: `translate3d(${posX}px, ${posY}px, ${posZ}px)`
                         }}
                       >
                         {/* TOP FACE (Y+) */}
                         <div className="absolute inset-0 backface-hidden" 
                              style={{ 
                                transform: `rotateX(90deg) translateZ(${BLOCK_SIZE/2}px)`,
                                backgroundColor: hasTexture ? '#1e293b' : fallbackColor,
                                backgroundImage: texture ? `url(${texture})` : undefined,
                                backgroundSize: 'cover',
                                imageRendering: 'pixelated',
                                filter: 'brightness(1.15)',
                                border: hasTexture ? 'none' : '1px solid rgba(255,255,255,0.1)'
                              }} 
                         />
                         
                         {/* FRONT FACE (Z+) */}
                         <div className="absolute inset-0 backface-hidden"
                              style={{ 
                                transform: `translateZ(${BLOCK_SIZE/2}px)`,
                                backgroundColor: hasTexture ? '#0f172a' : fallbackColor,
                                backgroundImage: texture ? `url(${texture})` : undefined,
                                backgroundSize: 'cover',
                                imageRendering: 'pixelated',
                                filter: 'brightness(0.95)',
                                border: hasTexture ? 'none' : '1px solid rgba(255,255,255,0.1)'
                              }}
                         />

                         {/* RIGHT FACE (X+) */}
                         <div className="absolute inset-0 backface-hidden"
                              style={{ 
                                transform: `rotateY(90deg) translateZ(${BLOCK_SIZE/2}px)`,
                                backgroundColor: hasTexture ? '#020617' : fallbackColor,
                                backgroundImage: texture ? `url(${texture})` : undefined,
                                backgroundSize: 'cover',
                                imageRendering: 'pixelated',
                                filter: 'brightness(0.7)',
                                border: hasTexture ? 'none' : '1px solid rgba(255,255,255,0.1)'
                              }}
                         />
                         
                         {/* LEFT FACE (X-) */}
                         <div className="absolute inset-0 backface-hidden"
                              style={{ 
                                transform: `rotateY(-90deg) translateZ(${BLOCK_SIZE/2}px)`,
                                backgroundColor: hasTexture ? '#020617' : fallbackColor,
                                backgroundImage: texture ? `url(${texture})` : undefined,
                                backgroundSize: 'cover',
                                imageRendering: 'pixelated',
                                filter: 'brightness(0.7)', 
                              }}
                         />

                         {/* BACK FACE (Z-) */}
                         <div className="absolute inset-0 backface-hidden"
                              style={{ 
                                transform: `rotateY(180deg) translateZ(${BLOCK_SIZE/2}px)`,
                                backgroundColor: hasTexture ? '#0f172a' : fallbackColor,
                                backgroundImage: texture ? `url(${texture})` : undefined,
                                backgroundSize: 'cover',
                                imageRendering: 'pixelated',
                                filter: 'brightness(0.95)',
                              }}
                         />
                         
                         {/* BOTTOM FACE (Y-) */}
                          <div className="absolute inset-0 backface-hidden" 
                              style={{ 
                                transform: `rotateX(-90deg) translateZ(${BLOCK_SIZE/2}px)`,
                                backgroundColor: '#000',
                                filter: 'brightness(0.3)'
                              }} 
                         />
                       </div>
                     );
                  })}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // --- 2D RENDERER (Front View) ---
  const render2D = () => {
     // For vertical structures (Walls, Windows), 2D view usually means Front Elevation.
     // That corresponds to iterating Y (Up) and X (Right) at the front-most Z index.
     // However, simpler logic for now: Just render the Front-most non-empty blocks.
     
     // Let's create a 2D projection grid.
     const height = activePattern.layers.length; // Y
     const width = activePattern.layers[0][0].length; // X
     const depth = activePattern.layers[0].length; // Z

     // We want to render a grid of Size [Height][Width]
     // For each cell, we find the block with the highest Z index.
     
     const projection: (SlotType | null)[][] = [];

     // Iterate Layers (Top to Bottom for visual rendering order in DOM, but actually bottom-to-top data)
     // We render top row first in HTML.
     for (let y = height - 1; y >= 0; y--) {
         const row: (SlotType | null)[] = [];
         for (let x = 0; x < width; x++) {
             let frontBlock: SlotType | null = null;
             // Scan Z from front to back (assuming index 0 is back? No, usually index 0 is 'north/back' in array matrices)
             // In our 3D logic: row index is Z.
             // We'll scan all Zs and take the one that isn't 'none'.
             // We'll prioritize the one "closest" to camera. Let's assume high index Z is front.
             for (let z = depth - 1; z >= 0; z--) {
                 const slot = activePattern.layers[y][z][x];
                 if (slot !== 'none') {
                     frontBlock = slot;
                     break; // Found the front-most block
                 }
             }
             row.push(frontBlock);
         }
         projection.push(row);
     }
     
     return (
        <div 
          className="relative bg-slate-900/50 p-12 rounded-2xl border border-slate-800 shadow-2xl scale-100 transition-transform"
          style={{
             backgroundImage: 'radial-gradient(circle at center, #1e293b 1px, transparent 1px)',
             backgroundSize: '24px 24px'
          }}
        >
            <div className="flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-slate-950/50 backdrop-blur-sm p-2 rounded-lg border border-slate-800/50">
              {projection.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                  {row.map((slot, colIndex) => {
                    const texture = slot ? getTexture(slot) : null;
                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-10 h-10 md:w-14 md:h-14 border border-black/10 transition-all duration-300 ${!slot ? '' : 'shadow-inner'}`}
                        style={{
                          backgroundImage: texture ? `url('${texture}')` : undefined,
                          backgroundSize: '100% 100%',
                          imageRendering: 'pixelated',
                          backgroundColor: !slot ? 'transparent' : (texture ? 'transparent' : getSlotColor(slot)),
                          opacity: !slot ? 0.05 : 1
                        }}
                        title={slot ? (palette[slot as keyof Palette]?.name || 'Slot') : ''}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-xs text-slate-500 font-mono">
                FRONT ELEVATION
            </div>
        </div>
     );
  };

  return (
    <div className="flex-1 bg-slate-950 flex flex-col relative overflow-hidden select-none">
      
      {/* Top Bar Controls */}
      <div className="absolute top-6 left-6 right-6 z-20 flex flex-col md:flex-row gap-4 justify-between pointer-events-none">
        <div className="flex gap-4 pointer-events-auto">
            <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Layers size={16} />
            </div>
            <select 
                value={selectedPatternId}
                onChange={(e) => setSelectedPatternId(e.target.value)}
                className="appearance-none bg-slate-800 text-white pl-10 pr-10 py-3 rounded-xl border border-slate-700 hover:border-green-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500/50 shadow-lg font-medium transition-all w-64"
            >
                {PATTERNS.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 text-slate-400 pointer-events-none w-5 h-5" />
            </div>
            
            <div className="flex bg-slate-800 rounded-xl p-1 border border-slate-700 shadow-lg">
                <button 
                    onClick={() => setViewMode('2d')}
                    className={`p-2 rounded-lg transition-all ${viewMode === '2d' ? 'bg-slate-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                    title="2D Front Elevation"
                >
                    <Square size={20} />
                </button>
                <button 
                    onClick={() => setViewMode('3d')}
                    className={`p-2 rounded-lg transition-all ${viewMode === '3d' ? 'bg-green-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                    title="3D Isometric View"
                >
                    <Box size={20} />
                </button>
            </div>
        </div>

        <div className="bg-slate-800/90 backdrop-blur px-4 py-3 rounded-xl border border-slate-700 text-slate-300 text-sm shadow-lg max-w-md hidden lg:block animate-in fade-in slide-in-from-top-2 pointer-events-auto">
           <span className="text-green-400 font-bold mr-2">Pattern Info:</span>
           {activePattern.description}
        </div>
      </div>
      
      {/* Viewport Hints */}
       {viewMode === '3d' && (
         <div className="absolute top-24 left-6 z-10 flex flex-col gap-2 pointer-events-none opacity-50">
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <MousePointer2 size={14} /> <span>Drag to rotate</span>
            </div>
         </div>
       )}

      {/* Main Render Area */}
      <div className="flex-1 flex items-center justify-center p-0 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 relative">
        {viewMode === '2d' ? render2D() : render3D()}
        
        {/* Zoom Controls (Floating) */}
        {viewMode === '3d' && (
            <div className="absolute right-6 bottom-24 flex flex-col gap-2 z-20">
                <button 
                    onClick={() => setZoom(z => Math.min(z + 0.2, 3))}
                    className="p-3 bg-slate-800 text-slate-200 rounded-full shadow-lg hover:bg-slate-700 active:scale-95 transition-all"
                    title="Zoom In"
                >
                    <ZoomIn size={20} />
                </button>
                 <button 
                    onClick={() => setRotation({ x: -25, y: 45 })}
                    className="p-3 bg-slate-800 text-slate-200 rounded-full shadow-lg hover:bg-slate-700 active:scale-95 transition-all"
                    title="Reset View"
                >
                    <RefreshCcw size={20} />
                </button>
                <button 
                    onClick={() => setZoom(z => Math.max(z - 0.2, 0.2))}
                    className="p-3 bg-slate-800 text-slate-200 rounded-full shadow-lg hover:bg-slate-700 active:scale-95 transition-all"
                    title="Zoom Out"
                >
                    <ZoomOut size={20} />
                </button>
            </div>
        )}
      </div>

       {/* Legend / Info */}
       <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex gap-4 bg-slate-900/80 px-6 py-3 rounded-full border border-slate-700/50 backdrop-blur-sm shadow-2xl">
            {(['primary', 'secondary', 'accent'] as const).map(type => (
                <div key={type} className="flex items-center gap-2 group cursor-default">
                    <div className={`w-3 h-3 rounded-full transition-transform group-hover:scale-125 ${
                        type === 'primary' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 
                        type === 'secondary' ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 
                        'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                    }`}></div>
                    <span className="text-xs text-slate-300 capitalize font-medium">{type}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default BuildPreview;
