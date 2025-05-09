import clsx from "clsx";

type AsElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "div"

interface GradientTextProps {
    children: React.ReactNode;
    as?: AsElement;
    className?: string
}

const GradientText = ({ children, as, className }: GradientTextProps) => {
    const Componet = as || "span";

    return (
        <Componet className={clsx("bg-[conic-gradient(from_90deg_at_50%_50%,#4ade80_0%,#bbf7d0_50%,#4ade80_100%)] bg-clip-text text-transparent", className)}>{children}</Componet>
    );
}

export default GradientText;