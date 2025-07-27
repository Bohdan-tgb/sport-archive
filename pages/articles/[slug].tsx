import React from "react";
import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>📝 Упражнение: {slug}</h1>
      <p>Здесь будет подробная информация об упражнении.</p>
    </main>
  );
}