import Image from 'next/image';

export default function PopularMenuSection() {
  const categories = ['All category', 'Dinner', 'Lunch', 'Dessert', 'Drink'];
  const items = [
    { name: 'Spaghetti', image: '/images/spaghetti.png' },
    { name: 'Gnocchi', image: '/images/gnocchi.png' },
    { name: 'Rovioli', image: '/images/rovioli.png' },
    { name: 'Penne Alla Vodak', image: '/images/penne.png' },
    { name: 'Risoto', image: '/images/risoto.png' },
    { name: 'Splitza Signature', image: '/images/pizza.png' },
  ];

  return (
    <div className="w-full px-8 sm:px-20">
      <h2 className="text-center text-4xl font-bold text-gray-800">Our popular menu</h2>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {categories.map((cat, index) => (
          <button
            key={cat}
            className={`rounded-full px-6 py-2 text-sm font-medium transition ${
              index === 0
                ? 'bg-[#3E260E] text-white'
                : 'bg-[#F5F5F5] text-gray-700 hover:bg-[#FFE0B3]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-lg"
          >
            <Image src={item.image} alt={item.name} width={140} height={140} />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 text-[#FF8A00]">★★★★★</div>
            <div className="mt-4 flex w-full items-center justify-between px-4">
              <span className="text-lg font-bold text-gray-800">$12.05</span>
              <button className="rounded-full bg-[#FF8A00] px-4 py-2 text-sm text-white hover:bg-[#FF7A00]">
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center gap-2">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className="h-8 w-8 rounded-full bg-[#FF8A00] text-white hover:bg-[#FF7A00]"
          >
            {num}
          </button>
        ))}
        <button className="h-8 w-8 rounded-full bg-gray-200 text-gray-600">›</button>
      </div>
    </div>
  );
}
