import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ totalProducts, paginate, page }) => {
  const postsPerPage = 5;

  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={() => paginate(page - 1)}>
        Prev
      </button>
      {[...Array(Math.ceil(totalProducts / 5))].map((_, i) => (
        <span
          className={
            i + 1 === page
              ? classes.pageNumber + " " + classes.selected
              : classes.pageNumber
          }
          onClick={() => paginate(i + 1)}
        >
          {i + 1}
        </span>
      ))}
      <button className={classes.btn} onClick={() => paginate(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
