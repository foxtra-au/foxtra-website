export function VideoTemplateDemo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-full">
        <div className="flex gap-4">
          {/* First Reel */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-2xl">
            <div className="relative w-[180px] h-[300px] bg-gradient-to-br from-yellow-400/20 to-rose-600/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-xs font-medium">Reel 1</p>
                <p className="text-white/60 text-[10px] mt-1">Social Media</p>
              </div>
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                width={180}
                height={300}
                controls
                preload="metadata"
              >
                <source src="/videos/reel1.mp4" type="video/mp4" />
                <source src="/videos/reel1.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Second Reel */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-2xl">
            <div className="relative w-[180px] h-[300px] bg-gradient-to-br from-rose-600/20 to-yellow-400/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-xs font-medium">Reel 2</p>
                <p className="text-white/60 text-[10px] mt-1">Brand Story</p>
              </div>
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                width={180}
                height={300}
                controls
                preload="metadata"
              >
                <source src="/videos/reel2.mp4" type="video/mp4" />
                <source src="/videos/reel2.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
