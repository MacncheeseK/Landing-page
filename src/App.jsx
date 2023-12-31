import {
  CustomerReviews,
  PopularProducts,
  Service,
  SpecialOffers,
  Footer,
  Hero,
  Subscribe,
} from './sections';
import Nav from './components/Nav';
import SuperQuality from './sections/SuperQuality';
import { useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu';

const App = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const toggleHamburgerMenu = () => {
    setHamburgerMenu((prev) => !prev);
  };

  return (
    <main className="relative">
      <Nav toggleHamburgerMenu={toggleHamburgerMenu} />

      <HamburgerMenu hamburgerMenu={hamburgerMenu} />

      <section className="x1:padding-l wide:padding-r padding-b mt-28">
        <Hero />
      </section>
      <section className=" padding">
        <PopularProducts />
      </section>
      <section className=" padding">
        <SuperQuality />
      </section>
      <section className=" padding-x py-10">
        <Service />
      </section>
      <section className=" padding">
        <SpecialOffers />
      </section>
      <section className=" bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className=" padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
};
export default App;
