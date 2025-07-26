import { useRouter } from "next/router";

export default function ArticlePage() {
  const { slug } = useRouter().query;

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        Упражнение: {slug}
      </h1>
      <p>Здесь будет описание упражнения, видео и картинки.</p>

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/2pLT-olgUJs"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ marginTop: "1rem" }}
      ></iframe>
    </main>
  );
}
