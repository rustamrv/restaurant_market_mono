export default function WorkingTimeSection() {
  return (
    <section className="rounded-12xl relative h-[600px] w-full overflow-hidden bg-[url('/images/open.png')] bg-cover bg-center">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">we are open from</h2>
        <p className="mb-6 text-xl font-semibold sm:text-2xl">Monday–Sunday</p>

        <div className="mb-6 space-y-1 text-sm sm:text-base">
          <p>Launch : Mon–Sun : 11:00am–02:00pm</p>
          <p>Dinner : Sunday : 04:00pm–08:00pm</p>
          <p>04:00pm–09:00pm</p>
        </div>

        <div className="flex gap-4">
          <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:opacity-90">
            Order now
          </button>
          <button className="rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100">
            Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
