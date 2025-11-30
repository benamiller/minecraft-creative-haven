import React, { useState } from 'react';
import { Sparkles, Loader2, Lightbulb } from 'lucide-react';
import { generateBuildIdea } from '../services/geminiService';
import { BuildIdea } from '../types';

const InspirationAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState<BuildIdea | null>(null);

  const handleInspire = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setIdea(null);
    try {
      const result = await generateBuildIdea(topic);
      setIdea(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-80 bg-slate-900 border-l border-slate-700 flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-slate-700 bg-slate-800">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          Idea Forge
        </h2>
      </div>

      <div className="p-4 flex-1 flex flex-col gap-6 overflow-y-auto">
        <form onSubmit={handleInspire} className="flex flex-col gap-3">
            <label className="text-sm text-slate-400">What do you want to build?</label>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. Underwater base, Elf tree..."
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-yellow-500"
                />
            </div>
            <button 
                type="submit"
                disabled={loading || !topic}
                className="w-full bg-yellow-600 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lightbulb className="w-4 h-4" />}
                Spark Creativity
            </button>
        </form>

        {idea && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start justify-between mb-2">
                     <span className="text-[10px] uppercase tracking-wider font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded">
                        {idea.suggestedTheme}
                     </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{idea.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {idea.description}
                </p>
                <div className="text-xs text-slate-500 italic">
                    Use the texture browser to find blocks that match this theme!
                </div>
            </div>
        )}

        {!idea && !loading && (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-600 gap-3 opacity-60">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-sm text-center max-w-[180px]">Enter a topic above to generate a unique build prompt using AI.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default InspirationAssistant;