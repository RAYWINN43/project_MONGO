import Link from "next/link";

export default function Home() {
  return (
      <main style={{ padding: 24 }}>
        <h1>Accueil</h1>
        <Link href="/shop">Aller au Shop →</Link>
      </main>
  );
}