//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Business from '../Business/Business';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imgSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business, 
  business,
  business,
  business,
  business,
  business
]; 

function searchYelp(term, location, sortBy) {
  console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
}

function App() {
  return (  
  <div className="App">
    <h1>Famished</h1>
    <SearchBar searchYelp={searchYelp} />
    <BusinessList businesses={businesses} />
  </div>
  );

}

export default App;
