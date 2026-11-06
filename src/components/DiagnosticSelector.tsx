import React, { useState } from 'react';

interface BranchItem {
  id: 'webs' | 'ai' | 'erp';
  num: string;
  tag: string;
  shortTitle: string;
  headline: string;
  summary: string;
  targetAudience: string;
  painPoint: string;
  solution: string;
  deliverables: { code: string; title: string; desc: string }[];
  timeline: string;
  ctaLabel: string;
  ctaUrl: string;
  waText: string;
}

const BRANCHES: BranchItem[] = [
  {
    id: 'webs',
    num: '01',
    tag: 'RAMA 01 — COMERCIOS Y LOCALES',
    shortTitle: 'WEBS PARA LOCALES',
    headline: 'TU NEGOCIO NO PUEDE DEPENDER SOLO DE UN PERFIL DE INSTAGRAM.',
    summary: 'Para locales, comercios, gastronomía y profesionales que todavía no tienen web propia o tienen una página vieja que tarda en cargar.',
    targetAudience: 'Barberías, restaurantes, cafeterías, ferreterías, talleres mecánicos, inmobiliarias, estudios de tatuajes y profesionales.',
    painPoint: 'Cuando alguien busca tu rubro en Google en tu zona y no tenés web, le termina comprando al local de la otra cuadra. Y en Instagram los clientes se cansan de preguntar precios o horarios que no están a la vista.',
    solution: 'Te armamos una web ultrarrápida, pensada 100% para el celular, con tu carta o catálogo de precios, ubicación en Google Maps y botón directo para que te pidan o reserven por WhatsApp.',
    deliverables: [
      {
        code: '01',
        title: 'DISEÑO POR RUBRO PROBADO',
        desc: 'Trabajamos sobre 8 estructuras comerciales listas para personalizar con tu marca, fotos y lista de precios.'
      },
      {
        code: '02',
        title: 'CARGA EN MENOS DE 1 SEGUNDO',
        desc: 'Programada en Astro (sin WordPress pesado ni plugins que se rompen). Abre al instante en cualquier celular.'
      },
      {
        code: '03',
        title: 'POSICIONAMIENTO EN GOOGLE MAPS',
        desc: 'Configurada para que te encuentren cuando busquen tu servicio o comercio en tu barrio o ciudad.'
      },
      {
        code: '04',
        title: 'DOMINIO .COM / .COM.AR INCLUIDO',
        desc: 'Nos ocupamos de todo el alta técnica, certificado de seguridad y servidor de alta velocidad en Vercel.'
      }
    ],
    timeline: 'LISTA EN 48 A 72 HORAS',
    ctaLabel: 'VER EL SHOWROOM DE 8 DEMOS',
    ctaUrl: 'https://templates.nicoguzmandev.com',
    waText: 'Hola Nico! Me interesa hacer la web para mi local/comercio (Rama 01).'
  },
  {
    id: 'ai',
    num: '02',
    tag: 'RAMA 02 — ATENCIÓN Y TURNOS 24/7',
    shortTitle: 'AUTOMATIZACIÓN & IA',
    headline: 'SI TARDÁS DOS HORAS EN RESPONDER UN MENSAJE, EL CLIENTE YA COMPRÓ EN OTRO LADO.',
    summary: 'Para negocios que SÍ tienen web o Instagram activo con consultas todos los días, pero no dan abasto para contestar rápido o agendar turnos.',
    targetAudience: 'Consultorios, estéticas, peluquerías, inmobiliarias, talleres y comercios con alto volumen de mensajes diarios.',
    painPoint: 'Contestás mensajes a las apuradas mientras atendés, perdés ventas los domingos o a la noche, y perdés horas anotando turnos a mano o recordándole a la gente que no falte.',
    solution: 'Implementamos un agente con Inteligencia Artificial en tu WhatsApp que responde en segundos las 24hs, pasa presupuestos según tu lista de precios y agenda turnos solo en tu Google Calendar.',
    deliverables: [
      {
        code: '01',
        title: 'AGENTE IA EN WHATSAPP 24/7',
        desc: 'No es un menú rígido de "marcá 1 o 2". Entiende mensajes escritos y audios como una recepcionista real.'
      },
      {
        code: '02',
        title: 'TURNERO CON GOOGLE CALENDAR',
        desc: 'Revisa qué horarios tenés libres en tiempo real, agenda al cliente y bloquea el hueco automáticamente.'
      },
      {
        code: '03',
        title: 'RECORDATORIOS ANTI-AUSENCIA',
        desc: 'Le avisa al cliente antes del turno por WhatsApp para confirmar asistencia y evitar huecos vacíos.'
      },
      {
        code: '04',
        title: 'DERIVACIÓN A HUMANO',
        desc: 'Cuando un cliente hace una consulta compleja o quiere cerrar algo especial, te pasa la charla limpia a vos.'
      }
    ],
    timeline: 'ACTIVO EN 5 A 7 DÍAS',
    ctaLabel: 'PROBAR SIMULADOR DE WHATSAPP IA',
    ctaUrl: '#simulador-ia',
    waText: 'Hola Nico! Quiero automatizar las respuestas y turnos de mi negocio por WhatsApp con IA (Rama 02).'
  },
  {
    id: 'erp',
    num: '03',
    tag: 'RAMA 03 — PYMES Y MULTI-SUCURSAL',
    shortTitle: 'CONSULTORÍA & ERP',
    headline: 'CUANDO TU PYME CRECE, LAS PLANILLAS DE EXCEL SE CONVIERTEN EN UN PELIGRO.',
    summary: 'Para empresas con varias sucursales, depósito o equipo de trabajo donde el control de stock, caja y cuentas corrientes necesita orden real.',
    targetAudience: 'Distribuidoras, cadenas de locales, mayoristas, ferreterías grandes, logística y pymes en expansión.',
    painPoint: 'Mercadería que no coincide entre el depósito y el mostrador, empleados pisando fórmulas en Excel, cierres de caja confusos y sistemas enlatados que te cobran fortuna por cada usuario.',
    solution: 'Desarrollamos tu propio sistema de gestión (ERP) 100% a la medida de cómo trabaja tu empresa. Controlás stock, sucursales, facturación ARCA/AFIP y permisos desde el celular o la computadora.',
    deliverables: [
      {
        code: '01',
        title: 'STOCK MULTI-SUCURSAL EN VIVO',
        desc: 'Sabés exactamente cuánta mercadería hay en cada local o galpón, con alertas antes de quedarte sin stock.'
      },
      {
        code: '02',
        title: 'CAJAS, VENTAS Y FACTURACIÓN',
        desc: 'Arqueos de caja por turno, cuentas corrientes de clientes y proveedores, y conexión con facturación electrónica.'
      },
      {
        code: '03',
        title: 'ROLES Y PERMISOS POR EMPLEADO',
        desc: 'Cada vendedor o cajero ve únicamente lo que le corresponde; vos tenés el tablero gerencial completo.'
      },
      {
        code: '04',
        title: 'SIN LICENCIAS MENSUALES POR USUARIO',
        desc: 'El sistema es propiedad de tu empresa. Podés sumar 5 o 50 empleados sin pagar alquiler por cabeza.'
      }
    ],
    timeline: 'ENTREGAS EN 2 A 4 SEMANAS',
    ctaLabel: 'VER TABLERO MULTI-SUCURSAL',
    ctaUrl: '#tablero-erp',
    waText: 'Hola Nico! Tengo una pyme y necesito consultoría para armar un sistema de gestión / ERP a medida (Rama 03).'
  }
];

export default function DiagnosticSelector() {
  const [selected, setSelected] = useState<'webs' | 'ai' | 'erp'>('webs');
  const current = BRANCHES.find((b) => b.id === selected) || BRANCHES[0];

  return (
    <div className="w-full border-2 border-[#0A0A0A] bg-white">
      {/* Top 3 Brutalist Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#0A0A0A] border-b-2 border-[#0A0A0A]">
        {BRANCHES.map((item) => {
          const isActive = item.id === selected;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item.id)}
              className={`p-6 md:p-8 text-left transition-colors duration-200 cursor-pointer flex flex-col justify-between min-h-[140px] ${
                isActive
                  ? 'bg-[#002FA7] text-white'
                  : 'bg-[#F7F7F5] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
              }`}
            >
              <div className="flex items-baseline justify-between w-full mb-4">
                <span className="font-mono-tech text-xs font-bold tracking-[0.14em] uppercase opacity-80">
                  {item.tag}
                </span>
                <span className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter leading-none">
                  {item.num}
                </span>
              </div>
              <div className="font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight">
                {item.shortTitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0A0A]">
        {/* Left Cobalt / Stark Column (5 cols) */}
        <div className="lg:col-span-5 p-8 md:p-12 bg-[#0A0A0A] text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-8">
              <span className="font-mono-tech text-xs font-bold tracking-[0.12em] text-white/70">
                DIAGNÓSTICO DE ETAPA [{current.num}/03]
              </span>
              <span className="font-mono-tech text-xs font-bold bg-[#002FA7] text-white px-2.5 py-1">
                {current.timeline}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[-0.03em] leading-[1.02] mb-6">
              {current.headline}
            </h3>

            <p className="text-sm text-[#D4D4CE] leading-relaxed mb-8">
              {current.summary}
            </p>

            <div className="border-t border-white/20 pt-6">
              <div className="font-mono-tech text-[10px] font-bold tracking-[0.16em] text-white/60 uppercase mb-2">
                IDEAL PARA:
              </div>
              <p className="text-xs text-white leading-relaxed font-medium">
                {current.targetAudience}
              </p>
            </div>
          </div>

          <div className="pt-10 mt-10 border-t border-white/20 space-y-3">
            <a
              href={`https://wa.me/5491100000000?text=${encodeURIComponent(current.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#002FA7] text-white hover:bg-white hover:text-[#0A0A0A] transition-colors duration-200 flex items-center justify-between font-display text-xs font-extrabold uppercase tracking-[0.04em]"
            >
              <span>PEDIR PRESUPUESTO POR WHATSAPP</span>
              <span className="font-mono-tech">[DIRECTO]</span>
            </a>

            <a
              href={current.ctaUrl}
              target={current.ctaUrl.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="w-full py-4 px-6 border border-white/30 text-white hover:bg-white hover:text-[#0A0A0A] transition-colors duration-200 flex items-center justify-between font-mono-tech text-xs font-bold uppercase tracking-[0.06em]"
            >
              <span>{current.ctaLabel}</span>
              <span>—</span>
            </a>
          </div>
        </div>

        {/* Right Specification Column (7 cols) */}
        <div className="lg:col-span-7 divide-y-2 divide-[#0A0A0A] bg-white text-[#0A0A0A]">
          {/* Pain vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#0A0A0A]">
            <div className="p-8 md:p-10 bg-[#F7F7F5]">
              <div className="font-mono-tech text-xs font-bold tracking-[0.14em] text-[#52524E] uppercase mb-3">
                [A] EL PROBLEMA HOY
              </div>
              <p className="text-xs sm:text-sm text-[#0A0A0A] leading-relaxed">
                {current.painPoint}
              </p>
            </div>
            <div className="p-8 md:p-10 bg-[#002FA7] text-white">
              <div className="font-mono-tech text-xs font-bold tracking-[0.14em] text-white/80 uppercase mb-3">
                [B] CÓMO LO RESOLVEMOS
              </div>
              <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                {current.solution}
              </p>
            </div>
          </div>

          {/* 2x2 Deliverables Grid */}
          <div>
            <div className="px-8 py-4 border-b-2 border-[#0A0A0A] bg-[#F7F7F5] flex items-center justify-between">
              <span className="font-mono-tech text-xs font-bold tracking-[0.14em] text-[#0A0A0A] uppercase">
                QUÉ INCLUYE ESTA IMPLEMENTACIÓN
              </span>
              <span className="font-mono-tech text-xs font-bold text-[#002FA7]">
                04 ENTREGABLES CLAVE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#0A0A0A]">
              {current.deliverables.slice(0, 2).map((d) => (
                <div key={d.code} className="p-8 hover:bg-[#F7F7F5] transition-colors">
                  <div className="font-display text-3xl font-extrabold text-[#002FA7] tracking-tighter mb-2">
                    {d.code}.
                  </div>
                  <div className="font-display text-sm font-extrabold uppercase tracking-tight text-[#0A0A0A] mb-2">
                    {d.title}
                  </div>
                  <p className="text-xs text-[#52524E] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#0A0A0A] border-t-2 border-[#0A0A0A]">
              {current.deliverables.slice(2, 4).map((d) => (
                <div key={d.code} className="p-8 hover:bg-[#F7F7F5] transition-colors">
                  <div className="font-display text-3xl font-extrabold text-[#002FA7] tracking-tighter mb-2">
                    {d.code}.
                  </div>
                  <div className="font-display text-sm font-extrabold uppercase tracking-tight text-[#0A0A0A] mb-2">
                    {d.title}
                  </div>
                  <p className="text-xs text-[#52524E] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
