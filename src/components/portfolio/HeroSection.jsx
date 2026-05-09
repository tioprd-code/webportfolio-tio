import React from "react";
import { ArrowDown, Download, ArrowRight } from "lucide-react";

export default function HeroSection({ portraitImage }) {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />
      {/* Indigo glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
              Available for Freelance
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
              Adytio
              <br />
              <span className="text-indigo-600">Pradana</span>
            </h1>

            <p className="text-lg text-gray-600 font-medium mt-4">
              Graphic Designer <span className="text-gray-300 mx-2">·</span>{" "}
              UI/UX Designer
            </p>

            <p className="text-base text-gray-500 mt-4 max-w-md leading-relaxed">
              Creating visual and digital experiences that impact everyone. It's
              not just about aesthetics, but about the benefits and content for
              everyone.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <button
                onClick={() =>
                  document
                    .querySelector("#portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2.5 bg-gray-900 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-indigo-600 transition-all duration-300"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="/port/CV by Adytio Pradana.pdf"
                download="CV_Adytio_Pradana.pdf"
                className="inline-flex items-center gap-2.5 border border-gray-200 text-gray-700 text-sm font-medium px-7 py-3.5 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-gray-100">
              {[
                { n: "2+", l: "Years Experience" },
                { n: "500+", l: "Projects Done" },
                { n: "100+", l: "Happy Clients" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-gray-900">{s.n}</div>
                  <div className="text-xs text-gray-400 mt-0.5 font-medium">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-100 rounded-3xl translate-x-4 translate-y-4" />
              <div className="relative w-80 xl:w-96 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
                <img
                  src={portraitImage}
                  alt="Sofia Moreno — Designer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-xl px-5 py-3.5 border border-gray-100">
                <div className="text-xs text-gray-400 font-medium">
                  Currently working on
                </div>
                <div className="text-sm font-semibold text-gray-800 mt-0.5">
                  Graphic Design{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
