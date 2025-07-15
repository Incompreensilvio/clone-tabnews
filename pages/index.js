function Home() {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "blue" }}>Olá senhora!</h1>
      <p style={{ color: "blue" }}>Gostaria de jogar um Areninho com migs?!</p>

      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Então entra no TeamSpeak 😎")}
      >
        Jogar
      </button>
    </div>
  );
}
export default Home;
