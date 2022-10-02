import React, {useState, useEffect} from 'react';
import './App.css'
import Airtable from 'airtable'
import RestaurantCard from './components/RestaurantCard';
import ReviewCard from './components/ReviewCard';

function RestaurantDetails() {
    const base = new Airtable({apiKey: 'keyT03fHxG2eAkS6n'}).base('appYZQoyc6msqgb4K');

    const [reviewList, setReviewList] = useState([]);

    const getItems = async (restaurant) => {
        const list = [];
        console.log("getItems");
        await base('reviews').select({
            filterByFormula: `({restaurant}="Jeff's Jelly Beans")` 
        })
        // .all()
        // .then((records) => {console.log(records)})
        .eachPage((records, fetchNextPage) => {
          records.forEach((record) => {
            console.log("record hit!")
            const item = record.fields;        
            list.push(item);    
          });
          fetchNextPage();
        });
        setReviewList(list);
    };

    useEffect(() => {
        console.log("use effect hit?")
    //for now restaurant is hardcoded
    const restaurant = "Jeff's Jelly Beans";
    getItems(restaurant);
    }, []);

    const reviews = reviewList.map((item) => (
    <ReviewCard
        itemID={item.review_id}
        key={item.review_id}
        email = {item.email}
        overallRating = {item.overall_rating}
        paragraph = {item.review_paragraph}          
    />
    )); //did not use Date

  return (
    <div style = {{padding: 30 , display: 'flex', justifyContent: "center", flexDirection: 'column'}}>
      <RestaurantCard name = "Jeff's Jelly Beans" location = "200 De Naur Drive"/>
      {reviews}
    </div>   
  );
}

export default RestaurantDetails;