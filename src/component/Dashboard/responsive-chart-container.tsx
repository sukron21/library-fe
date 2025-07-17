"use client";

import { ChartContainer } from "@/components/ui/chart";
import type { ReactNode } from "react";

interface ResponsiveChartContainerProps {
  config: any;
  children: ReactNode;
  className?: string;
}

export default function ResponsiveChartContainer({
  config,
  children,
  className = "h-[300px]",
}: ResponsiveChartContainerProps) {
  return (
    <div className="w-full overflow-hidden">
      <ChartContainer config={config} className={className}>
        <div className="w-full h-full">{children}</div>
      </ChartContainer>
    </div>
  );
}
