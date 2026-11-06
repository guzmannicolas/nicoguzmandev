import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [service, setService] = useState<'webs' | 'ai' | 'erp' | 'custom'>('webs');
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const serviceLabels = {
    webs: '🌐 Rama 1: Web de Alto Rendimiento para Local / Comercio',
    ai: '🤖 Rama 2: Automatización, Chatbot IA y Turnero de WhatsApp',
    erp: '🏢 Rama 3: Consultoría y Sistema ERP a Medida para Pyme',
    custom: '✨ Proyecto Especial / Otro Requerimiento'
  };

  const generateWhatsAppUrl = () => {
    const text = `Hola Nico! Te contacto desde nicoguzmandev.com\n\n*Servicio de interés:* ${serviceLabels[service]}\n*Nombre:* ${name || 'No especificado'}\n*Negocio/Empresa:* ${business || 'No especificado'}\n*Detalle:* ${message || 'Quisiera coordinar una llamada de diagnóstico.'}`;
    return `https://wa.me/5491100000000?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-card rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

      {submitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado con Éxito!</h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto">
            Muchas gracias por tu consulta. Te voy a responder en menos de 2 horas. Si querés una respuesta inmediata, podés escribirme directo por WhatsApp:
          </p>
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Abrir en WhatsApp Ahora</span>
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              ¿En qué rama estás interesado?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'webs', label: '🌐 Webs para Locales', desc: 'Demos listas en 48hs' },
                { id: 'ai', label: '🤖 Automatización & IA', desc: 'WhatsApp & turnos 24/7' },
                { id: 'erp', label: '🏢 Consultoría & ERP', desc: 'Pymes y multi-sucursal' },
                { id: 'custom', label: '✨ Proyecto a Medida', desc: 'Software especializado' }
              ].map(opt => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setService(opt.id as any)}
                  className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                    service === opt.id
                      ? 'bg-zinc-800/90 border-sky-400/80 text-white shadow-md'
                      : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                  }`}
                >
                  <div className="font-semibold text-xs text-white">{opt.label}</div>
                  <div className="text-[11px] text-zinc-400">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Tu Nombre
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Ej. Martín Gómez"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Negocio o Empresa
              </label>
              <input
                type="text"
                value={business}
                onChange={e => setBusiness(e.target.value)}
                placeholder="Ej. Barbería Capital / Distribuidora X"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Teléfono o WhatsApp
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Ej. +54 9 11 1234-5678"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Contame brevemente tu situación o qué te gustaría resolver
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Ej. Tengo una cafetería y quiero una web para mostrar el menú y pedidos, o tengo una empresa y quiero automatizar los turnos..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-sm transition-all shadow-lg shadow-white/5 cursor-pointer"
            >
              <span>Enviar Consulta de Diagnóstico</span>
              <Send className="w-4 h-4" />
            </button>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 font-semibold text-sm transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enviar por WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 text-xs justify-center pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sin spam ni compromisos. Recibís un análisis técnico directo.</span>
          </div>
        </form>
      )}
    </div>
  );
}
