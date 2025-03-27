import DynamicBackground from "@/components/DynamicBackground";
import ScatteredPhotos from "@/components/ScatteredPhotos";

export default function MarketingPage() {
  return (
    <DynamicBackground>
      <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-desktop">
          <ScatteredPhotos />
        </div>
      </div>
    </DynamicBackground>
  )
}