import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={() => {
        return <MovieList />;
      }} />
      <Route path="/movies/:id" render={(id) => {
        return <Movie />
      }} />
    </div>
  );
};

export default App;
