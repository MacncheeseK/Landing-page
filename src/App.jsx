import {
  CustomerReviews,
  PopularProducts,
  SuperQuilty,
  Service,
  SpecialOffers,
  Footer,
  Hero,
  Subscribe
} from './sections';
import Nav from './components/Nav';


const App = () => (
  <main className="relative">
    <Nav />
    <section className="x1:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className=" padding">
      <PopularProducts />
    </section>
    <section className=" padding">
      <SuperQuilty />
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
export default App;
