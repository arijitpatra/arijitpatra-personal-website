export default function Page() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center gap-4 text-lg">
        <a
          href="/ArijitPatra.pdf"
          target="_blank"
          className="px-20 py-2 border-4 border-slate-600  hover:bg-slate-600 hover:text-white"
        >
          View PDF
        </a>
        <a
          href="/ArijitPatra.pdf"
          className="px-20 py-2 border-4 border-slate-600  hover:bg-slate-600 hover:text-white"
          download
        >
          Download
        </a>
      </section>
      <p className="flex justify-center text-xs mt-4">
        Last updated on Mar 19th, 2024
      </p>
    </>
  );
}
