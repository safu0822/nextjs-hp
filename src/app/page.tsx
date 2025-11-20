import Standard from "@/components/organisms/standard";
import type { Metadata } from "next";
import Navbar from "@/components/atoms/navbar";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <Standard>
      <p>Homeです</p>
    </Standard>
  );
}
