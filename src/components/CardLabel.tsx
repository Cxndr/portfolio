
type CardLabelProps = {
  label: string;
  color: "pink" | "blue" | "yellow" | "dark" | "light";
  className?: string;
}

export default function CardLabel({ label, color, className }: CardLabelProps) {

  const bgColor = 
    color === "pink" ? "bg-th-pink-500" : 
    color === "blue" ? "bg-th-blue-500" : 
    color === "yellow" ? "bg-th-yellow-500" : 
    color === "dark" ? "bg-th-neutral-950" : 
    "bg-th-neutral-50";

  return (
    <div className={`absolute -rotate-8 -top-5 -left-5 px-4 py-3 ${bgColor} rounded-lg shadow-md shadow-th-neutral-950/50 ${className}`}>
      <h3 className="text-th-neutral-50 max-md:!text-2xl">
        {label}
      </h3>
    </div>
  );
}