import Link from "next/link";

const categories = [
  { name: "Спина", slug: "back", color: "#8ecae6" },
  { name: "Ноги", slug: "legs", color: "#ffb703" },
  { name: "Пресс", slug: "abs", color: "#fb8500" },
  { name: "Грудь", slug: "chest", color: "#219ebc" },
  { name: "Руки", slug: "arms", color: "#023047" },
];

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
        <span style={{ color: "#2196f3" }}>Sport Archive</span>
      </h1>
      <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
        Энциклопедия упражнений. Выберите категорию:
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/articles/${cat.slug}`}>
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                backgroundColor: cat.color,
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                flex: "1 0 150px",
                textAlign: "center",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget.style.transform = "scale(1.05)"))
              }
              onMouseLeave={(e) =>
                ((e.currentTarget.style.transform = "scale(1)"))
              }
            >
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
