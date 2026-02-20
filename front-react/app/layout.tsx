import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BEERANDME",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <header
          style={{
            background: "#F8C070",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "#181818",
                fontWeight: 900,
                fontSize: 18,
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
              BEERANDME
            </Link>

            <Link
              href="/shop"
              style={{
                textDecoration: "none",
                color: "#181818",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Shop
            </Link>
          </div>

          <Link
            href="/cards"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
              color: "#181818",
              fontWeight: 700,
            }}
          >
            <Image
              src="/panier.png"
              alt="Panier"
              width={22}
              height={22}
            />
            Panier
          </Link>

          <Link
            href="/users"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
              color: "#181818",
              fontWeight: 700,
            }}
          >
            <Image
              src="/se-connecter.png"
              alt="Users"
              width={22}
              height={22}
            />
            Se connecter
          </Link>

        </header>

        <div style={{ flex: 1 }}>{children}</div>

        <footer
          style={{
            background: "#F8C070",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 14,
            fontWeight: 700,
            color: "#181818",
          }}
        >
          <span>© 2026 BEERANDME</span>

          <Link href="/cgv" style={{ textDecoration: "none", color: "#181818" }}>
            CGV
          </Link>
        </footer>
      </body>
    </html>
  );
}