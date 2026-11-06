import React, { useState } from 'react';
import { Layers, Store, TrendingUp, AlertTriangle, Users, PackageCheck, BarChart3, RefreshCw } from 'lucide-react';

interface BranchData {
  id: string;
  name: string;
  location: string;
  stockCount: number;
  ordersToday: number;
  revenueToday: string;
  status: 'optimal' | 'low_stock' | 'syncing';
}

const BRANCHES: BranchData[] = [
  {
    id: 'b1',
    name: 'Sucursal Centro',
    location: 'Av. Corrientes 1840',
    stockCount: 1420,
    ordersToday: 68,
    revenueToday: '$1.480.000',
    status: 'optimal'
  },
  {
    id: 'b2',
    name: 'Sucursal Norte',
    location: 'Av. Cabildo 2210',
    stockCount: 890,
    ordersToday: 42,
    revenueToday: '$920.000',
    status: 'optimal'
  },
  {
    id: 'b3',
    name: 'Depósito Central',
    location: 'Parque Industrial Sur',
    stockCount: 8450,
    ordersToday: 114,
    revenueToday: '$3.240.000',
    status: 'low_stock'
  }
];

export default function ErpMetricsSimulator() {
  const [activeBranch, setActiveBranch] = useState<string>('b1');
  const [isSyncing, setIsSyncing] = useState(false);

  const current = BRANCHES.find(b => b.id === activeBranch) || BRANCHES[0];

  const triggerSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 800);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl glass-card border border-white/10 overflow-hidden shadow-2xl">
      {/* Top Bar */}
      <div className="bg-zinc-900/90 px-6 py-4 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-white">Panel ERP Multi-Sucursal</span>
              <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[10px] px-2 py-0.5 rounded-full font-medium">
                En vivo
              </span>
            </div>
            <p className="text-xs text-zinc-400">Control unificado de stock, caja y pedidos en tiempo real</p>
          </div>
        </div>

        <button
          onClick={triggerSync}
          disabled={isSyncing}
          className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-purple-400' : ''}`} />
          <span>{isSyncing ? 'Sincronizando...' : 'Actualizar Stock'}</span>
        </button>
      </div>

      {/* Main Body */}
      <div className="p-6 bg-zinc-950/70">
        {/* Branch Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {BRANCHES.map(b => (
            <button
              key={b.id}
              onClick={() => setActiveBranch(b.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeBranch === b.id
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>{b.name}</span>
            </button>
          ))}
        </div>

        {/* Real-time KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
              <span>Ventas Hoy</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white">{current.revenueToday}</div>
            <div className="text-[11px] text-zinc-400 mt-1">{current.ordersToday} órdenes emitidas</div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
              <span>Unidades en Stock</span>
              <PackageCheck className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white">{current.stockCount.toLocaleString()}</div>
            <div className="text-[11px] text-zinc-400 mt-1">Conteo auditado en tiempo real</div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex items-center justify-between text-zinc-400 text-xs mb-2">
              <span>Estado Operativo</span>
              {current.status === 'low_stock' ? (
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              ) : (
                <BarChart3 className="w-4 h-4 text-sky-400" />
              )}
            </div>
            <div className="text-lg font-bold text-white">
              {current.status === 'low_stock' ? 'Alerta Reposición' : 'Operación Normal'}
            </div>
            <div className="text-[11px] text-zinc-400 mt-1">
              {current.status === 'low_stock' ? 'Stock por debajo del mínimo' : 'Sucursal balanceada'}
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 text-xs text-zinc-300 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Usuarios activos con permisos restringidos por sucursal (cajeros, encargados, administración).</span>
          </div>
          <span className="text-[10px] uppercase font-semibold text-purple-400 tracking-wider">
            Arquitectura Escalable
          </span>
        </div>
      </div>
    </div>
  );
}
