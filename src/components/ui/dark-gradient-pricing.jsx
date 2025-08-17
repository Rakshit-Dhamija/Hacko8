import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const Benefit = ({
  text,
  checked
}) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span
          className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
          <Check className="size-3" />
        </span>
      ) : (
        <span
          className="grid size-4 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400 ">
          <X className="size-3" />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
}

export const PricingCard = ({
  tier,
  prize,
  bestFor,
  benefits,
  className,
  rank, // Add rank parameter
  isHighlighted // Add isHighlighted parameter
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)" }}
      whileInView={{ filter: "blur(0px)", height: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}>
      <Card
        className={cn(
          "relative h-screen overflow-hidden border",
          "border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80",
          "p-3 md:p-6",
          className
        )}>
        <div
          className="flex flex-col items-center border-b pb-1.5 md:pb-3 border-zinc-700 ">
          <span className="mb-1.5 md:mb-3 inline-block text-zinc-50 ">
            {tier}
          </span>
          <span className="mb-1.5 md:mb-3 inline-block text-4xl font-medium text-zinc-50">
            {prize}
          </span>
          <span
            className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
            {bestFor}
          </span>
        </div>
        {/* Two-column layout for rank 2 and 3 cards */}
        <div className={cn(
          "py-3 md:py-6",
          (rank == 1 ||rank === 2 || rank === 3 ) 
            ? "grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-4" 
            : "space-y-2 md:space-y-4"
        )}>
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
