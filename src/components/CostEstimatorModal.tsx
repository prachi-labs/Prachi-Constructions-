import React, { useState } from 'react';
import { X, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimate: (data: { projectType: string; areaSqFt: number; estimatedCost: string }) => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyEstimate,
}) => {
  const [projectType, setProjectType] = useState<'villa' | 'apartment' | 'commercial' | 'school'>('villa');
  const [areaSqFt, setAreaSqFt] = useState<number>(3500);
  const [tier, setTier] = useState<'standard' | 'luxury'>('luxury');

  if (!isOpen) return null;

  // Rate estimates based on Kota / Rajasthan construction market benchmarks (per sq ft)
  const rates = {
    villa: { standard: 1850, luxury: 2750 },
    apartment: { standard: 1650, luxury: 2350 },
    commercial: { standard: 1950, luxury: 2900 },
    school: { standard: 1550, luxury: 2150 },
  };

  const currentRate = rates[projectType][tier];
  const totalCost = areaSqFt * currentRate;

  // Estimate duration in months
  const months = Math.max(6, Math.round(areaSqFt / 800) + (tier === 'luxury' ? 4 : 2));

  const formatLakhsCrores = (amount: number) => {
    if (amount >= 10000000) {
      return `₹ ${(amount / 10000000).toFixed(2)} Crores`;
    }
    return `₹ ${(amount / 100000).toFixed(2)} Lakhs`;
  };

  const handleApply = () => {
    const typeLabel = {
      villa: 'Luxury Villa / Private Kothi',
      apartment: 'Multi-Story Residential Apartments',
      commercial: 'Commercial Complex / Showroom',
      school: 'Institutional / School Campus',
    }[projectType];

    onApplyEstimate({
      projectType: typeLabel,
      areaSqFt,
      estimatedCost: formatLakhsCrores(totalCost),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#181d31] border border-[#384C65] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-[#C0C9DB] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#384C65]/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#202742] border border-[#384C65] flex items-center justify-center text-[#C0C9DB]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">
                Construction Budget Estimator
              </h3>
              <p className="text-xs text-[#9DACCC] font-sans-clean font-medium">
                Grounded in Kota & Rajasthan civil engineering rates
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#202742] hover:bg-[#283254] text-[#9DACCC] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6">
          {/* Project Type */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#C0C9DB] font-bold block mb-2">
              Select Project Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'villa', label: 'Luxury Kothi / Villa' },
                { id: 'apartment', label: 'Apartments' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'school', label: 'Institutional' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setProjectType(t.id as any)}
                  className={`p-2.5 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                    projectType === t.id
                      ? 'bg-gradient-to-r from-[#384C65] to-[#485F88] text-white border-[#485F88] shadow-sm'
                      : 'bg-[#202742] text-[#C0C9DB] border-[#384C65] hover:border-[#485F88]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase tracking-wider text-[#C0C9DB] font-bold">
                Built-Up Construction Area
              </label>
              <span className="font-mono text-sm font-bold text-[#C0C9DB]">
                {areaSqFt.toLocaleString()} Sq. Ft.
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={30000}
              step={500}
              value={areaSqFt}
              onChange={(e) => setAreaSqFt(Number(e.target.value))}
              className="w-full accent-[#485F88] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#9DACCC] font-mono mt-1 font-medium">
              <span>1,000 sq ft</span>
              <span>15,000 sq ft</span>
              <span>30,000+ sq ft</span>
            </div>
          </div>

          {/* Specification Tier */}
          <div>
            <label className="text-xs uppercase tracking-wider text-[#C0C9DB] font-bold block mb-2">
              Finishing & Material Grade
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTier('luxury')}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  tier === 'luxury'
                    ? 'bg-[#202742] border-[#485F88] text-white shadow-[0_0_15px_rgba(72,95,136,0.3)]'
                    : 'bg-[#181d31] border-[#384C65] text-[#9DACCC]'
                }`}
              >
                <div className="font-bold text-xs text-[#C0C9DB]">Ultra-Luxury Architectural</div>
                <div className="text-[11px] text-[#9DACCC] mt-1 font-medium">
                  Premium marble, floor-to-ceiling glass, designer facade panels & MEP
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTier('standard')}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  tier === 'standard'
                    ? 'bg-[#202742] border-[#485F88] text-white shadow-[0_0_15px_rgba(72,95,136,0.3)]'
                    : 'bg-[#181d31] border-[#384C65] text-[#9DACCC]'
                }`}
              >
                <div className="font-bold text-xs text-[#C0C9DB]">Standard Civil & Finishing</div>
                <div className="text-[11px] text-[#9DACCC] mt-1 font-medium">
                  High-strength tested RCC, durable vitrified tiling & robust masonry
                </div>
              </button>
            </div>
          </div>

          {/* Computed Estimate Box */}
          <div className="p-5 rounded-2xl bg-[#202742] border border-[#384C65] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-[#9DACCC] uppercase tracking-wider block font-bold">
                Estimated Civil & Turnkey Range
              </span>
              <div className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-0.5">
                {formatLakhsCrores(totalCost)}
              </div>
              <div className="text-[11px] text-[#9DACCC] font-mono mt-0.5 font-medium">
                ~₹{currentRate}/sq.ft · Est. Timeline: {months} Months
              </div>
            </div>

            <button
              type="button"
              onClick={handleApply}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_16px_rgba(72,95,136,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Transfer to Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] text-[#9DACCC] flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#485F88]" />
            <span>Note: Final quotes depend on soil testing, architectural structural drawings, and Kota municipal approvals.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
