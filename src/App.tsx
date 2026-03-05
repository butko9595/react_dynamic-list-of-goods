import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = async () => {
    const data = await getAll();

    setGoods(data);
  };

  const loadFirstFive = async () => {
    const data = await get5First();

    setGoods(data);
  };

  const loadRed = async () => {
    const data = await getRedGoods();

    setGoods(data);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods </h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
