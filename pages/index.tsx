import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Спина", slug: "back" },
    { name: "Ноги", slug: "legs" },
    { name: "Пресс", slug: "abs" },
    { name: "Грудь", slug: "chest" },
    { name: "Руки", slug: "arms" },
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Добро пожаловать в <span style={{ color: "#4e8cff" }}>Sport Archive</span>
      </h1>

      <p style={{ marginBottom: "1rem" }}>
        Выберите категорию упражнений:
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/articles/${cat.slug}`}>
            <div
              style={{
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
                width: "150px",
                textAlign: "center",
                background: "#f8f8f8",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget.style.background = "#e0e0ff"))
              }
              onMouseLeave={(e) =>
                ((e.currentTarget.style.background = "#f8f8f8"))
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
