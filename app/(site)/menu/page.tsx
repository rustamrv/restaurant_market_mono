import { Suspense, lazy } from 'react';
import Footer from '../../components/Footer';

const LazyPopularMenuSection = lazy(() => import('../../components/PopularMenuSection'));

export default function Menu() {
  return (
    <main className="flex flex-col gap-[74px] px-8 py-20 sm:px-20">
      <div className="px-8 sm:px-20">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyPopularMenuSection title="Main menu" />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}

