import "./App.css";
import ServicesCard from "./components/ServicesCard";
import StudentCard from "./components/StudentCard";
import Welcome from "./components/Welcome";

function App() {
  // link github repo
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <ServicesCard />
      <Welcome />
      <StudentCard
        name="John Doe"
        age="20"
        favoriteLang="JavaScript"
        isStudent={true}
      />
    </div>
  );
}

export default App;
