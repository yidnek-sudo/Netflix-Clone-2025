import React from 'react'
import SingleRow from '../SingleRow/SingleRow'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <>
      <SingleRow 
      title= "NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      />
      <SingleRow />
      <SingleRow />
      <SingleRow />
      <SingleRow />
      <SingleRow />
      <SingleRow />
    </>
  );
}

export default RowList