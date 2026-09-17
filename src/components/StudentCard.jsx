function StudentCard({
  name = "Nargess",
  age = "18",
  favoriteLang = "HTML",
  isStudent,
}) {
  return (
    <div className="w-[250px] border rounded-md gap-3 h-fit p-4 m-14 border-gray-400 bg-gray-50 shadow-2xl">
      <h2 className="text-blue-500  hover:font-bold">Student Card</h2>

      <span className="text-gray-700">Name: {name}</span>
      <br />
      <span className="text-gray-700">Age: {age}</span>
      <br />
      <span className="text-gray-700">Favorite Lang: {favoriteLang}</span>

      <span className="text-gray-700">
        Is student? {isStudent ? "Yes" : "No"}
      </span>
    </div>
  );
}

export default StudentCard;
