import { Footer } from "@/components/Footer";

export default function StackLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
