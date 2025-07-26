export default function BackPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Manrope" }}>
      <h1 style={{ fontSize: "2rem" }}>Упражнение: Тяга штанги в наклоне</h1>
      <p>Это одно из лучших упражнений для укрепления мышц спины.</p>
      <img
        src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg"
        alt="тяга штанги"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "12px", marginTop: "1rem" }}
      />
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/6TSP1TRMUzs"
        title="T-bar row"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ marginTop: "1rem", borderRadius: "12px" }}
      ></iframe>
      <p style={{ marginTop: "1rem" }}>
        Источник: <a href="https://www.healthline.com/health/exercise-fitness/barbell-row" target="_blank">Healthline</a>
      </p>
    </main>
  );
}
