import Image from 'next/image';

export function BlogArticleDemo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-full">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
            alt="Blog & Article Writing - Professional content creation and SEO optimization"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
