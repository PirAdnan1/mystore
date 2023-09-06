import React, { useState } from "react";

// components
import Container from "@/components/Container";

// assets
import ShopList from "@/assets/ShopList";
import Grid from "@/assets/Grid";
import Vector from "@/assets/Vector";

function ShopDetails({ products }) {
  // console.log(products);
  // const [searchValue, setSearchValue] = useState("");
  // const [filteredItems, setFilteredItems] = useState(products);

  // const handleSearchChange = (e) => {
  //   const searchTerm = e.target.value.toLowerCase();

  //   // Filter items based on the search term
  //   const filtered = products.filter((item) =>
  //     item.category.toLowerCase().includes(searchTerm)
  //   );

  //   setSearchValue(e.target.value);
  //   setFilteredItems(filtered);
  // };
  return (
    <div className="bg-special">
      <Container>
        <div className="flex flex-col md:flex-row justify-between py-10 mt-12 md:px-4 lg:px-24 gap-5 items-center">
          <div className="flex lg:gap-8 gap-3">
            <div className="flex gap-2">
              <ShopList />
              <span>List</span>
            </div>
            <Grid />
            <Vector />
            <div className="w-0.5 h-8 bg-black" />
            <p className="text-base">Showing 1–16 of 32 results</p>
          </div>
          <div className="flex gap-7">
            <div className="flex items-center gap-4">
              <span>Show</span>
              <div className="bg-white flex items-center justify-center py-3 px-4 rounded-lg">
                <span>16</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>Sort by</span>
              <div className="bg-white flex items-center justify-center py-3 px-4 rounded-lg">
                {/* {products.map((item, index) => ( */}
                <span className="flex flex-col  ">Default</span>
                {/* ))} */}
              </div>
            </div>
            {/* <div>
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
              />
              <ul>
                {filteredItems.map((item) => (
                  <li key={item.id}>{item.category}</li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ShopDetails;
