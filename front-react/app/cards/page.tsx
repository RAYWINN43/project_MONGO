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
          PAGE PANIER EN COUR DE CONSTRUCTION 
        </h1>
      </div>
    </main>
  );
}