import React, { useState } from 'react';

interface BranchView {
  id: string;
  num: string;
  name: string;
  address: string;
  facturacionHoy: string;
  proyeccionMes: string;
  unidadesStock: string;
  alertaStock: string;
  estadoCaja: string;
  movimientos: { hora: string; codigo: string; detalle: string; sector: string }[];
}

const BRANCH_VIEWS: BranchView[] = [
  {
    id: 'consolidado',
    num: '00',
    name: 'TOTAL EMPRESA (3 SUCURSALES)',
    address: 'Visión General del Dueño / Gerencia',
    facturacionHoy: '$ 6.480.000',
    proyeccionMes: '$ 168.500.000',
    unidadesStock: '12.450 UN.',
    alertaStock: '02 ARTÍCULOS A REPONER',
    estadoCaja: 'ARQUEO EN TIEMPO REAL',
    movimientos: [
      { hora: '16:40', codigo: 'REM-804', detalle: 'Pase de mercadería confirmado: Depósito Sur -> Sucursal Belgrano (80 unidades)', sector: 'DEPÓSITO' },
      { hora: '16:28', codigo: 'FAC-A12', detalle: 'Factura A emitida automáticamente en ARCA/AFIP — Cliente Mayorista #104', sector: 'ADMINISTRACIÓN' },
      { hora: '16:15', codigo: 'CAJ-002', detalle: 'Cobro por transferencia / Mercado Pago conciliado al instante ($185.000)', sector: 'MOSTRADOR' }
    ]
  },
  {
    id: 'centro',
    num: '01',
    name: 'SUCURSAL CAPITAL (CASA CENTRAL)',
    address: 'Av. Corrientes 1840, CABA',
    facturacionHoy: '$ 2.850.000',
    proyeccionMes: '$ 74.100.000',
    unidadesStock: '1.890 UN.',
    alertaStock: 'STOCK COMPLETO',
    estadoCaja: '3 CAJAS ABIERTAS SIN DIFERENCIAS',
    movimientos: [
      { hora: '16:35', codigo: 'VTA-991', detalle: 'Venta mostrador cobrada con tarjeta — Descuento automático de stock local', sector: 'CAJA 01' },
      { hora: '15:50', codigo: 'ING-210', detalle: 'Recepción de reposición desde depósito controlada por código de barras', sector: 'ENCARGADO' },
      { hora: '14:20', codigo: 'PRE-045', detalle: 'Actualización masiva de precios (+4%) aplicada desde lista de proveedor', sector: 'GERENCIA' }
    ]
  },
  {
    id: 'norte',
    num: '02',
    name: 'SUCURSAL ZONA NORTE',
    address: 'Av. Cabildo 2420, Belgrano',
    facturacionHoy: '$ 1.630.000',
    proyeccionMes: '$ 42.400.000',
    unidadesStock: '960 UN.',
    alertaStock: '01 PEDIDO AUTOMÁTICO A DEPÓSITO',
    estadoCaja: '2 CAJAS ABIERTAS',
    movimientos: [
      { hora: '16:12', codigo: 'ALT-019', detalle: 'El sistema detectó stock mínimo y generó pedido de reposición al depósito', sector: 'AUTOMÁTICO' },
      { hora: '15:40', codigo: 'VTA-984', detalle: 'Presupuesto enviado por WhatsApp convertido en venta en mostrador', sector: 'VENTAS' },
      { hora: '13:00', codigo: 'TUR-002', detalle: 'Cambio de turno de cajero con arqueo parcial firmado digitalmente', sector: 'SUPERVISIÓN' }
    ]
  },
  {
    id: 'deposito',
    num: '03',
    name: 'DEPÓSITO CENTRAL & MAYORISTA',
    address: 'Parque Industrial Sur, Galpón 4',
    facturacionHoy: '$ 2.000.000',
    proyeccionMes: '$ 52.000.000',
    unidadesStock: '9.600 UN.',
    alertaStock: '01 ORDEN DE COMPRA A FÁBRICA',
    estadoCaja: 'CUENTAS CORRIENTES AL DÍA',
    movimientos: [
      { hora: '16:40', codigo: 'EXP-412', detalle: 'Camión de reparto despachado con hoja de ruta y remitos controlados', sector: 'LOGÍSTICA' },
      { hora: '15:10', codigo: 'COM-108', detalle: 'Ingreso de mercadería de fábrica — Alta de 2.000 unidades en sistema', sector: 'COMPRAS' },
      { hora: '11:30', codigo: 'CTA-088', detalle: 'Aviso automático de vencimiento de cuenta corriente enviado a cliente', sector: 'COBRANZAS' }
    ]
  }
];

export default function ErpMetricsSimulator() {
  const [selectedId, setSelectedId] = useState<string>('consolidado');
  const current = BRANCH_VIEWS.find((b) => b.id === selectedId) || BRANCH_VIEWS[0];

  return (
    <div className="w-full border-2 border-[#0A0A0A] bg-white">
      {/* Top Header */}
      <div className="p-6 md:px-10 md:py-7 border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono-tech text-xs font-bold tracking-[0.14em] text-[#002FA7] bg-white px-2.5 py-0.5 uppercase inline-block mb-2">
            DEMO INTERACTIVA DE SISTEMA ERP
          </span>
          <span className="font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight block">
            CONTROL DE SUCURSALES, STOCK Y CAJA SIN EXCEL
          </span>
        </div>
        <div className="font-mono-tech text-xs font-bold text-white border border-white/30 px-4 py-2">
          SIN COSTO MENSUAL POR EMPLEADO
        </div>
      </div>

      {/* 4 Branch Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 sm:divide-y-0 divide-x-2 divide-[#0A0A0A] border-b-2 border-[#0A0A0A]">
        {BRANCH_VIEWS.map((b) => {
          const isActive = b.id === selectedId;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => setSelectedId(b.id)}
              className={`p-5 md:p-6 text-left transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#002FA7] text-white'
                  : 'bg-[#F7F7F5] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white'
              }`}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter">
                  {b.num}.
                </span>
                {isActive && (
                  <span className="font-mono-tech text-[10px] font-bold bg-white text-[#002FA7] px-2 py-0.5">
                    VIENDO AHORA
                  </span>
                )}
              </div>
              <div className="font-display text-xs md:text-sm font-extrabold uppercase tracking-tight truncate">
                {b.name}
              </div>
              <div className="text-[11px] opacity-75 truncate mt-0.5">
                {b.address}
              </div>
            </button>
          );
        })}
      </div>

      {/* 4 Big Brutalist KPI Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#0A0A0A] border-b-2 border-[#0A0A0A]">
        <div className="p-7 bg-white">
          <div className="font-mono-tech text-[10px] font-bold tracking-[0.14em] text-[#52524E] uppercase mb-2">
            VENTAS DEL DÍA (ARS)
          </div>
          <div className="font-display text-3xl font-extrabold text-[#002FA7] tracking-tighter">
            {current.facturacionHoy}
          </div>
          <div className="font-mono-tech text-[10px] font-bold text-[#0A0A0A] mt-2">
            MES PROYECTADO: {current.proyeccionMes}
          </div>
        </div>

        <div className="p-7 bg-white">
          <div className="font-mono-tech text-[10px] font-bold tracking-[0.14em] text-[#52524E] uppercase mb-2">
            MERCADERÍA EN STOCK
          </div>
          <div className="font-display text-3xl font-extrabold text-[#0A0A0A] tracking-tighter">
            {current.unidadesStock}
          </div>
          <div className="font-mono-tech text-[10px] font-bold text-[#52524E] mt-2">
            DESCUENTO AUTOMÁTICO POR VENTA
          </div>
        </div>

        <div className="p-7 bg-white">
          <div className="font-mono-tech text-[10px] font-bold tracking-[0.14em] text-[#52524E] uppercase mb-2">
            AVISOS DE REPOSICIÓN
          </div>
          <div className="font-display text-base font-extrabold text-[#0A0A0A] uppercase mt-1">
            {current.alertaStock}
          </div>
          <div className="font-mono-tech text-[10px] font-bold text-[#002FA7] mt-3">
            CONECTADO CON PROVEEDORES
          </div>
        </div>

        <div className="p-7 bg-white">
          <div className="font-mono-tech text-[10px] font-bold tracking-[0.14em] text-[#52524E] uppercase mb-2">
            CONTROL DE CAJA Y EMPLEADOS
          </div>
          <div className="font-display text-base font-extrabold text-[#0A0A0A] uppercase mt-1">
            {current.estadoCaja}
          </div>
          <div className="font-mono-tech text-[10px] font-bold text-[#52524E] mt-3">
            PERMISOS POR VENDEDOR / CAJERO
          </div>
        </div>
      </div>

      {/* Live Operations Ledger */}
      <div className="bg-[#F7F7F5]">
        <div className="px-8 py-4 border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white flex items-center justify-between">
          <span className="font-mono-tech text-xs font-bold tracking-[0.12em] uppercase">
            ÚLTIMOS MOVIMIENTOS REGISTRADOS ({current.name})
          </span>
          <span className="font-mono-tech text-[10px] font-bold text-white/70">
            TODO QUEDA GRABADO CON FECHA Y USUARIO
          </span>
        </div>

        <div className="divide-y-2 divide-[#0A0A0A] bg-white">
          {current.movimientos.map((m) => (
            <div key={m.codigo} className="px-8 py-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center hover:bg-[#002FA7] hover:text-white transition-colors group">
              <div className="md:col-span-2 font-mono-tech text-xs font-bold text-[#002FA7] group-hover:text-white">
                {m.hora} HS — [{m.codigo}]
              </div>
              <div className="md:col-span-8 text-xs sm:text-sm font-bold text-[#0A0A0A] group-hover:text-white">
                {m.detalle}
              </div>
              <div className="md:col-span-2 md:text-right font-mono-tech text-[10px] font-bold uppercase tracking-[0.1em] text-[#52524E] group-hover:text-white/80">
                [{m.sector}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
