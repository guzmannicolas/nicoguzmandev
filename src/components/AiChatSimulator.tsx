import React, { useState } from 'react';
import { Send, Bot, Check, CheckCheck, Sparkles, Calendar, Clock, MapPin, Store } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  actionCard?: {
    type: 'booking' | 'price' | 'info';
    title: string;
    detail: string;
  };
}

const SAMPLE_SCENARIOS = [
  {
    label: 'Pedir turno para mañana',
    userText: 'Hola! Tienen turno disponible para mañana a la tarde para corte y barba?',
    botReply: '¡Hola! Sí, por supuesto. Para mañana tengo dos espacios libres: a las 16:30 hs o a las 18:00 hs con Nico. ¿Cuál te queda más cómodo?',
    actionCard: {
      type: 'booking' as const,
      title: 'Disponibilidad en Google Calendar',
      detail: '📅 Mañana: 16:30 hs o 18:00 hs — Duración: 45 min'
    }
  },
  {
    label: 'Consultar precios y catálogo',
    userText: 'Buenas! Me pasás la lista de precios y qué servicios hacen?',
    botReply: '¡Hola! Te cuento nuestros servicios principales:\n• Corte Clásico: $12.000\n• Corte + Perfilado de Barba: $17.000\n• Tratamiento Capilar Premium: $22.000\nTodos incluyen lavado y bebida de cortesía.',
    actionCard: {
      type: 'price' as const,
      title: 'Catálogo de Precios Sincronizado',
      detail: '💳 Medios de pago: Efectivo, Transferencia y Tarjetas (3 cuotas sin interés)'
    }
  },
  {
    label: 'Ubicación y horarios',
    userText: 'En qué dirección están y hasta qué hora tienen abierto hoy?',
    botReply: 'Estamos ubicados en Av. Principal 1420. Nuestro horario de atención es de Martes a Sábado de 10:00 a 20:00 hs. ¡Te esperamos!',
    actionCard: {
      type: 'info' as const,
      title: 'Ubicación & Google Maps',
      detail: '📍 Av. Principal 1420 — Estacionamiento gratuito para clientes'
    }
  }
];

export default function AiChatSimulator() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: '¡Hola! 👋 Soy el asistente virtual inteligente de tu negocio. Estoy activo 24/7 para responder consultas, mostrar precios y agendar turnos en tiempo real. ¿En qué te puedo ayudar?',
      time: '14:32'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleScenarioClick = (scenario: typeof SAMPLE_SCENARIOS[0]) => {
    if (isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: scenario.userText,
      time: '14:33'
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: scenario.botReply,
        time: '14:33',
        actionCard: scenario.actionCard
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl glass-card border border-white/10 overflow-hidden shadow-2xl">
      {/* Top Header Phone Bar */}
      <div className="bg-zinc-900/90 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-white">Asistente IA (WhatsApp)</span>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded-full font-medium">
                En línea 24/7
              </span>
            </div>
            <p className="text-xs text-zinc-400">Respuesta instantánea & sincronizado con Google Calendar</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-800/60 px-3 py-1.5 rounded-full border border-zinc-700/60">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Simulador en vivo</span>
        </div>
      </div>

      {/* Chat Messages Body */}
      <div className="p-4 md:p-6 bg-zinc-950/60 min-h-[340px] max-h-[420px] overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-white rounded-tr-none'
                  : 'bg-zinc-800/90 text-zinc-200 border border-zinc-700/60 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>

              {msg.actionCard && (
                <div className="mt-3 p-3 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-xs">
                  <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {msg.actionCard.title}
                  </div>
                  <div className="text-zinc-300">{msg.actionCard.detail}</div>
                </div>
              )}

              <div className="flex items-center justify-end gap-1 mt-1 text-[10px] opacity-70">
                <span>{msg.time}</span>
                {msg.sender === 'user' && <CheckCheck className="w-3.5 h-3.5 text-emerald-200" />}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 w-fit text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
            <span className="ml-1 text-zinc-400">El bot está escribiendo...</span>
          </div>
        )}
      </div>

      {/* Suggested Questions to Test */}
      <div className="p-4 bg-zinc-900/80 border-t border-zinc-800">
        <div className="text-xs font-medium text-zinc-400 mb-2">
          👉 Hacé clic en una pregunta de prueba para ver cómo responde tu bot:
        </div>
        <div className="flex flex-wrap gap-2">
          {SAMPLE_SCENARIOS.map((sc, i) => (
            <button
              key={i}
              onClick={() => handleScenarioClick(sc)}
              disabled={isTyping}
              className="text-xs px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 hover:border-emerald-500/40 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {sc.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
