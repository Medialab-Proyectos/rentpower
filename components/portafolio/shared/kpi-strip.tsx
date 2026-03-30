
interface KPI {
  value: string;
  label: string;
}

interface KPIStripProps {
  kpis: KPI[];
  valueClassName?: string;
}

export function KPIStrip({ kpis, valueClassName }: KPIStripProps) {
  return (
    <section className="relative border-y border-border bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-4 md:gap-8 lg:py-16">
          {kpis.map((kpi, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center text-center space-y-2 p-4 rounded-2xl transition-all hover:bg-muted/50"
            >
              <span className={valueClassName ?? "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] group-hover:scale-110 transition-transform"}>
                {kpi.value}
              </span>
              <span className="text-sm md:text-base text-muted-foreground font-medium">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#2dd4bf]/5 to-transparent" />
    </section>
  );
}
