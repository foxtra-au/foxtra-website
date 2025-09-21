import FooterColumn from './FooterColumn';
import FooterNewsletter from './FooterNewsletter';

interface FooterProps {
  variant?: 'column' | 'newsletter';
  className?: string;
}

export default function Footer({ variant = 'newsletter', className = '' }: FooterProps) {
  if (variant === 'column') {
    return <FooterColumn />;
  }
  
  return <FooterNewsletter />;
}

// Export individual components for direct use
export { FooterColumn, FooterNewsletter };
