function ServicesCard() {
  return (
    <div className="flex gap-5 flex-row border p-6 border-gray-50 shadow-md shadow-gray-300 w-[500px]">
      <img src="/1.png" alt="card" className="w-[50px]" />
      <div className="flex flex-col gap-3">
        <h2>Primary Care and Internal MD</h2>
        <p>our Doctors Partner with you to help you to reach your welness</p>
      </div>
    </div>
  );
}

export default ServicesCard;
