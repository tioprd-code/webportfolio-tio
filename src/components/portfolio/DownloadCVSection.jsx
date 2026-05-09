import React from 'react';
import { Download, FileText } from 'lucide-react';

export default function DownloadCVSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-10 py-16 lg:px-20">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
                <FileText className="w-3.5 h-3.5" />
                Resume
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Download My CV</h2>
              <p className="text-sm text-gray-400 mt-3 max-w-md leading-relaxed">
                Get a full overview of my experience, education, skills, and projects — ready for review in PDF format.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                {['UI/UX Design', 'Brand Identity', 'Motion Design'].map(tag => (
                  <span key={tag} className="text-xs text-gray-400 border border-gray-700 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* --- BAGIAN YANG DIUBAH --- */}
            <a 
              href="/port/CV by Adytio Pradana.pdf" 
              download="CV_Adytio_Pradana.pdf"
              className="group shrink-0 inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-indigo-900/40"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Download PDF
            </a>
            {/* --------------------------- */}
            
          </div>
        </div>
      </div>
    </section>
  );
}