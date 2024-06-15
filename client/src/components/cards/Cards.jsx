// Cards.jsx

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advancePage, goBackPage, setCurrentPage, resetPage } from '../../redux/actions';
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import Paginate from '../paginate/Paginate';

import style from './Cards.module.css';

const itemsPerPage = 9;

function Cards() {
  const [driversForCard, setDriversForCard] = useState([]);
  const allDrivers = useSelector(state => state.allDrivers);
  const currentPage = useSelector(state => state.currentPage);
  const dispatch = useDispatch();
  const totalPages = 86;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const driversForCardRecorte = allDrivers.slice(startIndex, endIndex);
    setDriversForCard(driversForCardRecorte);
  }, [currentPage, allDrivers]);

  return (
    <div className={style.cards_container_principal}>
      <div className={style.list}>
        {Array.isArray(driversForCard) &&
          driversForCard.map(driver => (
            <Link key={driver.id} to={`/detail/${driver.id}`}>
              <Card key={driver.id} driver={driver} />
            </Link>
          ))}
      </div>
      <div className={style.cards_container_principal_but}>
        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          maxButtonsToShow={8} // Puedes ajustar el número máximo de botones a mostrar aquí
        />
      </div>
    </div>
  );
}

export default Cards;



