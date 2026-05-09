import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

const UX_PROJECTS = [
  {
    title: 'Savey Mobile App',
    category: 'Mobile Ui/Ux Design',
    tools: 'Figma',
    description: 'A minimalist financial management app that turns transaction tracking into an interactive experience. It features a Vibe Meter to monitor your financial health through intuitive and emotional visualizations.',
    process: 'User Research → Wireframing → Visual Design → Prototype',
  },
  {
    title: 'Gokas Mobile App',
    category: 'Mobile UI/UX',
    tools: 'Figma',
    description: 'A mobile-first banking experience designed specifically for Gen Z users. Focused on seamless onboarding, micro-interactions, and biometric authentication — resulting in a 4.8★ App Store rating post-launch.',
    process: 'Competitive Analysis → User Interviews → Information Architecture → Visual Design → A/B Testing',
  },
  {
    title: 'Booking com Mobile App',
    category: 'Mobile Design',
    tools: 'Figma',
    description: 'Full e-commerce platform redesign that increased conversion rate by 25%. Focused on reducing checkout friction, improving product discovery, and building a scalable design system for the dev team.',
    process: 'Analytics Audit → Journey Mapping → Wireframes → Design System → Developer Handoff',
  },
];

const GRAPHIC_PROJECTS = [
  { title: 'Geometric Series', category: 'Poster Design', tools: 'Illustrator, Photoshop', description: 'A collection of abstract geometric posters exploring the interplay between form, negative space, and bold color in contemporary visual communication.' },
  { title: 'Lumière Identity', category: 'Brand Identity', tools: 'Illustrator, InDesign', description: 'Complete brand identity for a luxury cosmetics house, covering logo design, stationery, packaging, and a comprehensive brand guidelines document.' },
  { title: 'Social Canvas', category: 'Social Media Design', tools: 'Photoshop, Figma', description: 'A cohesive social media template system for a lifestyle brand, ensuring visual consistency across Instagram, LinkedIn, and TikTok touchpoints.' },
  { title: 'Artisan Packaging', category: 'Packaging Design', tools: 'Illustrator, Dimension', description: 'Premium packaging design for an artisan skincare line, balancing minimalist aesthetics with tactile material choices and sustainable production requirements.' },
];

export default function PortfolioSection({ uxImages, graphicImages }) {
  const [tab, setTab] = useState('uiux');
  const [modal, setModal] = useState(null);

  const uiuxData = UX_PROJECTS.map((p, i) => ({ ...p, image: uxImages[i] }));
  const graphicData = GRAPHIC_PROJECTS.map((p, i) => ({ ...p, image: graphicImages[i] }));
  const projects = tab === 'uiux' ? uiuxData : graphicData;

  return (
    <section id="portfolio" className="py-28 lg:py-36 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">04</span>
              <div className="h-px w-8 bg-indigo-600" />
              <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Portfolio</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">Selected Works</h2>
          </div>
          {/* Tabs */}
          <div className="flex bg-white border border-gray-200 rounded-full p-1 gap-1 self-start sm:self-auto">
            {[{ id: 'uiux', label: 'UI/UX Design' }, { id: 'graphic', label: 'Graphic Design' }].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  tab === t.id ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className={`mt-10 grid gap-5 ${tab === 'uiux' ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'}`}>
          {projects.map((p, i) => (
            <div key={p.title} onClick={() => setModal(p)}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 cursor-pointer hover:shadow-xl hover:shadow-gray-200 transition-all duration-400">
              <div className={`overflow-hidden ${tab === 'uiux' ? 'aspect-video' : 'aspect-[4/5]'}`}>
                <img src={p.image} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/70 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-xs text-indigo-300 font-semibold uppercase tracking-wider">{p.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{p.title}</h3>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-white/60">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModal(null)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img src={modal.image} alt={modal.title}
                className={`w-full object-cover rounded-t-3xl ${tab === 'uiux' ? 'aspect-video' : 'aspect-[16/9]'}`} />
              <button onClick={() => setModal(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white shadow-md transition-colors">
                <X className="w-4 h-4 text-gray-700" />
              </button>
            </div>
            <div className="p-8">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{modal.category}</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{modal.title}</h3>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">{modal.description}</p>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tools Used</span>
                  <p className="text-sm text-gray-700 mt-1.5 font-medium">{modal.tools}</p>
                </div>
                {modal.process && (
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Design Process</span>
                    <p className="text-sm text-gray-700 mt-1.5 leading-relaxed">{modal.process}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}