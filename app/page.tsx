import { Metadata } from "next";
import NavMenu from "./NavMenu";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

//export const dynamic = "force-static"; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <main></main>;
}

