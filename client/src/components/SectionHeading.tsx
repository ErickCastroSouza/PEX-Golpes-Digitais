import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, icon, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {icon && (
        <div className={`mb-4 inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary ${align === "center" ? "mx-auto" : ""}`}>
          {icon}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
