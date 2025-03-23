export default function DynamicBackground({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <div
      className="h-full w-full relative z-0"
      style={{
        backgroundImage: "url('/img/bg-render-dev.png')",
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
}
