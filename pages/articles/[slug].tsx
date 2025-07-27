import React from "react";
import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main>
      <h1>Статья: {slug}</h1>
      <p>Подробности упражнения появятся здесь.</p>
    </main>
  );
}
