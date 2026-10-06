const Contact = () => {
  return (
    <div className="mx-auto max-w-2xl space-y-10">
      <section className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Kontakt zum Archiv
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-50">
          Nachricht senden
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-slate-300">
          Fragen, Ideen oder Hinweise zu den Archiven? Hinterlasse eine
          Nachricht für die Archivare.
        </p>
      </section>

      <form className="grid grid-cols-1 gap-6 rounded-3xl border border-cyan-900/50 bg-slate-950/60 p-8 shadow-xl">
        <div className="space-y-2">
          <label
            className="block text-sm font-semibold text-slate-200"
            htmlFor="name"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Dein Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-semibold text-slate-200"
            htmlFor="email"
          >
            E-Mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="du@beispiel.de"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-semibold text-slate-200"
            htmlFor="message"
          >
            Nachricht
          </label>

          <textarea
            id="message"
            className="h-36 w-full resize-y rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
            placeholder="Deine Nachricht an das Archiv..."
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="rounded-xl border border-cyan-500/40 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
          >
            Nachricht senden
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
