"use client";
import { FC, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
}

export const Tooltip: FC<Props> = ({ children, tooltip }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={container}
      className="group relative inline-block"
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();
        tooltipRef.current.style.left = clientX - left + "px";
      }}
    >
      {children}
      <span
        ref={tooltipRef}
        className="
        invisible
        group-hover:visible
        opacity-0 group-hover:opacity-100
        transition
        dark:bg-gray-800
        text-gray-500 dark:text-gray-300
        leading-8 tracking-tight
        rounded
        absolute
        top-full
        mt-2
        p-1
        whitespace-nowrap
        "
      >
        {tooltip}
      </span>
    </div>
  );
};
