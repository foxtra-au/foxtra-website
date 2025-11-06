import Component from "@/components/ui/login-1";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Foxtra - Access Your Account',
  description: 'Access your Foxtra dashboard to manage AI automation projects, monitor performance metrics, and configure your chat agents and voice automation systems. Secure login for business AI solutions.',
  keywords: ['login', 'sign in', 'foxtra ai login', 'AI automation dashboard', 'account access', 'user portal'],
  openGraph: {
    title: 'Login | Foxtra - Access Your Account',
    description: 'Access your Foxtra dashboard to manage AI automation projects, monitor performance metrics, and configure your chat agents and voice automation systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Login | Foxtra - Access Your Account',
    description: 'Access your Foxtra dashboard to manage AI automation projects and monitor performance metrics.',
  },
};

export default function LoginPage() {
  return <Component />;
}
