import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Poke from "../public/poke.jpg";
// <Image src="/poke.jpg"  width={400} height={400} alt="poke foto" />

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Hola next</p>
      <Link href="/chanchitos">Go to Chanchitos</Link>
      <Image src={Poke} width={400} height={400} alt="poke foto" />
    </div>
  );
}
