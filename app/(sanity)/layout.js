import Link from 'next/link';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <button style={{ margin: '10px' }}>
          <Link href="/">Go to app</Link>
        </button>
        {children}
      </body>
    </html>
  );
}
