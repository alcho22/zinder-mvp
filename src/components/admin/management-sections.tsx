type Column = {
  key: string;
  label: string;
};

type ManagementTableProps = {
  title: string;
  description: string;
  columns: Column[];
  rows: Record<string, string>[];
};

export function ManagementTable({ title, description, columns, rows }: ManagementTableProps) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
      <div className="border-b border-white/10 px-6 py-5">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm">
          <thead className="bg-slate-950/40 text-slate-400">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-4 font-medium">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-200">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-white/5">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 align-top">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

type FilterChipSectionProps = {
  title: string;
  filters: string[];
};

export function FilterChipSection({ title, filters }: FilterChipSectionProps) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <div key={filter} className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-300">
            {filter}
          </div>
        ))}
      </div>
    </section>
  );
}

type DeliverableChecklistProps = {
  items: string[];
};

export function DeliverableChecklist({ items }: DeliverableChecklistProps) {
  return (
    <section className="rounded-[28px] border border-emerald-400/20 bg-emerald-400/10 p-6">
      <h2 className="text-xl font-semibold text-white">Designer deliverables</h2>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-emerald-100/90">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
