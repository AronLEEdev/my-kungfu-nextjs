export default function MarkdownLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="prose p-2">{children}</div>;
}
