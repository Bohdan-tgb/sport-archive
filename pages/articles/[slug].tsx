import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main>
      <h1>Статья: {slug}</h1>
      <p>Контент статьи будет здесь</p>
    </main>
  );
}
