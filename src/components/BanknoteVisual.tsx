import React from 'react';
import { CurrencyCode } from '../types';

interface BanknoteVisualProps {
  currency?: CurrencyCode;
  denomination: 1 | 2 | 5 | 10 | 20 | 50 | 100 | 200 | 500 | 'Mixed';
  isStack?: boolean;
  className?: string;
  stagedValue?: string;
  badge?: string;
}

export const BanknoteVisual: React.FC<BanknoteVisualProps> = ({
  currency = 'AUD',
  denomination,
  isStack = true,
  className = '',
  stagedValue,
  badge
}) => {
  // Theme configuration for each currency and denomination
  const getConfig = () => {
    if (currency === 'USD') {
      const usdMap: Record<string, any> = {
        100: {
          bgGradient: 'from-[#2D3748] via-[#4A5568] to-[#2D3748]',
          lightBorder: 'border-cyan-400/40',
          symbol: '$100',
          value: '100',
          country: 'UNITED STATES',
          hasBlueRibbon: true,
          strapBg: 'bg-[#FEF3C7]',
          strapBorder: 'border-[#92400E]/30',
          strapText: 'text-[#92400E]',
          motif: 'FRANKLIN · 3D RIBBON REPLICA'
        },
        50: {
          bgGradient: 'from-[#334155] via-[#475569] to-[#1E293B]',
          lightBorder: 'border-indigo-400/40',
          symbol: '$50',
          value: '50',
          country: 'UNITED STATES',
          hasBlueRibbon: false,
          strapBg: 'bg-[#FDE68A]',
          strapBorder: 'border-[#78350F]/30',
          strapText: 'text-[#78350F]',
          motif: 'GRANT REPLICA'
        },
        20: {
          bgGradient: 'from-[#1E293B] via-[#334155] to-[#0F172A]',
          lightBorder: 'border-emerald-400/40',
          symbol: '$20',
          value: '20',
          country: 'UNITED STATES',
          hasBlueRibbon: false,
          strapBg: 'bg-[#D1FAE5]',
          strapBorder: 'border-[#065F46]/30',
          strapText: 'text-[#065F46]',
          motif: 'JACKSON REPLICA'
        },
        10: {
          bgGradient: 'from-[#334155] via-[#475569] to-[#1E293B]',
          lightBorder: 'border-amber-400/40',
          symbol: '$10',
          value: '10',
          country: 'UNITED STATES',
          hasBlueRibbon: false,
          strapBg: 'bg-[#FEF3C7]',
          strapBorder: 'border-[#B45309]/30',
          strapText: 'text-[#B45309]',
          motif: 'HAMILTON REPLICA'
        },
        5: {
          bgGradient: 'from-[#1E293B] via-[#334155] to-[#0F172A]',
          lightBorder: 'border-purple-400/40',
          symbol: '$5',
          value: '5',
          country: 'UNITED STATES',
          hasBlueRibbon: false,
          strapBg: 'bg-[#EDE9FE]',
          strapBorder: 'border-[#5B21B6]/30',
          strapText: 'text-[#5B21B6]',
          motif: 'LINCOLN REPLICA'
        },
        2: {
          bgGradient: 'from-[#1B382B] via-[#2A4D3E] to-[#142921]',
          lightBorder: 'border-emerald-400/40',
          symbol: '$2',
          value: '2',
          country: 'UNITED STATES',
          hasBlueRibbon: false,
          strapBg: 'bg-[#DCFCE7]',
          strapBorder: 'border-[#15803D]/30',
          strapText: 'text-[#15803D]',
          motif: 'JEFFERSON REPLICA'
        },
        1: {
          bgGradient: 'from-[#143224] via-[#1E4D38] to-[#0D2419]',
          lightBorder: 'border-emerald-400/30',
          symbol: '$1',
          value: '1',
          country: 'UNITED STATES',
          hasBlueRibbon: false,
          strapBg: 'bg-[#E2E8F0]',
          strapBorder: 'border-[#334155]/30',
          strapText: 'text-[#1E293B]',
          motif: 'WASHINGTON CLASSIC REPLICA'
        },
        Mixed: {
          bgGradient: 'from-[#0F172A] via-[#1E293B] to-[#0F172A]',
          lightBorder: 'border-amber-400/40',
          symbol: 'USD',
          value: 'MIXED',
          country: 'FEDERAL RESERVE REPLICA',
          hasBlueRibbon: true,
          strapBg: 'bg-amber-100',
          strapBorder: 'border-slate-800/30',
          strapText: 'text-slate-900',
          motif: 'PRODUCTION BUNDLE'
        }
      };
      return usdMap[denomination.toString()] || usdMap['100'];
    }

    if (currency === 'EUR') {
      const eurMap: Record<string, any> = {
        500: {
          bgGradient: 'from-[#581C87] via-[#7E22CE] to-[#4A044E]',
          lightBorder: 'border-purple-300/40',
          symbol: '€500',
          value: '500',
          country: 'EUROPEAN UNION',
          strapBg: 'bg-[#F3E8FF]',
          strapBorder: 'border-[#6B21A8]/30',
          strapText: 'text-[#6B21A8]',
          motif: 'MODERN ARCHITECTURE'
        },
        200: {
          bgGradient: 'from-[#B45309] via-[#D97706] to-[#78350F]',
          lightBorder: 'border-yellow-300/40',
          symbol: '€200',
          value: '200',
          country: 'EUROPEAN UNION',
          strapBg: 'bg-[#FEF08A]',
          strapBorder: 'border-[#854D0E]/30',
          strapText: 'text-[#854D0E]',
          motif: 'IRON & GLASS ERA'
        },
        100: {
          bgGradient: 'from-[#047857] via-[#059669] to-[#064E3B]',
          lightBorder: 'border-emerald-300/40',
          symbol: '€100',
          value: '100',
          country: 'EUROPEAN UNION',
          strapBg: 'bg-[#D1FAE5]',
          strapBorder: 'border-[#065F46]/30',
          strapText: 'text-[#065F46]',
          motif: 'BAROQUE & ROCOCO'
        },
        50: {
          bgGradient: 'from-[#C2410C] via-[#EA580C] to-[#9A3412]',
          lightBorder: 'border-orange-300/40',
          symbol: '€50',
          value: '50',
          country: 'EUROPEAN UNION',
          strapBg: 'bg-[#FFEDD5]',
          strapBorder: 'border-[#9A3412]/30',
          strapText: 'text-[#9A3412]',
          motif: 'RENAISSANCE ARCH'
        },
        20: {
          bgGradient: 'from-[#0284C7] via-[#0369A1] to-[#0C4A6E]',
          lightBorder: 'border-sky-300/40',
          symbol: '€20',
          value: '20',
          country: 'EUROPEAN UNION',
          strapBg: 'bg-[#E0F2FE]',
          strapBorder: 'border-[#0369A1]/30',
          strapText: 'text-[#0369A1]',
          motif: 'GOTHIC ARCHITECTURE'
        },
        10: {
          bgGradient: 'from-[#BE123C] via-[#E11D48] to-[#881337]',
          lightBorder: 'border-rose-300/40',
          symbol: '€10',
          value: '10',
          country: 'EUROPEAN UNION',
          strapBg: 'bg-[#FFE4E6]',
          strapBorder: 'border-[#881337]/30',
          strapText: 'text-[#881337]',
          motif: 'ROMANESQUE ERA'
        },
        5: {
          bgGradient: 'from-[#4B5563] via-[#6B7280] to-[#374151]',
          lightBorder: 'border-slate-300/40',
          symbol: '€5',
          value: '5',
          country: 'EUROPEAN UNION',
          strapBg: 'bg-[#F1F5F9]',
          strapBorder: 'border-[#475569]/30',
          strapText: 'text-[#334155]',
          motif: 'CLASSICAL ERA'
        },
        Mixed: {
          bgGradient: 'from-[#1E1B4B] via-[#312E81] to-[#0F172A]',
          lightBorder: 'border-yellow-400/40',
          symbol: 'EUR',
          value: 'MIXED',
          country: 'EUROPEAN UNION',
          strapBg: 'bg-yellow-100',
          strapBorder: 'border-yellow-700/30',
          strapText: 'text-slate-900',
          motif: 'HEIST PRODUCTION PACK'
        }
      };
      return eurMap[denomination.toString()] || eurMap['100'];
    }

    if (currency === 'GBP') {
      const gbpMap: Record<string, any> = {
        50: {
          bgGradient: 'from-[#BE123C] via-[#DC2626] to-[#991B1B]',
          lightBorder: 'border-red-300/40',
          symbol: '£50',
          value: '50',
          country: 'BANK OF ENGLAND',
          strapBg: 'bg-[#FEE2E2]',
          strapBorder: 'border-[#991B1B]/30',
          strapText: 'text-[#991B1B]',
          motif: 'ALAN TURING POLYMER'
        },
        20: {
          bgGradient: 'from-[#6B21A8] via-[#7E22CE] to-[#581C87]',
          lightBorder: 'border-purple-300/40',
          symbol: '£20',
          value: '20',
          country: 'BANK OF ENGLAND',
          strapBg: 'bg-[#F3E8FF]',
          strapBorder: 'border-[#6B21A8]/30',
          strapText: 'text-[#6B21A8]',
          motif: 'J.M.W. TURNER POLYMER'
        },
        10: {
          bgGradient: 'from-[#9A3412] via-[#C2410C] to-[#7C2D12]',
          lightBorder: 'border-orange-300/40',
          symbol: '£10',
          value: '10',
          country: 'BANK OF ENGLAND',
          strapBg: 'bg-[#FFEDD5]',
          strapBorder: 'border-[#9A3412]/30',
          strapText: 'text-[#9A3412]',
          motif: 'JANE AUSTEN POLYMER'
        },
        5: {
          bgGradient: 'from-[#0E7490] via-[#06B6D4] to-[#155E75]',
          lightBorder: 'border-cyan-300/40',
          symbol: '£5',
          value: '5',
          country: 'BANK OF ENGLAND',
          strapBg: 'bg-[#CFFAFE]',
          strapBorder: 'border-[#155E75]/30',
          strapText: 'text-[#155E75]',
          motif: 'WINSTON CHURCHILL POLYMER'
        },
        Mixed: {
          bgGradient: 'from-[#18181B] via-[#27272A] to-[#09090B]',
          lightBorder: 'border-red-400/40',
          symbol: 'GBP',
          value: 'MIXED',
          country: 'BANK OF ENGLAND',
          strapBg: 'bg-red-100',
          strapBorder: 'border-red-900/30',
          strapText: 'text-slate-900',
          motif: 'LONDON CRIME DRAMA'
        }
      };
      return gbpMap[denomination.toString()] || gbpMap['50'];
    }

    if (currency === 'CAD') {
      const cadMap: Record<string, any> = {
        100: {
          bgGradient: 'from-[#78350F] via-[#92400E] to-[#451A03]',
          lightBorder: 'border-amber-300/40',
          symbol: 'C$100',
          value: '100',
          country: 'BANQUE DU CANADA',
          strapBg: 'bg-[#FEF3C7]',
          strapBorder: 'border-[#78350F]/30',
          strapText: 'text-[#78350F]',
          motif: 'BORDEN · MEDICAL INNOVATION'
        },
        50: {
          bgGradient: 'from-[#991B1B] via-[#DC2626] to-[#7F1D1D]',
          lightBorder: 'border-red-300/40',
          symbol: 'C$50',
          value: '50',
          country: 'BANQUE DU CANADA',
          strapBg: 'bg-[#FEE2E2]',
          strapBorder: 'border-[#991B1B]/30',
          strapText: 'text-[#991B1B]',
          motif: 'MACKENZIE KING · CCGS AMUNDSEN'
        },
        20: {
          bgGradient: 'from-[#14532D] via-[#15803D] to-[#052E16]',
          lightBorder: 'border-emerald-300/40',
          symbol: 'C$20',
          value: '20',
          country: 'BANQUE DU CANADA',
          strapBg: 'bg-[#DCFCE7]',
          strapBorder: 'border-[#14532D]/30',
          strapText: 'text-[#14532D]',
          motif: 'QUEEN ELIZABETH · VIMY MEMORIAL'
        },
        10: {
          bgGradient: 'from-[#581C87] via-[#6B21A8] to-[#3B0764]',
          lightBorder: 'border-purple-300/40',
          symbol: 'C$10',
          value: '10',
          country: 'BANQUE DU CANADA',
          strapBg: 'bg-[#F3E8FF]',
          strapBorder: 'border-[#581C87]/30',
          strapText: 'text-[#581C87]',
          motif: 'VIOLA DESMOND · VERTICAL NOTE'
        },
        5: {
          bgGradient: 'from-[#0369A1] via-[#0284C7] to-[#075985]',
          lightBorder: 'border-sky-300/40',
          symbol: 'C$5',
          value: '5',
          country: 'BANQUE DU CANADA',
          strapBg: 'bg-[#E0F2FE]',
          strapBorder: 'border-[#0369A1]/30',
          strapText: 'text-[#0369A1]',
          motif: 'WILFRID LAURIER · CANADARM2'
        },
        Mixed: {
          bgGradient: 'from-[#1E293B] via-[#0F172A] to-[#1E293B]',
          lightBorder: 'border-red-400/40',
          symbol: 'CAD',
          value: 'MIXED',
          country: 'BANQUE DU CANADA',
          strapBg: 'bg-red-100',
          strapBorder: 'border-red-700/30',
          strapText: 'text-slate-900',
          motif: 'CANADIAN PRODUCTION PACK'
        }
      };
      return cadMap[denomination.toString()] || cadMap['100'];
    }

    // Default: Australian Dollars (AUD)
    const audMap: Record<string, any> = {
      100: {
        bgGradient: 'from-[#006A38] via-[#00843D] to-[#00522B]',
        lightBorder: 'border-[#33B864]/40',
        symbol: '$100',
        value: '100',
        country: 'AUSTRALIA',
        strapBg: 'bg-[#DCD7C9]',
        strapBorder: 'border-[#2C3E50]/30',
        strapText: 'text-[#2C3E50]',
        motif: 'MONASH · MELBA REPLICA'
      },
      50: {
        bgGradient: 'from-[#D97706] via-[#F59E0B] to-[#B45309]',
        lightBorder: 'border-[#FDE68A]/40',
        symbol: '$50',
        value: '50',
        country: 'AUSTRALIA',
        strapBg: 'bg-[#DCD7C9]',
        strapBorder: 'border-[#78350F]/30',
        strapText: 'text-[#78350F]',
        motif: 'COWAN · UNAIPON REPLICA'
      },
      20: {
        bgGradient: 'from-[#BE123C] via-[#E11D48] to-[#9F1239]',
        lightBorder: 'border-[#FDA4AF]/40',
        symbol: '$20',
        value: '20',
        country: 'AUSTRALIA',
        strapBg: 'bg-[#DCD7C9]',
        strapBorder: 'border-[#881337]/30',
        strapText: 'text-[#881337]',
        motif: 'REIBEY · FLYNN REPLICA'
      },
      10: {
        bgGradient: 'from-[#0369A1] via-[#0284C7] to-[#075985]',
        lightBorder: 'border-[#7DD3FC]/40',
        symbol: '$10',
        value: '10',
        country: 'AUSTRALIA',
        strapBg: 'bg-[#DCD7C9]',
        strapBorder: 'border-[#0C4A6E]/30',
        strapText: 'text-[#0C4A6E]',
        motif: 'PATERSON · GILMORE REPLICA'
      },
      5: {
        bgGradient: 'from-[#6D28D9] via-[#7C3AED] to-[#5B21B6]',
        lightBorder: 'border-[#C4B5FD]/40',
        symbol: '$5',
        value: '5',
        country: 'AUSTRALIA',
        strapBg: 'bg-[#DCD7C9]',
        strapBorder: 'border-[#4C1D95]/30',
        strapText: 'text-[#4C1D95]',
        motif: 'PARLIAMENT REPLICA'
      },
      Mixed: {
        bgGradient: 'from-[#0F172A] via-[#1E293B] to-[#0F172A]',
        lightBorder: 'border-amber-400/40',
        symbol: '$100/$50',
        value: 'MIXED',
        country: 'AUSTRALIA',
        strapBg: 'bg-amber-100',
        strapBorder: 'border-slate-800/30',
        strapText: 'text-slate-900',
        motif: 'FILM PRODUCTION PACK'
      }
    };

    return audMap[denomination.toString()] || audMap['100'];
  };

  const config = getConfig();

  return (
    <div className={`relative w-full aspect-[4/3] flex items-center justify-center p-4 overflow-hidden rounded-xl bg-gradient-to-b from-[#111936] to-[#080D1D] select-none ${className}`}>
      {/* Background Studio Light Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#3A506B_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* Subtle Studio Glow */}
      <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none bg-amber-500/20" />

      {/* Stack Container with 3D Depth */}
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] transition-transform duration-300 ease-out group-hover:scale-[1.03]">
        {/* Layer 3 (Bottom Stack Depth) */}
        {isStack && (
          <div className="absolute -bottom-3 left-1 right-1 h-3 rounded-md bg-black/40 blur-[2px] transform translate-y-2" />
        )}

        {/* Stack Edge Layers (Simulating 100 compressed sheets) */}
        {isStack && (
          <>
            <div 
              className="absolute -bottom-2 inset-x-2 h-4 rounded-md border border-black/30 opacity-90 shadow-md"
              style={{
                background: 'repeating-linear-gradient(to bottom, #d5d3ce, #d5d3ce 1px, #a8a6a0 1px, #a8a6a0 2px)'
              }}
            />
            <div 
              className="absolute -bottom-1 inset-x-1 h-3 rounded-md border border-black/20 opacity-95 shadow-sm"
              style={{
                background: 'repeating-linear-gradient(to bottom, #e2e0dc, #e2e0dc 1px, #bfbcb5 1px, #bfbcb5 2px)'
              }}
            />
          </>
        )}

        {/* Top Hero Prop Banknote */}
        <div className={`@container relative aspect-[16/8.5] w-full rounded-md shadow-2xl border ${config.lightBorder} bg-gradient-to-r ${config.bgGradient} p-2.5 flex flex-col justify-between overflow-hidden`}>
          {/* Subtle Security Line Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-black pointer-events-none" />

          {/* Large diagonal PROP COPY marking across the face */}
          <div className="absolute inset-0 z-25 flex items-center justify-center pointer-events-none">
            <span className="-rotate-12 font-black font-mono text-white tracking-widest text-[clamp(10px,9cqw,40px)] bg-red-700/75 border-y-2 border-white/80 px-2 whitespace-nowrap shadow-lg">
              PROP COPY
            </span>
          </div>

          {/* Top Bar of Note */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold tracking-widest px-1 py-0.5 rounded bg-black/40 text-amber-300 border border-amber-300/30">
                {currency} PROP
              </span>
              <span className="text-[8px] tracking-wider text-white/70 font-mono hidden sm:inline">
                REPLICA
              </span>
            </div>

            <div className="text-right">
              <span className="font-display font-black text-xl sm:text-2xl leading-none text-white tracking-tight drop-shadow-sm">
                {config.symbol}
              </span>
            </div>
          </div>

          {/* Center Graphic & Legal Prop Disclaimers */}
          <div className="relative z-10 my-auto flex items-center justify-between px-1">
            {/* Clear Window / Hologram simulation */}
            <div className="relative w-8 h-11 rounded border border-white/40 bg-white/20 backdrop-blur-[2px] flex flex-col items-center justify-center p-0.5 shadow-inner">
              <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center">
                <span className="text-[7px] font-bold text-white/90">{currency}</span>
              </div>
              <span className="text-[5.5px] text-white/80 font-mono mt-0.5">FILM</span>
            </div>

            {/* Middle Bold Watermark & Disclaimers */}
            <div className="flex-1 px-2 text-center">
              <div className="inline-block px-1.5 py-0.5 rounded bg-black/60 border border-red-500/40 text-red-300 font-mono font-bold text-[7.5px] sm:text-[8.5px] tracking-wider transform -rotate-1">
                PROP COPY · NOT LEGAL TENDER
              </div>
              <div className="text-[6.5px] text-white/80 mt-1 font-sans tracking-wide truncate">
                {config.motif}
              </div>
            </div>

            {/* Coat of Arms / Emblem Simulation */}
            <div className="w-7 h-7 rounded-full border border-amber-300/40 bg-black/30 flex items-center justify-center text-[7.5px] font-bold text-amber-300">
              {config.value}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex items-end justify-between text-[7px] text-white/80 font-mono">
            <span className="tracking-tight text-[6.5px] text-white/60">
              SERIAL: {currency}-{denomination === 'Mixed' ? '999' : denomination}X2026-PROP
            </span>
            <span className="font-bold text-white text-[8px]">
              {config.country}
            </span>
          </div>

          {/* Authentic Bank Paper Strap (Cross-sectional Currency Band) */}
          {isStack && (
            <div className={`absolute top-0 bottom-0 left-[35%] w-14 sm:w-16 ${config.strapBg} ${config.strapBorder} border-x shadow-xl z-20 flex flex-col items-center justify-between py-1 px-0.5 text-center`}>
              <div className="w-full border-b border-black/15 pb-0.5">
                <span className="text-[6.5px] font-black uppercase text-slate-800 tracking-wider">
                  COMMERCIAL
                </span>
              </div>
              <div className="my-auto">
                <span className="text-[10px] sm:text-xs font-black block text-slate-900 tracking-tight leading-tight">
                  {stagedValue || `${config.symbol}00`}
                </span>
                <span className="text-[6px] font-bold text-slate-600 block uppercase">
                  100 PCS · STRAP
                </span>
              </div>
              <div className="w-full border-t border-black/15 pt-0.5">
                <span className="text-[6px] font-bold tracking-tighter text-slate-700">
                  VERIFIED PROP
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Badge if applicable */}
      {badge && (
        <div className="absolute top-3 right-3 z-30">
          <span className="text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-sans shadow-md">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
