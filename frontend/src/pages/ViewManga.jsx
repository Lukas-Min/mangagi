import React from "react";
import MangaViewDetails from "../components/MangaViewDetails";

const ViewManga = (Title) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-[15vw] me-24 pb-64">
      <div className="lg:col-span-2">
        <MangaViewDetails />
      </div>
      <div className="lg:col-span-1">
        <img src="" className="border-4 border-red-300 w-full h-155 mt-14 mx-24 rounded-lg"></img>
      </div>
    </section>
  );
};

export default ViewManga;
