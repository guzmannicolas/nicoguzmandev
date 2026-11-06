import React, { useState } from 'react';

interface PracticeArea {
  id: 'webs' | 'ai' | 'erp';
  numeral: string;
  code: string;
  label: string;
  title: string;
  subtitle: string;
  clientProfile: string;
  diagnosis: string;
  architecture: string;
  deliverables: { index: string; title: string; spec: string }[];
  timeline: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  whatsappMessage: string;
}

const AREAS: PracticeArea[] = [
  {
    id: 'webs',
    numeral: 'I',
    code: '01 / PRESENCIA WEB COMERCIAL',
    label: 'Comercios & Profesionales',
    title: 'Infraestructura Web de Alta Conversión para Negocios Físicos y Servicios',
    subtitle: 'Para empresas y locales comerciales que carecen de presencia propia en buscadores o dependen exclusivamente de redes sociales.',
    clientProfile: 'Gastronomía, estudios profesionales, comercios minoristas, inmobiliarias y servicios técnicos.',
    diagnosis: 'La dependencia exclusiva de Instagram o de sitios obsoletos impide captar la demanda activa en Google. Cuando un potencial cliente busca un servicio en su zona y no encuentra información estructurada, precios ni contacto inmediato, la venta se transfiere a la competencia.',
    architecture: 'Implementamos sitios estáticos de respuesta instantánea bajo arquitectura Astro. Diseñados para dispositivos móviles, estructurados para posicionamiento local en Google Maps y vinculados directamente al canal de cierre en WhatsApp.',
    deliverables: [
      {
        index: '01',
        title: 'Arquitectura Sectorial Probada',
        spec: 'Adaptación sobre 8 matrices comerciales diseñadas específicamente según los flujos de compra de cada rubro.'
      },
      {
        index: '02',
        title: 'Rendimiento Sub-Segundo',
        spec: 'Carga inmediata en redes móviles sin bases de datos vulnerables ni mantenimiento de plugins.'
      },
      {
        index: '03',
        title: 'Indexación Local & Catálogo',
        spec: 'Estructura semántica para buscadores, integración cartográfica, horarios operativos y carta/catálogo digital.'
      },
      {
        index: '04',
        title: 'Despliegue Llave en Mano',
        spec: 'Configuración integral de dominio propio, certificados de seguridad SSL y distribución global en Vercel.'
      }
    ],
    timeline: '48 A 72 HORAS HÁBILES',
    primaryCtaText: 'EXPLORAR CATÁLOGO DE DEMOS',
    primaryCtaLink: 'https://templates.nicoguzmandev.com',
    whatsappMessage: 'Hola Nicolás. Me interesa implementar una web comercial para mi negocio (Rama 01).'
  },
  {
    id: 'ai',
    numeral: 'II',
    code: '02 / AUTOMATIZACIÓN & AGENTES IA',
    label: 'Atención & Agenda 24/7',
    title: 'Sistemas Conversacionales y Gestión Autónoma de Turnos sobre WhatsApp',
    subtitle: 'Para negocios con flujo constante de consultas en redes o web que pierden cierres por demoras en la atención o coordinación manual.',
    clientProfile: 'Clínicas, centros de estética, estudios, talleres, comercios con alto volumen de consulta diaria.',
    diagnosis: 'El 78% de las operaciones comerciales se concretan con el primer proveedor que responde con precisión. Demorar horas en contestar mensajes, cotizar manualmente o coordinar horarios de forma artesanal genera una pérdida silenciosa de facturación todos los días.',
    architecture: 'Desplegamos agentes de inteligencia artificial entrenados sobre la base de conocimiento real del negocio. Operan las 24 horas en WhatsApp con lenguaje natural, resuelven consultas comerciales, cotizan servicios y registran reservas en Google Calendar sin intervención humana.',
    deliverables: [
      {
        index: '01',
        title: 'Entrenamiento con Datos Propios',
        spec: 'Configuración del modelo sobre tarifas, condiciones comerciales, catálogo y criterios reales de la empresa.'
      },
      {
        index: '02',
        title: 'Sincronización de Agenda en Vivo',
        spec: 'Lectura de disponibilidad y creación automática de eventos en Google Calendar con confirmación instantánea.'
      },
      {
        index: '03',
        title: 'Atención en Lenguaje Natural',
        spec: 'Comprensión contextual avanzada que reemplaza los antiguos menús numéricos rígidos y frustrantes.'
      },
      {
        index: '04',
        title: 'Protocolo de Derivación Humana',
        spec: 'Transferencia ordenada al equipo comercial cuando una operación requiere intervención personalizada.'
      }
    ],
    timeline: '5 A 7 DÍAS HÁBILES',
    primaryCtaText: 'VER TRANSCRIPCIÓN OPERATIVA',
    primaryCtaLink: '#protocolo-ia',
    whatsappMessage: 'Hola Nicolás. Quiero evaluar la automatización de atención y agenda con IA en WhatsApp (Rama 02).'
  },
  {
    id: 'erp',
    numeral: 'III',
    code: '03 / CONSULTORÍA & SISTEMAS ERP',
    label: 'Pymes & Multi-Sucursal',
    title: 'Ingeniería de Software a Medida y Control Operativo Centralizado',
    subtitle: 'Para pequeñas y medianas empresas con múltiples sucursales, depósitos o procesos críticos donde las planillas de cálculo resultan inviables.',
    clientProfile: 'Distribuidoras, cadenas comerciales, industrias ligeras, logística y empresas de servicios con personal en campo.',
    diagnosis: 'A medida que una empresa escala en volumen o puntos de venta, el uso de planillas aisladas y software enlatado rígido produce diferencias de inventario, falta de trazabilidad en caja y ceguera gerencial para tomar decisiones.',
    architecture: 'Diseñamos y construimos sistemas de gestión (ERP / CRM / Intranets) adaptados exactamente a la lógica operativa de su organización. Propiedad total del código fuente, sin costos de licencias mensuales por cantidad de usuarios.',
    deliverables: [
      {
        index: '01',
        title: 'Control de Stock Multi-Depósito',
        spec: 'Trazabilidad exacta de mercadería, transferencias internas, alertas de reposición y auditoría de movimientos.'
      },
      {
        index: '02',
        title: 'Gestión Comercial y Tesorería',
        spec: 'Consolidación de órdenes de venta, cuentas corrientes de clientes/proveedores y arqueos de caja por sucursal.'
      },
      {
        index: '03',
        title: 'Permisos y Roles Jerárquicos',
        spec: 'Vistas restringidas según función operativa: operadores de mostrador, encargados de planta y dirección general.'
      },
      {
        index: '04',
        title: 'Tablero Ejecutivo en Tiempo Real',
        spec: 'Métricas financieras, rentabilidad por línea de producto y reportes exportables para contabilidad.'
      }
    ],
    timeline: 'SPRINTS DE 2 A 4 SEMANAS',
    primaryCtaText: 'EXAMINAR ARQUITECTURA ERP',
    primaryCtaLink: '#sistema-erp',
    whatsappMessage: 'Hola Nicolás. Necesito consultoría para desarrollar un sistema de gestión / ERP a medida (Rama 03).'
  }
];

export default function DiagnosticSelector() {
  const [selectedId, setSelectedId] = useState<'webs' | 'ai' | 'erp'>('webs');
  const current = AREAS.find(a => a.id === selectedId) || AREAS[0];

  return (
    <div className="w-full border border-[#222220] bg-[#0C0C0B]">
      {/* Top Selector Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222220] border-b border-[#222220]">
        {AREAS.map((area) => {
          const isActive = area.id === selectedId;
          return (
            <button
              key={area.id}
              type="button"
              onClick={() => setSelectedId(area.id)}
              className={`p-6 md:p-8 text-left transition-colors cursor-pointer relative ${
                isActive ? 'bg-[#141412]' : 'bg-[#0C0C0B] hover:bg-[#111110]'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#EDEDEC]" />
              )}
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono-tech text-[11px] tracking-[0.14em] text-[#9A9994]">
                  {area.code}
                </span>
                <span className="font-serif-editorial italic text-xl text-[#5E5D59]">
                  {area.numeral}
                </span>
              </div>
              <div className="text-base font-medium text-[#EDEDEC] tracking-[-0.01em]">
                {area.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Dossier Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#222220]">
        {/* Left Column: Summary & Metadata */}
        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-[#0C0C0B]">
          <div>
            <div className="flex items-baseline justify-between border-b border-[#222220] pb-4 mb-8">
              <span className="font-mono-tech text-[11px] tracking-[0.14em] text-[#5E5D59] uppercase">
                ESPECIFICACIÓN DE ÁREA
              </span>
              <span className="font-mono-tech text-[11px] tracking-[0.1em] text-[#EDEDEC]">
                {current.code.split(' ')[0]} / 03
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-normal tracking-[-0.02em] text-[#EDEDEC] leading-[1.2] mb-5">
              {current.title}
            </h3>

            <p className="text-sm text-[#9A9994] leading-relaxed mb-8">
              {current.subtitle}
            </p>

            <div className="border-t border-[#222220] pt-6 space-y-4">
              <div>
                <div className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59] uppercase mb-1">
                  PERFIL DE IMPLEMENTACIÓN
                </div>
                <div className="text-xs text-[#EDEDEC]">
                  {current.clientProfile}
                </div>
              </div>
              <div>
                <div className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59] uppercase mb-1">
                  TIEMPO ESTIMADO DE PUESTA EN MARCHA
                </div>
                <div className="font-mono-tech text-xs text-[#EDEDEC]">
                  {current.timeline}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 mt-10 border-t border-[#222220] space-y-3">
            <a
              href={`https://wa.me/5491100000000?text=${encodeURIComponent(current.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 bg-[#EDEDEC] text-[#0C0C0B] text-xs font-medium tracking-[0.04em] hover:bg-white transition-colors"
            >
              <span>SOLICITAR PROPUESTA POR WHATSAPP</span>
              <span className="font-mono-tech">—</span>
            </a>

            <a
              href={current.primaryCtaLink}
              target={current.primaryCtaLink.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 border border-[#363632] text-[#EDEDEC] text-xs font-mono-tech tracking-[0.08em] hover:bg-[#141412] transition-colors"
            >
              <span>{current.primaryCtaText}</span>
              <span>/</span>
            </a>
          </div>
        </div>

        {/* Right Column: Diagnosis, Architecture & Deliverables */}
        <div className="lg:col-span-7 divide-y divide-[#222220] bg-[#0C0C0B]">
          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#222220]">
            <div className="p-8 md:p-10">
              <div className="font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase mb-3">
                A. DIAGNÓSTICO DE SITUACIÓN
              </div>
              <p className="text-xs text-[#9A9994] leading-relaxed">
                {current.diagnosis}
              </p>
            </div>
            <div className="p-8 md:p-10 bg-[#111110]">
              <div className="font-mono-tech text-[10px] tracking-[0.16em] text-[#EDEDEC] uppercase mb-3">
                B. ARQUITECTURA DE SOLUCIÓN
              </div>
              <p className="text-xs text-[#EDEDEC] leading-relaxed">
                {current.architecture}
              </p>
            </div>
          </div>

          {/* Deliverables 2x2 Grid */}
          <div>
            <div className="px-8 py-4 border-b border-[#222220] font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase">
              ALCANCE TÉCNICO Y ENTREGABLES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#222220]">
              {current.deliverables.slice(0, 2).map((item) => (
                <div key={item.index} className="p-8">
                  <div className="font-mono-tech text-[11px] text-[#5E5D59] mb-2">
                    [{item.index}]
                  </div>
                  <div className="text-sm font-medium text-[#EDEDEC] mb-2">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#9A9994] leading-relaxed">
                    {item.spec}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#222220] border-t border-[#222220]">
              {current.deliverables.slice(2, 4).map((item) => (
                <div key={item.index} className="p-8">
                  <div className="font-mono-tech text-[11px] text-[#5E5D59] mb-2">
                    [{item.index}]
                  </div>
                  <div className="text-sm font-medium text-[#EDEDEC] mb-2">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#9A9994] leading-relaxed">
                    {item.spec}
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
