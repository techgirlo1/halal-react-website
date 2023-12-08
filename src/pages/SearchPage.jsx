import React, { Fragment, useEffect, useState } from 'react';
import Topnav from '../component/Topnav/Topnav';
import PageTop from '../component/PageTop/PageTop';
import Footer from '../component/Footer/Footer';
import SearchList from '../component/SearchList/SearchList';
import APPUrl from '../RestAPI/APPUrl';
import axios from 'axios';

function SearchPage({ match }) {
  const search = match.params.search;

  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem('searchPageData');
    return storedData ? JSON.parse(storedData) : { search: '', ProductData: [] };
  });

  useEffect(() => {
    window.scroll(0, 0);

    axios
      .get(APPUrl.Search(search))
      .then((response) => {
        const newState = { search, ProductData: response.data };
        localStorage.setItem('searchPageData', JSON.stringify(newState));
        setState(newState);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [search]);

  return (
    <Fragment>
      <Topnav title="SearchList" />
      <PageTop pagetitle="SearchList" />
      <SearchList search={state.search} ProductData={state.ProductData} />
      <Footer />
    </Fragment>
  );
}

export default SearchPage;
