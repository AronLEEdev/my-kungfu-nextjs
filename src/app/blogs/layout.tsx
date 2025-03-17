
export default function MarkdownLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="prose p-2">
          {children}
        </div>
      </body>
    </html>
  );
}
