import React, { useState } from 'react';

export default function ContactForm() {
  const [division, setDivision] = useState<'webs' | 'ai' | 'erp' | 'custom'>('webs');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [scope, setScope] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const divisionLabels = {
    webs: '01 / Presencia Web Comercial (48-72h)',
    ai: '02 / Automatización & Agentes IA (WhatsApp / Turnos)',
    erp: '03 / Consultoría & Sistemas ERP a Medida',
    custom: '04 / Ingeniería de Software Especializada'
  };

  const buildWhatsAppUrl = () => {
    const body = [
      `Hola Nicolás. Solicito relevamiento técnico desde nicoguzmandev.com`,
      `— Área: ${divisionLabels[division]}`,
      `— Nombre: ${name || 'A confirmar'}`,
      `— Empresa / Rubro: ${company || 'A confirmar'}`,
      `— Detalle: ${scope || 'Coordinar evaluación inicial.'}`
    ].join('\n');
    return `https://wa.me/5491100000000?text=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full border border-[#222220] bg-[#0C0C0B]">
      {submitted ? (
        <div className="p-12 md:p-16 text-center space-y-6">
          <div className="font-mono-tech text-[11px] tracking-[0.16em] text-[#9A9994] uppercase">
            SOLICITUD REGISTRADA CORRECTAMENTE
          </div>
          <h3 className="text-2xl md:text-3xl font-normal tracking-[-0.02em] text-[#EDEDEC]">
            Relevamiento en Proceso de Revisión
          </h3>
          <p className="text-xs text-[#9A9994] max-w-md mx-auto leading-relaxed">
            Su consulta ha sido ingresada. Si desea iniciar la conversación de forma inmediata con los parámetros cargados, utilice el canal directo de WhatsApp a continuación.
          </p>
          <div className="pt-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-12 px-8 py-4 bg-[#EDEDEC] text-[#0C0C0B] text-xs font-medium tracking-[0.04em] hover:bg-white transition-colors"
            >
              <span>CONTINUAR EN WHATSAPP EJECUTIVO</span>
              <span className="font-mono-tech">—</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="divide-y divide-[#222220]">
          {/* Section 1: Division Selector */}
          <div className="p-8 md:p-10">
            <div className="font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase mb-5">
              01. SELECCIONE EL ÁREA DE INTERVENCIÓN
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#222220] divide-y sm:divide-y-0 sm:divide-x divide-[#222220]">
              {[
                { id: 'webs', num: '01', title: 'Presencia Web', sub: 'Comercios & Locales' },
                { id: 'ai', num: '02', title: 'Automatización IA', sub: 'WhatsApp & Agenda' },
                { id: 'erp', num: '03', title: 'Sistemas & ERP', sub: 'Pymes & Sucursales' },
                { id: 'custom', num: '04', title: 'Desarrollo a Medida', sub: 'Arquitectura Especial' }
              ].map((opt) => {
                const isSelected = division === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDivision(opt.id as any)}
                    className={`p-5 text-left transition-colors cursor-pointer relative ${
                      isSelected ? 'bg-[#161614]' : 'bg-[#0C0C0B] hover:bg-[#111110]'
                    }`}
                  >
                    {isSelected && <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#EDEDEC]" />}
                    <div className="font-mono-tech text-[10px] text-[#5E5D59] mb-2">
                      [{opt.num}]
                    </div>
                    <div className="text-xs font-medium text-[#EDEDEC]">
                      {opt.title}
                    </div>
                    <div className="text-[11px] text-[#9A9994] mt-0.5">
                      {opt.sub}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Client Identification */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222220]">
            <div className="p-8">
              <label className="block font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase mb-3">
                02. NOMBRE Y APELLIDO
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Martín Alcorta"
                className="w-full bg-transparent border-b border-[#2A2A27] py-2.5 text-sm text-[#EDEDEC] placeholder-[#484844] focus:outline-none focus:border-[#EDEDEC] transition-colors"
              />
            </div>

            <div className="p-8">
              <label className="block font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase mb-3">
                03. EMPRESA O RUBRO COMERCIAL
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ej. Distribuidora Norte S.R.L."
                className="w-full bg-transparent border-b border-[#2A2A27] py-2.5 text-sm text-[#EDEDEC] placeholder-[#484844] focus:outline-none focus:border-[#EDEDEC] transition-colors"
              />
            </div>

            <div className="p-8">
              <label className="block font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase mb-3">
                04. TELÉFONO / WHATSAPP
              </label>
              <input
                type="tel"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="+54 9 11 0000-0000"
                className="w-full bg-transparent border-b border-[#2A2A27] py-2.5 text-sm text-[#EDEDEC] placeholder-[#484844] focus:outline-none focus:border-[#EDEDEC] transition-colors"
              />
            </div>
          </div>

          {/* Section 3: Technical Scope */}
          <div className="p-8 md:p-10">
            <label className="block font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase mb-3">
              05. DESCRIPCIÓN DEL REQUERIMIENTO OPERATIVO
            </label>
            <textarea
              rows={3}
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              placeholder="Describa brevemente la situación actual de su negocio, volumen de operaciones o el objetivo que busca resolver..."
              className="w-full bg-[#111110] border border-[#222220] p-4 text-sm text-[#EDEDEC] placeholder-[#484844] focus:outline-none focus:border-[#EDEDEC] transition-colors resize-none"
            />
          </div>

          {/* Section 4: Actions */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#222220] bg-[#111110]">
            <div className="md:col-span-5 p-6 px-8 flex items-center font-mono-tech text-[11px] text-[#5E5D59]">
              RESPUESTA DIRECTA EN MENOS DE 2 HORAS HÁBILES
            </div>
            <div className="md:col-span-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full py-5 px-6 flex items-center justify-between font-mono-tech text-[11px] tracking-[0.08em] text-[#EDEDEC] hover:bg-[#191917] transition-colors"
              >
                <span>VÍA WHATSAPP</span>
                <span>/</span>
              </a>
            </div>
            <div className="md:col-span-4">
              <button
                type="submit"
                className="w-full h-full py-5 px-8 flex items-center justify-between bg-[#EDEDEC] text-[#0C0C0B] text-xs font-medium tracking-[0.04em] hover:bg-white transition-colors cursor-pointer"
              >
                <span>ENVIAR ESPECIFICACIÓN</span>
                <span className="font-mono-tech">—</span>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
