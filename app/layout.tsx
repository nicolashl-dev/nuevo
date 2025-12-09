import './globals.css'

export const metadata = {
  title: 'The Regeneration Suite',
  description: 'Action1 - The Regeneration Suite',
}

export default function RootLayout({ 
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sohne antialiased">{children}</body>
    </html>
  )
}