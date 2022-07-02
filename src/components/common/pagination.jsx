import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pages = itemsCount / pageSize;

  if (pages <= 1) return null;
  const pageNumbers = _.range(1, pages + 1);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item "
              }
            >
              <a
                onClick={() => {
                  onPageChange(page);
                }}
                className="page-link"
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
