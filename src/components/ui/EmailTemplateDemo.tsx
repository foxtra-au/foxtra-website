import Image from 'next/image';

export function EmailTemplateDemo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-full">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/services/email-template.png"
            alt="Email Marketing Template"
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
