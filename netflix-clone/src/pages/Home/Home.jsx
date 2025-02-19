import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowList'
import Footer from '../../components/Footer/Footer'
import SingleRow from '../../components/Rows/SingleRow/SingleRow'
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <SingleRow/>
      <RowList />
      <Footer />
    </div>
  );
}

export default Home