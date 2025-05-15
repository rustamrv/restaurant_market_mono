import Image from 'next/image';

export default function ReserveTableSection() {
  return (
    <section className="bg-[#FFF7EF] py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 md:flex-row md:justify-between">
        {/* Image section */}
        <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[420px] md:w-[420px]">
          {/* Outer ring */}
          <div className="absolute -top-[50px] -left-[50px] z-0 hidden h-[520px] w-[520px] rounded-full border border-[#e2d9ce] opacity-80 md:block"></div>

          {/* Main image with border */}
          <div className="absolute inset-0 overflow-hidden rounded-full border-[16px] border-[#FFEBD8] bg-[#E1C39F] shadow-md">
            <Image
              src="/images/reserve-table.png"
              alt="Reserve Table"
              fill
              className="object-cover"
            />
          </div>

          {/* Top small circle */}
          <div className="absolute -top-10 -right-8 h-[80px] w-[80px] overflow-hidden rounded-full border-[4px] border-[#FFEBD8] shadow-md">
            <Image src="/images/top-circle.png" alt="Top circle" fill className="object-cover" />
          </div>

          {/* Bottom small circle */}
          <div className="absolute -bottom-10 -left-8 h-[80px] w-[80px] overflow-hidden rounded-full border-[4px] border-[#FFEBD8] shadow-md">
            <Image
              src="/images/bottom-circle.png"
              alt="Bottom circle"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text block */}
        <div className="max-w-xl text-center md:w-1/2 md:text-left">
          <h2 className="text-4xl font-bold text-[#2E1C0D]">
            Let&apos;s reserve <span className="text-[#FF8A00]">a table</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies et eleifend
            proin. Congue nibh nulla malesuada ultrices nec quam.
          </p>
          <button className="mt-6 rounded-full bg-[#FF8A00] px-6 py-3 text-sm text-white transition hover:bg-[#FF7A00]">
            Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
