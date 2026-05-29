export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large soft orb top-right */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, oklch(0.45 0.18 268 / 0.35), transparent 70%)",
          animation: "floatOrb 12s ease-in-out infinite",
        }}
      />
      {/* Medium orb bottom-left */}
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.15 165 / 0.30), transparent 70%)",
          animation: "floatOrb 15s ease-in-out infinite 2s",
        }}
      />
      {/* Small accent orb center-right */}
      <div
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, oklch(0.50 0.20 285 / 0.35), transparent 70%)",
          animation: "floatOrb 10s ease-in-out infinite 1s",
        }}
      />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.45 0.18 268) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.45 0.18 268) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
