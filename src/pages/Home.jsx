import Footer from "../section/Footer";
import Header from "../section/Header";
import Hero from "../section/Hero";
import Service from "../section/Service";


function Home() {
  return (
    <div className="bg-[#fffbeb] w-full min-h-screen">
      <Header />
      <Hero />
      <Service />
      <Footer />
    </div>
  ); 
}

export default Home;
