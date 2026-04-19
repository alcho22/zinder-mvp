type PlaceholderStateGridProps = {
  title: string;
  states?: string[];
};

const defaultStates = ["Loading", "Empty", "Error"];

export function PlaceholderStateGrid({ title, states = defaultStates }: PlaceholderStateGridProps) {
  return (
    <section className="space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-slate-400">
          Designer note: keep this page in the Figma with all primary states ready for future implementation.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {states.map((state) => (
          <div key={state} className="rounded-3xl border border-dashed border-white/15 bg-slate-950/40 p-5">
            <div className="text-sm font-medium text-cyan-200">{state}</div>
            <div className="mt-3 text-sm leading-6 text-slate-400">
              Placeholder UI for the {title.toLowerCase()} page in {state.toLowerCase()} state.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
