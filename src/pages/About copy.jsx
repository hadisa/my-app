import { useState } from "react";
import ServiceCard from "../components/ServicesCard";
import { services } from "../data/data";
import Footer from "../section/Footer";
import Header from "../section/Header";

function Home() {
  const [searchField, setSearchField] = useState("");

  const results = services.filter((item) =>
    item.title.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full space-y-10 bg-[#fffbeb]">
      <Header />

      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <form className="mb-8 flex flex-row flex-wrap gap-5">
          <input
            type="text"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            placeholder="Search services..."
            className="rounded-md border border-gray-300 bg-white px-4 py-2 outline-none focus:border-gray-500"
          />

          <button
            type="button"
            onClick={() => setSearchField("")}
            className="rounded-md bg-gray-800 px-5 py-2 text-white hover:bg-gray-700"
          >
            Clear
          </button>
        </form>

        {/* Services */}
        <div className="flex flex-row flex-wrap gap-5">
          {results.length > 0 ? (
            results.map((item) => (
              <ServiceCard
                key={item.id || item.title}
                item={item}
              />
            ))
          ) : (
            <p className="py-10 text-gray-500">
              No services found.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
