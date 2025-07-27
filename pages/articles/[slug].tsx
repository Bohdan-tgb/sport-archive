import React from "react";
import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main>
      <h1>Упражнение: {slug}</h1>
      <p>Подробности об упражнении появятся здесь.</p>
    </main>
  );
}
