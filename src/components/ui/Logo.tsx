
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col leading-none", className)}>
            <span className="font-display font-bold tracking-tight group-hover:text-gold transition-colors">
                Rachel
            </span>
            <span className="font-display italic font-light tracking-wide group-hover:text-gold transition-colors text-[0.8em]">
                Preece
            </span>
        </div>
    );
}
