import Component from "@/components/ui/login-1";
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Login - Access Your Account',
  description: 'Access your Foxtra dashboard to manage AI automation projects, monitor performance metrics, and configure your chat agents and voice automation systems. Secure login for business AI solutions.',
  path: '/login',
  keywords: ['login', 'sign in', 'foxtra login', 'AI automation dashboard', 'account access', 'user portal'],
});

export default function LoginPage() {
  return <Component />;
}
