const About = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-900/50 bg-slate-950/60 px-6 py-14 text-center shadow-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Über das Archiv
          </p>

          <h1 className="text-4xl font-bold text-slate-50 md:text-5xl">
            Ewige Archive von Aeth’Vharis
          </h1>

          <p className="text-lg leading-8 text-slate-300">
            EAvA ist ein wachsendes Archiv einer gemeinsamen Fantasywelt – ein
            Ort für Regionen, Geschichten, Wesen und all die Spuren, aus denen
            Aeth’Vharis Stück für Stück sichtbar wird.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/60 p-7 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Die Welt
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-slate-50">
            Ein Archiv, viele Wege
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Orte und Überlieferungen bilden die gemeinsame Grundlage des
            Archivs. Von dort können sie in Geschichten, Pen-&-Paper-Abenteuern,
            Tools oder Spielen weiterleben.
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/25 bg-slate-900/60 p-7 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
            Im Wandel
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-slate-50">
            Wissen wächst mit der Welt
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Nicht jeder Eintrag ist endgültig. Das Archiv darf wachsen, sich
            verändern und neue Verbindungen sichtbar machen, während Aeth’Vharis
            weiter Gestalt annimmt.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-sky-500/25 bg-slate-950/60 p-8 shadow-xl">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <img
            src="/images/logo.png"
            alt="EAvA – Ewige Archive von Aeth’Vharis"
            className="mx-auto h-32 w-32 object-contain md:h-40 md:w-40"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Das Zeichen des Archivs
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-50">
              Drei Kräfte, eine gemeinsame Welt
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Blau, Grün und Rot greifen die drei prägenden Ebenen der Welt auf
              und verbinden sich im Zeichen der Ewigen Archive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
