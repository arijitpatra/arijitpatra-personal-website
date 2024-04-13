export default function Page() {
  return (
    <>
      <section className="flex justify-center gap-4 text-lg">
        <button className="px-20 py-2 border-4 border-slate-600  hover:bg-slate-600 hover:text-white">
          View PDF
        </button>
        <button className="px-20 py-2 border-4 border-slate-600 hover:bg-slate-600 hover:text-white">
          Download
        </button>
      </section>
      <p className="flex justify-center text-xs mt-4">
        Last updated on Mar 19th, 2024
      </p>
    </>
  );
}
