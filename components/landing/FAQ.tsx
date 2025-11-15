"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react/dist/ssr";
import Container from "@/components/base/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Custom trigger component with morphing icons
const FAQTrigger = ({
  children,
  value,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  value: string;
}) => {
  const [isOpen, setIsOpen] = useState(value === "item-0");
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkState = () => {
      if (triggerRef.current) {
        // Check the parent AccordionItem's data-state
        const item = triggerRef.current.closest("[data-state]");
        const state = item?.getAttribute("data-state");
        setIsOpen(state === "open");
      }
    };

    // Check initial state after a small delay to ensure DOM is ready
    const timeout = setTimeout(checkState, 0);

    // Use MutationObserver to watch for state changes on the parent item
    const observer = new MutationObserver(checkState);
    if (triggerRef.current?.parentElement?.parentElement) {
      observer.observe(triggerRef.current.parentElement.parentElement, {
        attributes: true,
        attributeFilter: ["data-state"],
        subtree: true,
      });
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={triggerRef}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 md:py-5 text-left text-base md:text-lg font-semibold font-space-grotesk transition-all outline-none hover:no-underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 w-full group",
          className
        )}
        {...props}
      >
        <span className="text-left flex-1">{children}</span>
        <div className="relative size-5 shrink-0 mt-0.5 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "minus" : "plus"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {isOpen ? (
                <MinusIcon className="size-5 text-primary" weight="bold" />
              ) : (
                <PlusIcon
                  className="size-5 text-muted-foreground group-hover:text-primary transition-colors"
                  weight="bold"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const faqData = [
  {
    question: "What is Levelup Lab and how does it work?",
    answer:
      "Levelup Lab curates quality resources and generates AI-guided paths based on your goals. You learn through projects, assessments, and progress tracking that adapts as you grow.",
  },
  {
    question: "Is there a free version available?",
    answer:
      "Yes. You can explore core features for free. A paid plan unlocks advanced analytics, unlimited paths, and priority access to new tools.",
  },
  {
    question: "How accurate is the historical information?",
    answer:
      "We cross-reference multiple reputable sources and update content regularly. When uncertain, we surface citations and encourage verification.",
  },
  {
    question: "Can educators use this in their classrooms?",
    answer:
      "Absolutely. Educators can create cohorts, assign projects, and track progress with LevelupScore to support differentiated learning.",
  },
  {
    question: "Is this different from using ChatGPT?",
    answer:
      "Yes. Unlike one-off chats, Levelup Lab provides structured courses, persistent progress, and assessments designed for long-term mastery.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel at any time from your account settings. Your data remains accessible, and you can re-subscribe whenever you like.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-space-grotesk text-gradient leading-tight mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-space-grotesk">
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full space-y-4"
            >
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-neutral-300 rounded-lg px-4 md:px-6 bg-background shadow-custom hover:shadow-lg transition-shadow"
                  >
                    <FAQTrigger value={`item-${index}`}>
                      {faq.question}
                    </FAQTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground font-space-grotesk pb-4 md:pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
