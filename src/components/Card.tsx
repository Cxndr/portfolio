

export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-th-neutral-900 rounded-md shadow-th ${className}`}>
      {children}
    </div>
  );
}