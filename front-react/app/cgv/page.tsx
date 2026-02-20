export default function CgvPage() {
  const pageStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 52px - 58px)",
    background: "#f8f0e0",
    padding: "20px 16px",
    display: "flex",
    justifyContent: "center",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 700,
    width: "100%",
    color: "#181818",
  };

  const h2Style: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 800,
    marginTop: 20,
    marginBottom: 6,
  };

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={{ fontSize: 22, fontWeight: 900, marginBottom: 16 }}>
          Conditions Générales de Vente
        </h1>

        <h2 style={h2Style}>1. Objet</h2>
        <p>
          Les présentes conditions régissent les ventes réalisées sur le site.
        </p>

        <h2 style={h2Style}>2. Produits</h2>
        <p>
          Les produits proposés sont décrits avec la plus grande exactitude possible.
        </p>

        <h2 style={h2Style}>3. Prix</h2>
        <p>
          Les prix sont indiqués en euros HT et peuvent être modifiés à tout moment.
        </p>

        <h2 style={h2Style}>4. Paiement</h2>
        <p>
          Le paiement est exigible immédiatement à la commande.
        </p>

        <h2 style={h2Style}>5. Livraison</h2>
        <p>
          Les délais de livraison sont donnés à titre indicatif.
        </p>

        <h2 style={h2Style}>6. Droit de rétractation</h2>
        <p>
          Conformément à la législation en vigueur, le client dispose d’un délai légal de rétractation.
        </p>

        <h2 style={h2Style}>7. Contact</h2>
        <p>
          Pour toute question : evan@BEERANDME.fr
        </p>
      </div>
    </main>
  );
}