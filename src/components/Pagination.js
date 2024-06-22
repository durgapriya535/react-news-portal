import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>&laquo; Previous</button>
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next &raquo;</button>
    </div>
  );
};

export default Pagination;
