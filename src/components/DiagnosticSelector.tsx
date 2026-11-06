import React, { useState } from 'react';
import { Globe, Bot, Layers, ArrowRight, CheckCircle2, Zap, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

interface PillarOption {
  id: 'webs' | 'ai' | 'erp';
  icon: any;
  badge: string;
  badgeColor: string;
  title: string;
  targetUser: string;
  mainPain: string;
  solution: string;
  deliverables: string[];
  deliveryTime: string;
  ctaText: string;
  ctaLink: string;
  whatsappMessage: string;
}

const PILLARS: PillarOption[] = [
  {
    id: 'webs',
    icon: Globe,
    badge: 'Rama 1: Webs para Locales',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    title: 'Presencia Web de Alto Rendimiento para Comercios y Negocios',
    targetUser: 'Negocios sin web, que dependen solo de Instagram o con sitios lentos en WordPress.',
    mainPain: 'El 80% de los clientes busca en Google antes de ir a un local. Si no tenés una web rápida, le compraron a tu competencia.',
    solution: 'Desarrollamos una web moderna, ultra veloz y adaptada a móvil con catálogo, fotos, mapa y botón directo a tu WhatsApp.',
    deliverables: [
      'Diseño personalizado acorde a tu rubro (Basado en nuestros 8 templates comerciales probados)',
      '100% optimizado para celulares y carga en menos de 1 segundo',
      'Integración con Google Maps, horarios y enlace directo a WhatsApp',
      'Dominio propio, certificado SSL y hosting en la nube incluido'
    ],
    deliveryTime: 'Entrega lista para vender en 48 a 72 horas',
    ctaText: 'Ver Showroom de Templates en Vivo',
    ctaLink: 'https://templates.nicoguzmandev.com',
    whatsappMessage: 'Hola Nico! Me interesa una web profesional para mi local/negocio. ¿Podemos coordinar?'
  },
  {
    id: 'ai',
    icon: Bot,
    badge: 'Rama 2: Automatización & IA',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    title: 'Agentes de Inteligencia Artificial & Turneros Automáticos',
    targetUser: 'Negocios que SÍ tienen redes o web, pero tardan horas en responder o pierden ventas fuera de horario.',
    mainPain: 'El 78% de las compras se las lleva el primer negocio que responde. Responder con 30 minutos de demora es regalar el cliente.',
    solution: 'Implementamos un asistente inteligente que responde WhatsApp, cotiza en base a tu catálogo y agenda citas en Google Calendar 24/7.',
    deliverables: [
      'Agente IA entrenado con las preguntas y políticas exactas de tu negocio',
      'Atención automática 24/7 en WhatsApp (sin menús rígidos, responde con lenguaje natural)',
      'Sistema de turnos y reservas autogestionado con confirmación en Google Calendar',
      'Panel de registro de leads y notificaciones automáticas para reducir ausentismo'
    ],
    deliveryTime: 'Configurado y en producción en 5 a 7 días hábiles',
    ctaText: 'Ver Demo de Asistente IA',
    ctaLink: '#demo-ia',
    whatsappMessage: 'Hola Nico! Quiero automatizar la atención y turnos de mi negocio con un agente de WhatsApp/IA.'
  },
  {
    id: 'erp',
    icon: Layers,
    badge: 'Rama 3: Consultoría & ERP',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    title: 'Sistemas de Gestión & ERP a Medida para Pymes',
    targetUser: 'Empresas con múltiples sucursales, depósitos o donde las planillas de Excel ya no dan abasto.',
    mainPain: 'Stock desfasado, ventas duplicadas y falta de visibilidad operativa frenan el crecimiento de tu empresa.',
    solution: 'Construimos un software de gestión a la medida exacta de tus procesos operativos, sin pagar licencias abusivas por usuario en dólares.',
    deliverables: [
      'Control centralizado de inventario y stock sincronizado entre sucursales',
      'Módulo de ventas, facturación y seguimiento de pedidos en tiempo real',
      'Perfiles de acceso con permisos granulares para empleados y administradores',
      'Dashboard analítico con KPIs financieros y reportes exportables'
    ],
    deliveryTime: 'Planificado en sprints ágiles (2 a 4 semanas para versión 1.0)',
    ctaText: 'Agendar Consulta de Diagnóstico ERP',
    ctaLink: '#contacto',
    whatsappMessage: 'Hola Nico! Tengo una empresa/pyme y necesito consultoría para desarrollar un sistema ERP/gestión a medida.'
  }
];

export default function DiagnosticSelector() {
  const [selectedPillar, setSelectedPillar] = useState<'webs' | 'ai' | 'erp'>('webs');
  const active = PILLARS.find(p => p.id === selectedPillar) || PILLARS[0];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md mb-8">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          const isSelected = selectedPillar === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => setSelectedPillar(pillar.id)}
              className={`flex items-center gap-3.5 p-4 rounded-xl text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-zinc-800/90 text-white shadow-lg border border-white/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 border border-transparent'
              }`}
            >
              <div className={`p-2.5 rounded-lg ${
                pillar.id === 'webs' ? 'bg-sky-500/15 text-sky-400' :
                pillar.id === 'ai' ? 'bg-emerald-500/15 text-emerald-400' :
                'bg-purple-500/15 text-purple-400'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-zinc-400">{pillar.badge.split(':')[0]}</div>
                <div className="font-semibold text-sm truncate text-white">{pillar.id === 'webs' ? 'Webs para Locales' : pillar.id === 'ai' ? 'Automatización & IA' : 'Consultoría & ERP'}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Content Box */}
      <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/10 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className={`absolute top-0 right-0 w-96 h-96 blur-3xl opacity-20 pointer-events-none rounded-full ${
          active.id === 'webs' ? 'bg-sky-500' : active.id === 'ai' ? 'bg-emerald-500' : 'bg-purple-500'
        }`} />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${active.badgeColor}`}>
              {active.badge}
            </span>
            <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/60 px-3 py-1 rounded-full border border-zinc-800">
              <Clock className="w-3.5 h-3.5 text-zinc-300" />
              <span>{active.deliveryTime}</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
            {active.title}
          </h3>

          {/* Context comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-1">
                El problema que estás teniendo
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {active.mainPain}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                Nuestra solución directa
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {active.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              Qué incluye este servicio:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {active.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                    active.id === 'webs' ? 'text-sky-400' : active.id === 'ai' ? 'text-emerald-400' : 'text-purple-400'
                  }`} />
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800/80">
            <a
              href={`https://wa.me/5491100000000?text=${encodeURIComponent(active.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white text-zinc-950 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 cursor-pointer"
            >
              <span>Consultar por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={active.ctaLink}
              target={active.ctaLink.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 transition-colors cursor-pointer"
            >
              <span>{active.ctaText}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
