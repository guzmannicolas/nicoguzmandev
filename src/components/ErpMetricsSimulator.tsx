import React, { useState } from 'react';

interface BranchNode {
  id: string;
  code: string;
  name: string;
  location: string;
  billingToday: string;
  monthlyProjection: string;
  activeSkus: string;
  criticalAlerts: string;
  auditStatus: string;
  recentLogs: { time: string; ref: string; detail: string; role: string }[];
}

const NODES: BranchNode[] = [
  {
    id: 'all',
    code: '00',
    name: 'Consolidado Corporativo',
    location: '3 Unidades Operativas Conectadas',
    billingToday: '$ 5.640.000 ARS',
    monthlyProjection: '$ 148.200.000 ARS',
    activeSkus: '10.760 UNIDADES',
    criticalAlerts: '02 ÍTEMS BAJO MÍNIMO',
    auditStatus: 'CONCILIADO EN TIEMPO REAL',
    recentLogs: [
      { time: '16:14:02', ref: 'TR-9041', detail: 'Transferencia de stock aprobada: Depósito Sur -> Sucursal Norte (120 u.)', role: 'LOGÍSTICA' },
      { time: '16:11:48', ref: 'FC-A004', detail: 'Emisión de factura electrónica mayorista ARCA/AFIP — Cliente #309', role: 'TESORERÍA' },
      { time: '16:05:19', ref: 'AU-1102', detail: 'Cierre parcial de caja auditado sin diferencias — Terminal 02', role: 'MOSTRADOR' }
    ]
  },
  {
    id: 'central',
    code: '01',
    name: 'Casa Central',
    location: 'Av. Corrientes 1840, CABA',
    billingToday: '$ 2.180.000 ARS',
    monthlyProjection: '$ 58.400.000 ARS',
    activeSkus: '1.420 UNIDADES',
    criticalAlerts: 'SIN ALERTAS ACTIVAS',
    auditStatus: 'CAJA ABIERTA — 4 TERMINALES',
    recentLogs: [
      { time: '16:12:10', ref: 'VT-4410', detail: 'Orden de venta mostrador cobrada vía QR integrado — $145.000', role: 'CAJA 01' },
      { time: '15:54:30', ref: 'RM-0812', detail: 'Recepción de mercadería desde Centro de Distribución confirmada', role: 'ENCARGADO' },
      { time: '15:30:00', ref: 'CT-0192', detail: 'Actualización automática de lista de precios gremio (+4.5%)', role: 'DIRECCIÓN' }
    ]
  },
  {
    id: 'norte',
    code: '02',
    name: 'Sucursal Zona Norte',
    location: 'Av. del Libertador 14200, Martínez',
    billingToday: '$ 1.420.000 ARS',
    monthlyProjection: '$ 39.800.000 ARS',
    activeSkus: '890 UNIDADES',
    criticalAlerts: '01 REPOSICIÓN AUTOMÁTICA',
    auditStatus: 'CAJA ABIERTA — 2 TERMINALES',
    recentLogs: [
      { time: '16:08:44', ref: 'AL-0019', detail: 'Solicitud automática de reposición enviada a Depósito Central', role: 'SISTEMA' },
      { time: '15:41:12', ref: 'VT-4408', detail: 'Presupuesto convertido en orden de entrega a domicilio', role: 'VENTAS' },
      { time: '14:20:05', ref: 'US-0041', detail: 'Apertura de turno tarde registrada por operador autorizado', role: 'SUPERVISOR' }
    ]
  },
  {
    id: 'deposito',
    code: '03',
    name: 'Centro de Distribución',
    location: 'Parque Industrial Sur, Nave 4',
    billingToday: '$ 2.040.000 ARS',
    monthlyProjection: '$ 50.000.000 ARS',
    activeSkus: '8.450 UNIDADES',
    criticalAlerts: '01 ORDEN DE COMPRA PROVEEDOR',
    auditStatus: 'DESPACHO ACTIVO',
    recentLogs: [
      { time: '16:14:02', ref: 'DP-7721', detail: 'Preparación de pedido mayorista #892 auditada por lector óptico', role: 'EXPEDICIÓN' },
      { time: '15:18:55', ref: 'OC-0331', detail: 'Ingreso de lote proveedor nacional — Alta de 1.500 unidades en stock', role: 'COMPRAS' },
      { time: '14:00:00', ref: 'IN-0012', detail: 'Control cíclico de inventario sector B finalizado (100% exactitud)', role: 'AUDITORÍA' }
    ]
  }
];

export default function ErpMetricsSimulator() {
  const [selectedId, setSelectedId] = useState<string>('all');
  const current = NODES.find(n => n.id === selectedId) || NODES[0];

  return (
    <div className="w-full border border-[#222220] bg-[#0C0C0B]">
      {/* Header Bar */}
      <div className="px-8 py-5 border-b border-[#222220] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111110]">
        <div>
          <span className="font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase block">
            ARQUITECTURA DE CONTROL CENTRALIZADO
          </span>
          <span className="text-sm font-medium text-[#EDEDEC]">
            Tablero de Operaciones, Stock Multi-Depósito y Auditoría de Caja
          </span>
        </div>
        <div className="font-mono-tech text-[11px] text-[#9A9994]">
          LICENCIAS POR USUARIO: $0 (PROPIEDAD DE LA EMPRESA)
        </div>
      </div>

      {/* Node Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x divide-[#222220] border-b border-[#222220]">
        {NODES.map((node) => {
          const isActive = node.id === selectedId;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedId(node.id)}
              className={`p-5 text-left transition-colors cursor-pointer relative ${
                isActive ? 'bg-[#151513]' : 'bg-[#0C0C0B] hover:bg-[#111110]'
              }`}
            >
              {isActive && <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#EDEDEC]" />}
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59]">
                  NODO [{node.code}]
                </span>
                {isActive && (
                  <span className="font-mono-tech text-[10px] text-[#EDEDEC]">ACTIVO</span>
                )}
              </div>
              <div className="text-xs font-medium text-[#EDEDEC] truncate">{node.name}</div>
              <div className="text-[11px] text-[#5E5D59] truncate mt-0.5">{node.location}</div>
            </button>
          );
        })}
      </div>

      {/* KPI Telemetry Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#222220] border-b border-[#222220]">
        <div className="p-7 bg-[#0C0C0B]">
          <div className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59] uppercase mb-2">
            FACTURACIÓN DIARIA
          </div>
          <div className="font-mono-tech text-xl font-medium text-[#EDEDEC] tabular-nums">
            {current.billingToday}
          </div>
          <div className="font-mono-tech text-[10px] text-[#5E5D59] mt-2">
            PROYECCIÓN MENSUAL: {current.monthlyProjection}
          </div>
        </div>

        <div className="p-7 bg-[#0C0C0B]">
          <div className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59] uppercase mb-2">
            INVENTARIO AUDITADO
          </div>
          <div className="font-mono-tech text-xl font-medium text-[#EDEDEC] tabular-nums">
            {current.activeSkus}
          </div>
          <div className="font-mono-tech text-[10px] text-[#5E5D59] mt-2">
            SINCRONIZACIÓN EN TIEMPO REAL
          </div>
        </div>

        <div className="p-7 bg-[#0C0C0B]">
          <div className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59] uppercase mb-2">
            ALERTAS DE STOCK
          </div>
          <div className="font-mono-tech text-sm font-medium text-[#EDEDEC] mt-1">
            {current.criticalAlerts}
          </div>
          <div className="font-mono-tech text-[10px] text-[#5E5D59] mt-3">
            UMBRAL DE REPOSICIÓN AUTOMÁTICO
          </div>
        </div>

        <div className="p-7 bg-[#0C0C0B]">
          <div className="font-mono-tech text-[10px] tracking-[0.14em] text-[#5E5D59] uppercase mb-2">
            ESTADO DE AUDITORÍA
          </div>
          <div className="font-mono-tech text-sm font-medium text-[#EDEDEC] mt-1">
            {current.auditStatus}
          </div>
          <div className="font-mono-tech text-[10px] text-[#5E5D59] mt-3">
            PERMISOS JERÁRQUICOS ACTIVOS
          </div>
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="bg-[#0C0C0B]">
        <div className="px-8 py-4 border-b border-[#222220] font-mono-tech text-[10px] tracking-[0.16em] text-[#5E5D59] uppercase">
          REGISTRO DE MOVIMIENTOS Y TRAZABILIDAD ({current.name.toUpperCase()})
        </div>
        <div className="divide-y divide-[#1C1C1A]">
          {current.recentLogs.map((log) => (
            <div key={log.ref} className="px-8 py-4 grid grid-cols-1 md:grid-cols-12 gap-2 items-center text-xs hover:bg-[#111110]">
              <div className="md:col-span-2 font-mono-tech text-[11px] text-[#5E5D59]">
                {log.time} — [{log.ref}]
              </div>
              <div className="md:col-span-8 text-[#EDEDEC]">
                {log.detail}
              </div>
              <div className="md:col-span-2 md:text-right font-mono-tech text-[10px] tracking-[0.12em] text-[#9A9994]">
                ROL: {log.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
