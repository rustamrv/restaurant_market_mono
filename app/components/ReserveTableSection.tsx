import Image from 'next/image';

export default function ReserveTableSection() {
  return (
    <div className="flex w-full items-center justify-between bg-[#FFF7EF] px-8 py-16 sm:px-20">
      <div className="relative mx-auto h-[420px] w-[420px]">
        <div className="absolute inset-0 -top-[50px] -left-[50px] z-0 h-[520px] w-[520px] rounded-full border border-[#e2d9ce] opacity-80"></div>

        <div className="absolute inset-0 overflow-hidden rounded-full border-[16px] border-[#FFEBD8] bg-[#E1C39F] shadow-md">
          <Image
            src="/images/reserve-table.png"
            alt="Reserve Table"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-[-40px] right-[-30px] h-[90px] w-[90px] overflow-hidden rounded-full border-[4px] border-[#FFEBD8] shadow-md">
          <Image src="/images/top-circle.png" alt="Top circle" fill className="object-cover" />
        </div>

        <div className="absolute bottom-[-40px] left-[-30px] h-[90px] w-[90px] overflow-hidden rounded-full border-[4px] border-[#FFEBD8] shadow-md">
          <Image
            src="/images/bottom-circle.png"
            alt="Bottom circle"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-1/2 px-8">
        <h2 className="text-4xl font-bold text-[#2E1C0D]">
          Lets reserve <span className="text-[#FF8A00]">a table</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies et eleifend
          proin. Congue nibh nulla malesuada ultrices nec quam.
        </p>
        <button className="mt-6 rounded-full bg-[#FF8A00] px-6 py-3 text-sm text-white hover:bg-[#FF7A00]">
          Reservation
        </button>
      </div>
    </div>
  );
}
