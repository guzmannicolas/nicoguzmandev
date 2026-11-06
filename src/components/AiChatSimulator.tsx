import React, { useState } from 'react';

interface CaseStudy {
  id: string;
  num: string;
  title: string;
  situation: string;
  clientMsg: string;
  botReply: string;
  systemAction: {
    sistema: string;
    operacion: string;
    resultado: string;
    tiempo: string;
  };
}

const CASES: CaseStudy[] = [
  {
    id: 'turno',
    num: '01',
    title: 'RESERVA DE TURNO AUTOMÁTICA',
    situation: 'El cliente escribe por WhatsApp pidiendo turno sin esperar a que alguien mire el teléfono.',
    clientMsg: 'Hola! ¿Tienen lugar mañana a la tarde para hacer corte y barba?',
    botReply: '¡Hola! Sí, me fijé recién en la agenda y para mañana me quedan dos lugares libres con Nico: a las 16:30 hs o a las 18:00 hs. El turno dura 45 minutos. ¿Cuál de los dos te anoto?',
    systemAction: {
      sistema: 'GOOGLE CALENDAR + WHATSAPP API',
      operacion: 'LECTURA DE HUECOS LIBRES Y RESERVA',
      resultado: 'TURNO BLOQUEADO AUTOMÁTICAMENTE [16:30 / 18:00]',
      tiempo: '0.4 SEGUNDOS'
    }
  },
  {
    id: 'precios',
    num: '02',
    title: 'CONSULTA DE PRECIOS Y CUOTAS',
    situation: 'El cliente pide valores actualizados, promociones con transferencia o cuotas.',
    clientMsg: 'Buenas! ¿Me pasás la lista de precios actualizada y si tienen descuento en efectivo?',
    botReply: '¡Buenas! Te paso los valores vigentes de esta semana:\n— Servicio Clásico: $14.000\n— Servicio Completo: $19.500\n— Pack Especial: $26.000\nAbonando en efectivo o transferencia tenés 10% de descuento, o 3 cuotas sin interés con Visa y Mastercard.',
    systemAction: {
      sistema: 'LISTA DE PRECIOS DEL NEGOCIO',
      operacion: 'RESPUESTA CON VALORES ACTUALIZADOS',
      resultado: 'CLIENTE INFORMADO AL INSTANTE SIN DEMORA',
      tiempo: '0.3 SEGUNDOS'
    }
  },
  {
    id: 'domingo',
    num: '03',
    title: 'VENTA UN DOMINGO A LAS 23:30 HS',
    situation: 'Un cliente escribe fuera de horario comercial cuando tu competencia no contesta.',
    clientMsg: 'Hola, necesito pedir presupuesto urgente para cambiar las luminarias de dos locales en Zona Norte.',
    botReply: '¡Hola! Hacemos entregas en toda Zona Norte en 24hs desde nuestro depósito. Ya dejé tu pedido cargado como prioridad para que mañana a las 08:30 hs te llamemos con el presupuesto cerrado. Si tenés las cantidades o fotos del local, mandalas ahora mismo así ya quedan en tu carpeta.',
    systemAction: {
      sistema: 'PLANILLA DE VENTAS / CRM',
      operacion: 'CAPTURA DE CLIENTE FUERA DE HORARIO',
      resultado: 'VENTA ASEGURADA ANTES DEL LUNES A LA MAÑANA',
      tiempo: '0.4 SEGUNDOS'
    }
  }
];

export default function AiChatSimulator() {
  const [activeId, setActiveId] = useState<string>('turno');
  const current = CASES.find((c) => c.id === activeId) || CASES[0];

  return (
    <div className="w-full border-2 border-[#0A0A0A] bg-white">
      {/* Header Bar */}
      <div className="p-6 md:px-10 md:py-7 border-b-2 border-[#0A0A0A] bg-[#002FA7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono-tech text-xs font-bold tracking-[0.14em] text-white/80 uppercase block mb-1">
            SIMULADOR DE ATENCIÓN AUTOMÁTICA EN VIVO
          </span>
          <span className="font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight">
            CÓMO RESPONDE TU WHATSAPP CON INTELIGENCIA ARTIFICIAL
          </span>
        </div>
        <div className="font-mono-tech text-xs font-bold bg-[#0A0A0A] text-white px-4 py-2">
          ACTIVO 24/7 — 365 DÍAS
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0A0A]">
        {/* Left Selector Column (4 cols) */}
        <div className="lg:col-span-4 divide-y-2 divide-[#0A0A0A] bg-[#F7F7F5]">
          <div className="p-5 px-6 font-mono-tech text-xs font-bold tracking-[0.14em] text-[#0A0A0A] uppercase bg-white">
            Hacé clic para probar cada caso:
          </div>
          {CASES.map((c) => {
            const isSelected = c.id === activeId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                className={`w-full p-6 md:p-8 text-left transition-colors duration-200 cursor-pointer block ${
                  isSelected
                    ? 'bg-[#0A0A0A] text-white'
                    : 'bg-[#F7F7F5] text-[#0A0A0A] hover:bg-[#002FA7] hover:text-white'
                }`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-display text-3xl font-extrabold tracking-tighter">
                    {c.num}.
                  </span>
                  {isSelected && (
                    <span className="font-mono-tech text-[10px] font-bold bg-[#002FA7] text-white px-2 py-0.5">
                      SELECCIONADO
                    </span>
                  )}
                </div>
                <div className="font-display text-sm font-extrabold uppercase tracking-tight mb-2">
                  {c.title}
                </div>
                <p className="text-xs opacity-80 leading-relaxed">
                  {c.situation}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Transcript & Backend Log (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between divide-y-2 divide-[#0A0A0A] bg-white">
          <div className="p-8 md:p-12 space-y-8">
            {/* Incoming Client Message */}
            <div className="border-l-4 border-[#0A0A0A] pl-6 py-2">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-xs font-bold tracking-[0.12em] text-[#52524E] uppercase">
                  [01] MENSAJE DEL CLIENTE EN TU WHATSAPP
                </span>
                <span className="font-mono-tech text-xs font-bold text-[#0A0A0A]">
                  ENTRANTE
                </span>
              </div>
              <p className="font-display text-lg md:text-xl font-bold text-[#0A0A0A] leading-snug">
                “{current.clientMsg}”
              </p>
            </div>

            {/* AI Agent Response */}
            <div className="bg-[#002FA7] text-white p-6 md:p-8 border-2 border-[#0A0A0A]">
              <div className="flex items-center justify-between border-b border-white/25 pb-3 mb-4">
                <span className="font-mono-tech text-xs font-bold tracking-[0.12em] uppercase">
                  [02] RESPUESTA AUTOMÁTICA DE TU AGENTE IA
                </span>
                <span className="font-mono-tech text-xs font-bold bg-white text-[#002FA7] px-2 py-0.5">
                  EN {current.systemAction.tiempo}
                </span>
              </div>
              <p className="text-sm md:text-base text-white leading-relaxed whitespace-pre-line font-medium">
                {current.botReply}
              </p>
            </div>
          </div>

          {/* System Action Bar */}
          <div className="p-8 bg-[#0A0A0A] text-white">
            <div className="font-mono-tech text-[10px] font-bold tracking-[0.16em] text-white/60 uppercase mb-4">
              QUÉ HIZO EL SISTEMA POR DETRÁS (SIN QUE VOS TOQUES EL CELULAR):
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/20">
              <div>
                <div className="font-mono-tech text-[10px] text-white/60 mb-1">CONECTADO CON</div>
                <div className="font-mono-tech text-xs font-bold text-white">{current.systemAction.sistema}</div>
              </div>
              <div>
                <div className="font-mono-tech text-[10px] text-white/60 mb-1">ACCIÓN EJECUTADA</div>
                <div className="font-mono-tech text-xs font-bold text-white">{current.systemAction.operacion}</div>
              </div>
              <div>
                <div className="font-mono-tech text-[10px] text-white/60 mb-1">RESULTADO COMERCIAL</div>
                <div className="font-mono-tech text-xs font-bold text-[#F7F7F5] underline">{current.systemAction.resultado}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
