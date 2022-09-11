import React, { useState } from "react";
import styles from "./Search.module.css";
import { FiSearch } from "react-icons/fi";

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
    </div>
  );
}

export default Search;
