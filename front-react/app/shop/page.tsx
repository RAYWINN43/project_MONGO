// app/shop/page.tsx
import styles from "./shop.module.css";
import Image from "next/image";


async function getBeers() {
    const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
    const res = await fetch(`${base}/beer`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Impossible de récupérer les bières");
    }
    return res.json();
}

export default async function ShopPage() {
    const beers = await getBeers();
    const displayed = Array.isArray(beers) ? beers.slice(0, 4) : [];

    return (
        <div className={styles.page}>

            <main className={styles.content}>
                <section className={styles.grid}>
                    {displayed.map((b: any) => (
                        <article key={b._id} className={styles.card}>
                            <div className={styles.cardIcon}>🍾</div>

                            <h2 className={styles.cardTitle}>
                                {b.nom_article ?? b.name ?? "Bière"}
                            </h2>

                            <p className={styles.cardText}>
                                {b.description ??
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                            </p>

                            <div className={styles.cardMeta}>
                                <div>Marque : {b.nom_marque ?? b.brewery ?? "-"}</div>
                                <div>Type : {b.type ?? b.style ?? "-"}</div>
                                <div>Titrage : {b.titrage ?? b.abv ?? "-"}% • Volume : {b.volume ?? b.volumeCl ?? "-"}cl</div>
                                {b.prix_15 != null || b.price != null ? (
                                    <div>Prix : {(b.prix_15 ?? b.price).toFixed?.(2) ?? (b.prix_15 ?? b.price)} €</div>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}
