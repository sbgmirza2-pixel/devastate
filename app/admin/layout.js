import AdminClientShell from './AdminClientShell';

export const metadata = {
  title: 'Admin Control Center - Devastate APK',
  description: 'Private administration panel for Devastate APK.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminLayout({ children }) {
  return <AdminClientShell>{children}</AdminClientShell>;
}
