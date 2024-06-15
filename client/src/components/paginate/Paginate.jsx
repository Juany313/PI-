// Paginate.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  advancePage,
  goBackPage,
  setCurrentPage,
  resetPage
} from '../../redux/actions';

const Paginate = ({
  currentPage,
  totalPages,
  maxButtonsToShow
}) => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(resetPage());
  };

  const nextPage = () => {
    dispatch(advancePage());
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(goBackPage());
    }
  };

  const finalPage = () => {
    dispatch(setCurrentPage(totalPages));
  };

  const goToPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  // Calcula el rango de botones de página a mostrar
  let startPage = currentPage - Math.floor(maxButtonsToShow / 2);
  let endPage = startPage + maxButtonsToShow - 1;

  // Ajusta el inicio y fin del rango si es necesario
  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPages, maxButtonsToShow);
  } else if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxButtonsToShow + 1);
  }

  const pageButtons = [];
  for (let i = startPage; i <= endPage; i++) {
    const buttonStyle = i === currentPage ? { 
      border: '2px solid #1a1a1a',
      borderRadius: '20px',
      backgroundColor: '#41e6e5',
      color: '#1a1a1a'
    } : null;
    pageButtons.push(
      <button key={i} type="button" onClick={() => goToPage(i)} style={buttonStyle}>{i}</button>
    );
  }

  return (
    <div>
      <button type="button" onClick={prevPage}>
        Prev
      </button>
      <button type="button" onClick={handleResetClick}>
        ..
      </button>
      {pageButtons}
      <button type="button" onClick={finalPage}>
        ..
      </button>
      <button type="button" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};

export default Paginate;
