import { redirect } from "next/navigation";

export default function Home() {
  redirect("/convert/text-to-pdf");
}
