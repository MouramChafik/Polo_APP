import * as React from "react";
import { cn } from "../../../lib/utils";

const Accordion = React.forwardRef(({ className, type = "single", collapsible = false, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} data-type={type} data-collapsible={collapsible} {...props} />
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className)}
    {...props}
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 transition-transform duration-200"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("overflow-hidden text-sm transition-all", className)} {...props}>
    <div className="pb-4 pt-0">{children}</div>
  </div>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };