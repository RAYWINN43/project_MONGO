"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {
  const slides = [
    {
      src: "/biere4.png",
      alt: "Bouteille",
      title: "NOS BIÈRES",
      text: "Nos bières répondent à des critères rigoureux pour vous offrir un choix varié : des incontournables aux pépites méconnues.",
    },
    {
      src: "/biere2.png",
      alt: "Bouteille",
      title: "NOS BRASSERIES",
      text: "Nous travaillons avec des brasseurs passionnés et des partenaires de confiance afin de garantir qualité, traçabilité et diversité.",
    },
    {
      src: "/biere3.png",
      alt: "Bouteille",
      title: "NOTRE SÉLECTION",
      text: "Des blondes légères aux IPA intenses, en passant par des bières artisanales rares : une sélection pensée pour tous les goûts.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <section className={styles.heroCard}>
          <div className={styles.bottle} aria-hidden>
            <Image
              src={slides[activeSlide].src}
              alt={slides[activeSlide].alt}
              width={50}
              height={80}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <div>
            <h1>{slides[activeSlide].title}</h1>
            <p className={styles.heroText}>{slides[activeSlide].text}</p>
          </div>
        </section>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                border: "none",
                background: "#d6a85d",
                opacity: activeSlide === i ? 1 : 0.5,
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        <div className={styles.divider} />

        <h2 className={styles.h2}>Qui sommes-nous ?</h2>

        <section className={styles.aboutCard}>
          <div className={styles.aboutIcon} aria-hidden>
            👥
          </div>

          <div>
            <p className={styles.aboutText}>
              Nous sommes une entreprise fondée en 1985. Depuis nos débuts, nous mettons un point d’honneur à sélectionner les meilleures bières pour nos clients. Notre métier est avant tout une passion que nous exerçons avec cœur et exigence.
            </p>
          </div>
        </section>

        <h2 className={styles.h2}>Où est notre usine ?</h2>

        <section className={styles.map}>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.851%2C45.756%2C4.861%2C45.760&layer=mapnik&marker=45.758229%2C4.856318"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </main>
  );
}