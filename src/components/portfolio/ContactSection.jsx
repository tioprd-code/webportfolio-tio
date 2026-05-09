import React, { useState } from 'react';
import { Send, Mail, Globe, CheckCircle, Github, Instagram, Music } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const socials = [
  { icon: Mail, label: 'tiothedreamver@gmail.com', href: 'mailto:tiothedreamver@gmail.com' },
  { icon: Globe, label: 'behance.net/adytiopradana', href: 'https://behance.net/adytiopradana' },
  { icon: Github, label: 'github.com/adytiopradana', href: 'https://github.com/adytiopradana' },
  { icon: Instagram, label: 'instagram.com/adytiopradana', href: 'https://instagram.com/adytiopradana' },
  { icon: Music, label: 'tiktok.com/@adytiopradana', href: 'https://tiktok.com/@adytiopradana' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await base44.integrations.Core.SendEmail({
      to: 'sofia.moreno@email.com',
      subject: `Portfolio inquiry from ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">05</span>
          <div className="h-px w-8 bg-indigo-600" />
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Let's create something<br />
              <span className="text-indigo-600">remarkable</span> together
            </h2>
            <p className="text-sm text-gray-500 mt-5 max-w-sm leading-relaxed">
              Have a project in mind? Looking for a designer to join your team? Or just want to say hello? I'm always open to new opportunities and conversations.
            </p>

            <div className="mt-10 space-y-4">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-indigo-300 group-hover:bg-indigo-50 transition-all">
                    <s.icon className="w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 font-medium transition-colors">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Name</label>
                <input type="text" required placeholder="Your name" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-white" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Email</label>
                <input type="email" required placeholder="your@email.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-white" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Message</label>
              <textarea required rows={5} placeholder="Tell me about your project..." value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all resize-none bg-white" />
            </div>
            <button type="submit" disabled={status === 'sending'}
              className={`inline-flex items-center gap-2.5 text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 ${
                status === 'sent'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-900 hover:bg-indigo-600 text-white'
              } disabled:opacity-60`}>
              {status === 'sent' ? (
                <><CheckCircle className="w-4 h-4" /> Message Sent!</>
              ) : status === 'sending' ? (
                'Sending...'
              ) : (
                <><Send className="w-4 h-4" /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}