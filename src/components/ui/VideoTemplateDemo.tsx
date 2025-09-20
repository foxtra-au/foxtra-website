'use client';

export function VideoTemplateDemo() {
  const videoReels = [
    {
      id: 1,
      title: "Social Media Reel",
      type: "Instagram",
      gradientClass: "bg-gradient-to-br from-yellow-400/20 to-rose-600/20",
      duration: "15s"
    },
    {
      id: 2,
      title: "Brand Story",
      type: "TikTok",
      gradientClass: "bg-gradient-to-br from-rose-600/20 to-yellow-400/20",
      duration: "30s"
    },
    {
      id: 3,
      title: "Product Demo",
      type: "YouTube",
      gradientClass: "bg-gradient-to-br from-blue-400/20 to-purple-600/20",
      duration: "45s"
    },
    {
      id: 4,
      title: "Behind Scenes",
      type: "Instagram",
      gradientClass: "bg-gradient-to-br from-green-400/20 to-blue-600/20",
      duration: "20s"
    },
    {
      id: 5,
      title: "Tutorial",
      type: "TikTok",
      gradientClass: "bg-gradient-to-br from-purple-400/20 to-pink-600/20",
      duration: "25s"
    },
    {
      id: 6,
      title: "Testimonial",
      type: "YouTube",
      gradientClass: "bg-gradient-to-br from-orange-400/20 to-red-600/20",
      duration: "35s"
    }
  ];

  // Duplicate reels for seamless scrolling
  const duplicatedReels = [...videoReels, ...videoReels];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-full">
        {/* Two Reels Side by Side */}
        <div className="flex gap-4">
          {videoReels.slice(0, 2).map((reel) => (
            <div
              key={reel.id}
              className={`w-[200px] h-[300px] rounded-xl p-6 flex flex-col items-center justify-center ${reel.gradientClass}`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/90 text-sm font-semibold mb-2">{reel.title}</p>
                <p className="text-white/70 text-xs mb-1">{reel.type}</p>
                <p className="text-white/60 text-[10px]">{reel.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
