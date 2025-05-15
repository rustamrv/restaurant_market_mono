import './../globals.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen items-center justify-center overflow-x-hidden bg-white px-4">
        {children}
      </body>
    </html>
  );
}
