export default function DynamicBackground({
  children,
  subtle = false,
}: Readonly<{ children: React.ReactNode, subtle?: boolean }>) {

  const fadedBgStyle = "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),"

  return (
    <div
      className={`h-full w-full relative z-0`}
      style={{
        backgroundImage: `${subtle ? fadedBgStyle : ''} url('/img/bg-render-dev.png')`,
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </div>
  );
}
