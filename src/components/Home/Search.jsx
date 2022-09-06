import React, { useState } from "react";

//styles
import styles from "./Search.module.css";

//icons
import { FiSearch } from "react-icons/fi";
// import curve from "./assets/img/curve.svg";

function Search() {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <div className={styles.container}>
        <form className={styles.advanceSearch}>
          <div className={styles.searchBox}>
            <input
              className={styles.input}
              type="text"
              placeholder="جستجو در همه ..."
              value={search}
              onChange={searchHandler}
            />
            <button>
              <FiSearch
                style={{ color: "#fff", fontSize: "40px", marginLeft: "20px" }}
              />
            </button>
          </div>
        </form>
      </div>
      {/* <div className={styles.imgCurve}></div> */}
    </div>
  );
}

export default Search;
