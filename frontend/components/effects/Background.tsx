import AnimatedMesh from "@/components/background/AnimatedMesh";
import FloatingLightBlobs from "@/components/background/FloatingLightBlobs";
import Noise from "@/components/background/Noise";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50">
      {/* Layer 1: Animated mesh gradients - slowest, deepest */}
      <AnimatedMesh />
      
      {/* Layer 2: Blurred translucent blobs - mid layer */}
      <FloatingLightBlobs />
      
      {/* Layer 3: Subtle grain overlay - top layer */}
      <Noise />
    </div>
  );
}
