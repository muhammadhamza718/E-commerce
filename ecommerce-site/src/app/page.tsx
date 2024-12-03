import HeroBanner from '@/components/HeroBanner';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import ProductList from '@/components/ProductList';
import Header from '@/components/Navbar';


export default function HomePage() {
  return (

    <div>
      <HeroBanner />
      <Categories />
      <Features />
      <ProductList />
      <Testimonials />
    </div>
  );
}
