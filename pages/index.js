import Image from "next/image";
import { Inter } from "next/font/google";
import Blutzuckermesser from "./Blutzuckermesser";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Blutzuckermesser /> 
    </div>
  );
}
