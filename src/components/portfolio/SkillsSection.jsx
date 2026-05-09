import React from 'react';

const designSkills = [
  { name: 'UI Design', level: 95 },
  { name: 'Visual Design', level: 96 },
  { name: 'UX Research', level: 88 },
  { name: 'Wireframing', level: 92 },
  { name: 'Prototyping', level: 89 },
  { name: 'Branding', level: 93 },
];

const tools = [
  { name: 'Figma', desc: 'Auto-layout, components, variants & prototyping' },
  { name: 'Canva', desc: 'Visual communication & strategic brand identity.' },
  { name: 'Photoshop', desc: 'Photo editing & compositing' },
  { name: 'Illustrator', desc: 'Vector graphics & brand identity' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">03</span>
          <div className="h-px w-8 bg-indigo-600" />
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Skills & Tools</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mt-3">Expertise & Toolkit</h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Skills */}
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-8">Design Skills</p>
            <div className="space-y-5">
              {designSkills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">{s.name}</span>
                    <span className="text-xs font-bold text-gray-400">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-8">Tools & Software</p>
            <div className="grid grid-cols-2 gap-4">
              {tools.map(t => (
                <div key={t.name}
                  className="group border border-gray-100 rounded-2xl p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-300 cursor-default">
                  <div className="text-base font-bold text-gray-800">{t.name}</div>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed group-hover:text-indigo-500 transition-colors">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Extra badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Wordpress', 'After Effects', 'Visual Studio Code'].map(b => (
                <span key={b} className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}