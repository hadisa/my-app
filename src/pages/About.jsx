
import Footer from "../section/Footer";
import Header from "../section/Header";

function About() {


  const studentNamesList = ["narges", "Basier", "staysh","Basier","Basier"];

  const result = studentNamesList.map((name) => {
    return name.toLocaleUpperCase()
  })
  console.log(studentNamesList)
  console.log(result)

  // filter
  const filterResult = studentNamesList.filter((name) => {
    return name === "Basier";
  })

  console.log(filterResult)

  return (

    <div className="min-h-screen w-full space-y-10 bg-[#fffbeb]">
      <Header />
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        About Page

      </div>
      <Footer />
    </div>
  );
}

export default About;
