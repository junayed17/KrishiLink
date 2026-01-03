import React from "react";
import ReactPaginate from "react-paginate";

const AllCropsDemoPagination = () => {
  const pageCount = 10; // demo হিসেবে মোট 10 page

  return (
    <section className="max-w-[1200px] mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        All Crops Demo Pagination
      </h2>

      {/* Demo Pagination */}
      <div className="flex justify-center mt-6">
        <ReactPaginate
          pageCount={pageCount} // total pages
          pageRangeDisplayed={5}
          previousLabel="< previous"
          nextLabel="next >"
          breakLabel="..."
          onPageChange={() => {}} // click does nothing
          containerClassName="flex gap-2"
          pageClassName="px-3 py-1 border rounded hover:bg-green-100 cursor-pointer"
          activeClassName="bg-green-600 text-white"
          previousClassName="px-3 py-1 border rounded hover:bg-green-100 cursor-pointer"
          nextClassName="px-3 py-1 border rounded hover:bg-green-100 cursor-pointer"
          breakClassName="px-3 py-1 border rounded"
        />
      </div>
    </section>
  );
};

export default AllCropsDemoPagination;
