import type { Metadata } from "next";
import Standard from "@/components/organisms/standard";
import Card from "@/components/organisms/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "お問い合わせページ",
};

export default function ContactPage() {
  return (
    <Standard>
      <Card
        title= "Contact Info"
        address= "city A"
        mail= "abc@gmail.com"
        phone= "000-123-456"
      />
    </Standard>
  );
}

