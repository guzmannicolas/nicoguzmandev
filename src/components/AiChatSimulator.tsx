import React, { useState } from 'react';

interface Scenario {
  id: string;
  code: string;
  title: string;
  context: string;
  clientInput: string;
  agentResponse: string;
  systemEvent: {
    module: string;
    operation: string;
    payload: string;
    latency: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: 'booking',
    code: 'CASO 01',
    title: 'Coordinación y Reserva de Turno',
    context: 'Cliente consulta disponibilidad para el día siguiente sin intervención de recepcionista.',
    clientInput: 'Buenas tardes. ¿Tienen disponibilidad mañana por la tarde para realizar un servicio completo?',
    agentResponse: 'Buenas tardes. Verifiqué nuestra agenda en tiempo real y contamos con dos bloques disponibles para mañana: a las 16:30 hs o a las 18:00 hs. El servicio tiene una duración de 45 minutos. ¿En cuál de los dos horarios prefiere que deje registrada su reserva?',
    systemEvent: {
      module: 'GOOGLE CALENDAR API / MOTOR DE TURNOS',
      operation: 'CONSULTA DE DISPONIBILIDAD & BLOQUEO PREVENTIVO',
      payload: 'SLOTS LIBRES DETECTADOS: [16:30, 18:00] — DURACIÓN: 45M',
      latency: '380 MS'
    }
  },
  {
    id: 'pricing',
    code: 'CASO 02',
    title: 'Cotización Comercial sobre Catálogo',
    context: 'Prospecto solicita detalle de tarifas, alcances y medios de pago vigentes.',
    clientInput: 'Hola, quisiera conocer los valores actualizados de los servicios y si trabajan con cuotas.',
    agentResponse: 'Por supuesto. Le detallo nuestros aranceles vigentes:\n— Servicio Estándar: $12.000\n— Servicio Integral Completo: $17.000\n— Programa Corporativo / Premium: $22.000\nAceptamos transferencias, efectivo (10% de bonificación) y tarjetas de crédito en hasta 3 cuotas sin interés.',
    systemEvent: {
      module: 'BASE DE CONOCIMIENTO COMERCIAL',
      operation: 'EXTRACCIÓN DE LISTA DE PRECIOS VIGENTE',
      payload: 'DOCUMENTO: TARIFARIO_Q4 — CONDICIONES FINANCIERAS ACTIVAS',
      latency: '290 MS'
    }
  },
  {
    id: 'afterhours',
    code: 'CASO 03',
    title: 'Captura de Lead Fuera de Horario Comercial',
    context: 'Consulta entrante un domingo a las 23:15 hs que normalmente se perdería hasta el lunes.',
    clientInput: 'Hola, necesito presupuesto urgente para equipar dos oficinas esta semana. ¿Están en zona norte?',
    agentResponse: 'Hola. Nuestro centro operativo se encuentra en Av. del Libertador 2400, con entregas directas en toda Zona Norte en 24 hs. Dejé registrada su solicitud con prioridad comercial para que mañana a las 08:30 hs un ejecutivo le envíe la cotización formal. Si desea adelantar las medidas o cantidades por este medio, ya quedan anexadas a su ficha.',
    systemEvent: {
      module: 'CRM / REGISTRO DE OPORTUNIDADES',
      operation: 'ALTA DE PROSPECTO CALIFICADO & ALERTA COMERCIAL',
      payload: 'PRIORIDAD: ALTA — HORARIO DE ENTRADA: 23:15 HS',
      latency: '410 MS'
    }
  }
];

export default function AiChatSimulator() {
  const [activeId, setActiveId] = useState<string>('booking');
  const current = SCENARIOS.find(s => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="w-full border border-[#222220] bg-[#0C0C0B]">
      {/* Top Bar */}
      <div className="px-8 py-5 border-b border-[#222220] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111110]">
        <div>
          <span className="font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase block">
            DEMOSTRACIÓN DE PROTOCOLO CONVERSACIONAL
          </span>
          <span className="text-sm font-medium text-[#EDEDEC]">
            Procesamiento en Lenguaje Natural sobre WhatsApp Business API
          </span>
        </div>
        <div className="font-mono-tech text-[11px] text-[#9A9994] tracking-[0.08em]">
          OPERACIÓN CONTINUA: 24H / 365D
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#222220]">
        {/* Left Column: Scenario Selector */}
        <div className="lg:col-span-4 divide-y divide-[#222220] bg-[#0C0C0B]">
          <div className="p-6 font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase">
            SELECCIONAR ESCENARIO DE PRUEBA
          </div>
          {SCENARIOS.map((sc) => {
            const isSelected = sc.id === activeId;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setActiveId(sc.id)}
                className={`w-full p-6 text-left transition-colors cursor-pointer block ${
                  isSelected ? 'bg-[#151513]' : 'bg-[#0C0C0B] hover:bg-[#111110]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59]">
                    [{sc.code}]
                  </span>
                  {isSelected && (
                    <span className="font-mono-tech text-[10px] tracking-[0.12em] text-[#EDEDEC]">
                      ACTIVO
                    </span>
                  )}
                </div>
                <div className="text-sm font-medium text-[#EDEDEC] mb-1.5">
                  {sc.title}
                </div>
                <p className="text-xs text-[#9A9994] leading-relaxed">
                  {sc.context}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Transcript & System Telemetry */}
        <div className="lg:col-span-8 flex flex-col justify-between divide-y divide-[#222220] bg-[#0C0C0B]">
          {/* Dialogue Transcript */}
          <div className="p-8 md:p-10 space-y-8">
            {/* Client Message */}
            <div className="border-l border-[#363632] pl-6 py-1">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59] uppercase">
                  MENSAJE ENTRANTE — CLIENTE (WHATSAPP)
                </span>
                <span className="font-mono-tech text-[10px] text-[#5E5D59]">
                  T+0.0S
                </span>
              </div>
              <p className="text-sm text-[#9A9994] leading-relaxed">
                “{current.clientInput}”
              </p>
            </div>

            {/* Agent Response */}
            <div className="border-l-2 border-[#EDEDEC] pl-6 py-1 bg-[#121210] p-6">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono-tech text-[10px] tracking-[0.14em] text-[#EDEDEC] uppercase">
                  RESPUESTA AUTOMÁTICA — AGENTE ENTRENADO
                </span>
                <span className="font-mono-tech text-[10px] text-[#9A9994]">
                  LATENCIA: {current.systemEvent.latency}
                </span>
              </div>
              <p className="text-sm text-[#EDEDEC] leading-relaxed whitespace-pre-line">
                {current.agentResponse}
              </p>
            </div>
          </div>

          {/* System Backend Execution Log */}
          <div className="p-8 bg-[#111110]">
            <div className="font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase mb-4">
              EJECUCIÓN INTERNA DEL SISTEMA (SIN INTERVENCIÓN HUMANA)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3 border-t border-[#222220]">
              <div>
                <div className="font-mono-tech text-[10px] text-[#5E5D59] mb-1">MÓDULO CONECTADO</div>
                <div className="font-mono-tech text-xs text-[#EDEDEC]">{current.systemEvent.module}</div>
              </div>
              <div>
                <div className="font-mono-tech text-[10px] text-[#5E5D59] mb-1">ACCIÓN EJECUTADA</div>
                <div className="font-mono-tech text-xs text-[#EDEDEC]">{current.systemEvent.operation}</div>
              </div>
              <div>
                <div className="font-mono-tech text-[10px] text-[#5E5D59] mb-1">REGISTRO OPERATIVO</div>
                <div className="font-mono-tech text-xs text-[#9A9994]">{current.systemEvent.payload}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
