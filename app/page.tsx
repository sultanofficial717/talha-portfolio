const highlights = [
  "Static export ready",
  "GitHub Actions deployment workflow",
  "Clean App Router baseline",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Talha Portfolio</p>
        <h1>Deployment-ready Next.js foundation.</h1>
        <p className="lede">
          This scaffold now builds as a static site and ships through GitHub
          Actions, so the repository can generate real deployment history.
        </p>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <div className="highlight" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}