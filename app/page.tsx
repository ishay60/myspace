import { Metadata } from "next";
import NavMenu from "./NavMenu";

//export const dynamic = "force-static"; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

export default function Blog() {
  return (
    <div>
      <h1>About us</h1>
      <NavMenu />
      <p>This is our Blog</p>
    </div>
  );
}
