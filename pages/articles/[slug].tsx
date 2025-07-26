import { useRouter } from "next/router";

export default function ArticlePage() {
  const { slug } = useRouter().query;

  return (
    <main style={{ padding: "2rem", fontFamily: "Manrope" }}>
      <h1>Упражнение: {slug}</h1>
      <p>Контент упражнения появится здесь...</p>
    </main>
  );
}
