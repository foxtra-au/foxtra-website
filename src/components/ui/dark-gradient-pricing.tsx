"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ShadcnButton } from "@/components/ui/ShadcnButton"
import { ShadcnCard } from "@/components/ui/ShadcnCard"

interface BenefitProps {
  text: string
  checked: boolean
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-4 place-content-center rounded-full bg-white text-sm text-black">
          <Check className="size-3" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-500">
          <X className="size-3" />
        </span>
      )}
      <span className="text-sm text-zinc-300 font-medium">{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
    >
      <ShadcnCard
        className={cn(
          "relative h-full w-full overflow-hidden border",
          "border-zinc-700 bg-gradient-to-br from-zinc-950/80 to-zinc-900/90",
          "p-6 shadow-2xl",
          className,
        )}
      >
        <div className="flex flex-col items-center border-b pb-6 border-zinc-700">
          <span className="mb-6 inline-block text-zinc-50 text-lg font-medium">
            {tier}
          </span>
          <span className="mb-3 inline-block text-4xl font-bold text-white">
            {price}
          </span>
          <span className="bg-gradient-to-br from-zinc-200 to-zinc-400 bg-clip-text text-center text-transparent text-sm">
            {bestFor}
          </span>
        </div>
        <div className="space-y-4 py-9">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        <ShadcnButton
          className={cn(
            "w-full font-semibold transition-all duration-300",
            tier === "Professional" 
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl" 
              : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-600"
          )}
        >
          {CTA}
        </ShadcnButton>
      </ShadcnCard>
    </motion.div>
  )
}
