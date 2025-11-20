import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Create Next App",
  description: "お問い合わせページ",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

