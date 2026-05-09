import React from 'react';
import { GraduationCap, Award, Play, Layout } from 'lucide-react';

const timeline = [
  {
    year: '2024-Now',
    institution: 'SMKN 1 Dlanggu',
    major: 'Software Engineering',
    detail: 'Integrated study of front-end architecture, responsive design frameworks, and functional user interfaces.',
    icon: GraduationCap,
    tag: 'Vocational',
  },
  {
    year: '2024 — 2025',
    institution: 'SekolahDesign.id',
    major: 'Motion Graphic Class',
    detail: `Intensive learning of motion principles, animation techniques, and visual storytelling for dynamic media.`,
    icon: Play,
    tag: 'Course',
  },
  {
    year: '2021',
    institution: 'Lab Akselarasi',
    major: 'Basic Graphic Design & UI/UX',
    detail: 'Focused study on visual communication fundamentals, user interface layouts, and human-centered design principles.',
    icon: Layout,
    tag: 'Intensive Training',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-28 lg:py-36 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">02</span>
          <div className="h-px w-8 bg-indigo-600" />
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Education</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mt-3">Educational Journey</h2>

        <div className="mt-16 max-w-3xl">
          {timeline.map((item, i) => (
            <div key={item.institution} className="relative flex gap-8 pb-12 last:pb-0">
              {/* Line */}
              {i < timeline.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-200" />
              )}
              {/* Icon */}
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm z-10">
                <item.icon className="w-4 h-4 text-indigo-600" />
              </div>
              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="text-xs font-semibold text-indigo-600 tracking-wide">{item.year}</span>
                  <span className="text-xs bg-indigo-50 text-indigo-600 font-semibold px-2.5 py-0.5 rounded-full">{item.tag}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900">{item.institution}</h3>
                <p className="text-sm text-gray-600 mt-0.5 font-medium">{item.major}</p>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}