import React, { useState } from 'react';

export default function ContactForm() {
  const [rama, setRama] = useState<'webs' | 'ai' | 'erp' | 'custom'>('webs');
  const [nombre, setNombre] = useState('');
  const [negocio, setNegocio] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const ramaTitulos = {
    webs: '01. WEB PARA LOCAL / COMERCIO (48-72HS)',
    ai: '02. AUTOMATIZACIÓN & BOT IA WHATSAPP',
    erp: '03. SISTEMA DE GESTIÓN / ERP PARA PYME',
    custom: '04. OTRO PROYECTO A MEDIDA'
  };

  const armarLinkWhatsApp = () => {
    const texto = [
      `Hola Nico! Te escribo desde nicoguzmandev.com`,
      `— Me interesa: ${ramaTitulos[rama]}`,
      `— Nombre: ${nombre || 'Sin completar'}`,
      `— Negocio / Rubro: ${negocio || 'Sin completar'}`,
      `— Consulta: ${mensaje || 'Quiero pedirte presupuesto.'}`
    ].join('\n');
    return `https://wa.me/5491100000000?text=${encodeURIComponent(texto)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="w-full border-2 border-[#0A0A0A] bg-white">
      {enviado ? (
        <div className="p-12 md:p-16 text-center bg-[#002FA7] text-white space-y-6">
          <div className="font-mono-tech text-xs font-bold tracking-[0.16em] uppercase bg-[#0A0A0A] text-white px-3 py-1 inline-block">
            CONSULTA LISTA PARA ENVIAR
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            ¡PERFECTO! CONTINUEMOS POR WHATSAPP
          </h3>
          <p className="text-sm text-white/90 max-w-md mx-auto leading-relaxed">
            Hacé clic en el botón de abajo para abrir el chat con todos los datos que acabás de cargar y te respondo en el día.
          </p>
          <div className="pt-4">
            <a
              href={armarLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-10 px-8 py-5 bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors font-display text-xs font-extrabold uppercase tracking-[0.04em]"
            >
              <span>ABRIR CHAT EN WHATSAPP AHORA</span>
              <span className="font-mono-tech">[DIRECTO]</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="divide-y-2 divide-[#0A0A0A]">
          {/* Paso 1: Elegir Rama */}
          <div className="p-8 md:p-10 bg-[#F7F7F5]">
            <div className="font-mono-tech text-xs font-bold tracking-[0.14em] text-[#0A0A0A] uppercase mb-4">
              (01) ELEGÍ QUÉ NECESITA TU NEGOCIO HOY:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-[#0A0A0A] divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#0A0A0A] bg-white">
              {[
                { id: 'webs', num: '01', title: 'WEB PARA LOCAL', sub: 'Lista en 48 a 72 hs' },
                { id: 'ai', num: '02', title: 'BOT IA & TURNERO', sub: 'WhatsApp 24/7' },
                { id: 'erp', num: '03', title: 'SISTEMA ERP PYME', sub: 'Stock y sucursales' },
                { id: 'custom', num: '04', title: 'A MEDIDA', sub: 'Desarrollo especial' }
              ].map((opt) => {
                const isSelected = rama === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setRama(opt.id as any)}
                    className={`p-5 text-left transition-colors duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#002FA7] text-white'
                        : 'bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
                    }`}
                  >
                    <div className="font-display text-2xl font-extrabold tracking-tighter mb-2">
                      {opt.num}.
                    </div>
                    <div className="font-display text-xs font-extrabold uppercase tracking-tight">
                      {opt.title}
                    </div>
                    <div className="text-[11px] opacity-80 mt-0.5">
                      {opt.sub}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Paso 2: Datos de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#0A0A0A] bg-white">
            <div className="p-8">
              <label className="block font-mono-tech text-xs font-bold tracking-[0.12em] text-[#0A0A0A] uppercase mb-3">
                (02) TU NOMBRE
              </label>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Martín Gómez"
                className="w-full bg-transparent border-b-2 border-[#0A0A0A] py-3 text-sm font-bold text-[#0A0A0A] placeholder-[#8A8A84] focus:outline-none focus:border-[#002FA7]"
              />
            </div>

            <div className="p-8">
              <label className="block font-mono-tech text-xs font-bold tracking-[0.12em] text-[#0A0A0A] uppercase mb-3">
                (03) RUBRO O NOMBRE DEL LOCAL
              </label>
              <input
                type="text"
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
                placeholder="Ej. Ferretería San Martín / Estética"
                className="w-full bg-transparent border-b-2 border-[#0A0A0A] py-3 text-sm font-bold text-[#0A0A0A] placeholder-[#8A8A84] focus:outline-none focus:border-[#002FA7]"
              />
            </div>

            <div className="p-8">
              <label className="block font-mono-tech text-xs font-bold tracking-[0.12em] text-[#0A0A0A] uppercase mb-3">
                (04) TU WHATSAPP
              </label>
              <input
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Ej. 11 2345-6789"
                className="w-full bg-transparent border-b-2 border-[#0A0A0A] py-3 text-sm font-bold text-[#0A0A0A] placeholder-[#8A8A84] focus:outline-none focus:border-[#002FA7]"
              />
            </div>
          </div>

          {/* Paso 3: Mensaje */}
          <div className="p-8 md:p-10 bg-white">
            <label className="block font-mono-tech text-xs font-bold tracking-[0.12em] text-[#0A0A0A] uppercase mb-3">
              (05) CONTAME BREVEMENTE QUÉ BUSCÁS RESOLVER
            </label>
            <textarea
              rows={3}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Ej. Quiero armar la web de mi negocio, o necesito un bot que conteste precios y agende turnos solo..."
              className="w-full bg-[#F7F7F5] border-2 border-[#0A0A0A] p-4 text-sm font-medium text-[#0A0A0A] placeholder-[#8A8A84] focus:outline-none focus:border-[#002FA7] resize-none"
            />
          </div>

          {/* Paso 4: Botones de acción */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#0A0A0A]">
            <div className="md:col-span-5 p-6 px-8 bg-[#0A0A0A] text-white flex items-center font-mono-tech text-xs font-bold">
              TRATO DIRECTO — TE RESPONDO EN MENOS DE 2 HS
            </div>
            <div className="md:col-span-3 bg-white">
              <a
                href={armarLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full py-5 px-6 flex items-center justify-between font-mono-tech text-xs font-bold uppercase text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <span>MANDAR POR WHATSAPP</span>
                <span>/</span>
              </a>
            </div>
            <div className="md:col-span-4">
              <button
                type="submit"
                className="w-full h-full py-5 px-8 flex items-center justify-between bg-[#002FA7] text-white hover:bg-[#0A0A0A] transition-colors font-display text-xs font-extrabold uppercase tracking-[0.04em] cursor-pointer"
              >
                <span>PEDIR PRESUPUESTO</span>
                <span className="font-mono-tech">[ENVIAR]</span>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
