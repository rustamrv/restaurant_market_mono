import './../globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  console.log({
    'dvsdvsdvsdv': 'sfcasVCAS'
  });
  
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center">{children}</body>
    </html>
  );
}
