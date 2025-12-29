'use client';

import {
  Check,
  ChevronsUpDown,
  Infinity as InfinityIcon,
  X as XIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const servicePlans = [
  { name: 'Compliance Audit', cta: 'Get Quote', href: '/contact' },
  { name: 'System Build', cta: 'Get Quote', href: '/contact' },
  { name: 'Ongoing Support', cta: 'Get Quote', href: '/contact' },
];

type Cell = boolean | 'unlimited' | string;

interface FeatureRow {
  name: string;
  audit: Cell;
  system: Cell;
  ongoing: Cell;
}

interface FeatureSection {
  category: string;
  rows: FeatureRow[];
}

const featureSections: FeatureSection[] = [
  {
    category: 'Compliance & Documentation',
    rows: [
      {
        name: 'Gap Analysis & Audit',
        audit: true,
        system: true,
        ongoing: true,
      },
      {
        name: 'SWMS & SWP Creation',
        audit: false,
        system: true,
        ongoing: true,
      },
      {
        name: 'WHS Policies & Procedures',
        audit: false,
        system: true,
        ongoing: true,
      },
    ],
  },
  {
    category: 'ISO Systems',
    rows: [
      {
        name: 'ISO45001 Development',
        audit: false,
        system: true,
        ongoing: true,
      },
      {
        name: 'ISO14001 Development',
        audit: false,
        system: true,
        ongoing: true,
      },
      {
        name: 'ISO9001 Development',
        audit: false,
        system: true,
        ongoing: true,
      },
    ],
  },
  {
    category: 'Site Services',
    rows: [
      {
        name: 'Site Inspections',
        audit: true,
        system: true,
        ongoing: 'unlimited',
      },
      {
        name: 'Risk Assessments',
        audit: true,
        system: true,
        ongoing: 'unlimited',
      },
      {
        name: 'Hazard Identification',
        audit: true,
        system: true,
        ongoing: 'unlimited',
      },
    ],
  },
  {
    category: 'Training & Support',
    rows: [
      { name: 'WHS Training', audit: false, system: true, ongoing: true },
      {
        name: 'Due Diligence Training',
        audit: false,
        system: true,
        ongoing: true,
      },
      {
        name: 'Ongoing Compliance Support',
        audit: false,
        system: false,
        ongoing: 'unlimited',
      },
      {
        name: 'Regular System Reviews',
        audit: false,
        system: false,
        ongoing: 'unlimited',
      },
      {
        name: 'Internal Audit Support',
        audit: false,
        system: true,
        ongoing: 'unlimited',
      },
      {
        name: 'Free Initial Consultation',
        audit: true,
        system: true,
        ongoing: true,
      },
    ],
  },
];

export default function AspectPricingTable() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="bg-obsidian px-2.5 lg:px-0">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Section header */}
        <div className="border-dark-gray grid grid-cols-1 border-r border-b border-l md:grid-cols-3">
          <div className="border-dark-gray border-b p-6 md:col-span-2 md:border-r md:border-b-0 md:p-12">
            <span className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              Compare
            </span>
            <h2 className="text-foreground mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              Service Packages
            </h2>
          </div>
          <div className="flex items-end p-6 md:p-8">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Find the right level of support for your business needs.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="border-dark-gray border-r border-b border-l">
          <Header selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
          <div>
            {featureSections.map((sec, i) => (
              <Section key={i} sec={sec} selectedPlan={selectedPlan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── HEADER ─────────────────────────── */

function Header({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number;
  onPlanChange: (i: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile view: dropdown plan selector */}
      <div className="border-dark-gray border-b md:hidden">
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between px-6 py-6">
            <CollapsibleTrigger className="flex items-center gap-2">
              <h3 className="text-foreground text-xl font-medium">
                {servicePlans[selectedPlan].name}
              </h3>
              <ChevronsUpDown
                className={cn(
                  'text-muted-foreground size-5 transition-transform',
                  open && 'rotate-180',
                )}
              />
            </CollapsibleTrigger>

            <Link
              href={servicePlans[selectedPlan].href}
              className="border-dark-gray text-foreground hover:bg-foreground hover:text-background border px-4 py-2 text-sm font-medium transition-colors"
            >
              {servicePlans[selectedPlan].cta}
            </Link>
          </div>

          <CollapsibleContent className="border-dark-gray flex flex-col gap-2 border-t px-6 py-4">
            {servicePlans.map((p, i) =>
              i === selectedPlan ? null : (
                <button
                  key={p.name}
                  className="text-muted-foreground hover:text-foreground py-2 text-left text-sm transition-colors"
                  onClick={() => {
                    onPlanChange(i);
                    setOpen(false);
                  }}
                >
                  {p.name}
                </button>
              ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop view: four-column header (blank + three plans) */}
      <div className="border-dark-gray hidden grid-cols-4 border-b md:grid">
        <div className="border-dark-gray border-r p-8">
          <span className="text-dark-gray text-4xl font-light tracking-tighter">
            →
          </span>
        </div>
        {servicePlans.map((p, i) => (
          <div
            key={p.name}
            className={cn(
              'flex flex-col justify-between gap-4 p-8',
              i < 2 && 'border-dark-gray border-r',
              i === 1 && 'bg-jet',
            )}
          >
            <div>
              <span className="text-dark-gray text-sm font-light">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-foreground mt-2 text-xl font-medium">
                {p.name}
              </h3>
            </div>
            <Link
              href={p.href}
              className={cn(
                'inline-flex w-fit items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors',
                i === 1
                  ? 'border-foreground bg-foreground text-background hover:text-foreground hover:bg-transparent'
                  : 'border-dark-gray text-foreground hover:bg-foreground hover:text-background',
              )}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

/* ────────────────────────── SECTIONS ────────────────────────── */

function Section({
  sec,
  selectedPlan,
}: {
  sec: FeatureSection;
  selectedPlan: number;
}) {
  return (
    <div className="border-dark-gray border-b last:border-b-0">
      <div className="border-dark-gray bg-obsidian flex min-h-16 items-center border-b p-6 md:p-8">
        <h3 className="text-foreground text-sm font-medium tracking-widest uppercase">
          {sec.category}
        </h3>
      </div>

      {sec.rows.map((row, idx) => (
        <div
          key={idx}
          className="border-dark-gray text-foreground grid min-h-16 grid-cols-2 items-center border-b last:border-b-0 md:grid-cols-4"
        >
          <div className="border-dark-gray flex h-full items-center p-4 pl-6 md:border-r md:p-6 md:pl-8">
            <span className="text-sm">{row.name}</span>
          </div>

          {/* Mobile view: only the selected plan's value */}
          <div className="flex justify-end p-4 pr-6 md:hidden">
            <CellDisplay
              val={[row.audit, row.system, row.ongoing][selectedPlan]}
            />
          </div>

          {/* Desktop view: all three plans side-by-side */}
          <div className="hidden h-full md:col-span-3 md:flex">
            {[row.audit, row.system, row.ongoing].map((val, i) => (
              <div
                key={i}
                className={cn(
                  'flex h-full flex-1 items-center p-6',
                  i < 2 && 'border-dark-gray border-r',
                  i === 1 && 'bg-jet',
                )}
              >
                <CellDisplay val={val} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────────  CELL ──────────────────────────── */

function CellDisplay({ val }: { val: Cell }) {
  if (val === 'unlimited')
    return <InfinityIcon className="text-foreground size-5" />;

  if (typeof val === 'boolean')
    return val ? (
      <Check className="text-foreground size-5" />
    ) : (
      <XIcon className="text-muted-foreground size-5" />
    );

  return (
    <div className="flex items-center gap-2">
      <Check className="text-foreground size-4" />
      <span className="text-sm">{val}</span>
    </div>
  );
}
