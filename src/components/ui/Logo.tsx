
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    variant?: "default" | "light";
}

export default function Logo({ className, variant = "default" }: LogoProps) {
    return (
        <div className={cn("flex flex-col select-none", className)}>
            <span className={cn(
                "font-display font-extrabold uppercase tracking-[0.2em] text-2xl md:text-3xl leading-none",
                variant === "light" ? "text-white" : "text-charcoal"
            )}>
                Rachel
            </span>
            <span className={cn(
                "font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-bold ml-[0.15em] mt-1.5",
                variant === "light" ? "text-white/60" : "text-charcoal/60"
            )}>
                Preece
            </span>
        </div>
    );
}
