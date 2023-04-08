import React from 'react'
import { Main } from '../components/main/Main'
import { Row } from '../components/Row/Row'
import requests from '../Request'
const Header = () => {
  return (
    <div>
      <Main/>
      <Row rowId='1' title="Up Coming" Url={requests.requestUpcoming}/>
      <Row rowId='2' title="Popular" Url={requests.requestPopular}/>
      <Row rowId='3' title="Trending" Url={requests.requestTrending}/>
      <Row rowId='4' title="Top Rated" Url={requests.requestTopRated}/>
      <Row rowId='5' title="Horror" Url={requests.requestHorror}/>
    </div>
  )
}

export default Header
