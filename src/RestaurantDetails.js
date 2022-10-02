import React, {useState, useEffect} from 'react';
import './App.css'
import Airtable from 'airtable'
import RestaurantCard from './components/RestaurantCard';
import ReviewCard from './components/ReviewCard';
import MuiMultiselect from './components/MuiMultiselect';

function RestaurantDetails() {
  //hardcoded restaurant name (did not have single-developer team bandwidth to do any more workflow screens)
  const restaurant = "Jeff's Jelly Beans";

  const [personalDietaryrestrictions, setPersonalDietaryrestrictions] = React.useState([]);
    const base = new Airtable({apiKey: 'keyT03fHxG2eAkS6n'}).base('appYZQoyc6msqgb4K');

    const [reviewList, setReviewList] = useState([]);

    const getReviews = async (restaurant) => {
        const list = [];
        await base('reviews').select({
            filterByFormula: `({restaurant}="Jeff's Jelly Beans")` 
        })
        .eachPage((records, fetchNextPage) => {
          records.forEach((record) => {
            console.log("record hit!")
            const review = record.fields;        
            list.push(review);    
          });
          fetchNextPage();
        });
        setReviewList(list);
    };

    useEffect(() => {     
      getReviews(restaurant);
    }, [])

    useEffect(() => {      
      console.log(personalDietaryrestrictions);
    }, [personalDietaryrestrictions]);

    const reviews = reviewList.map((item) => (
    <ReviewCard
        itemID={item.review_id}
        key={item.review_id}
        email = {item.email}
        overallRating = {item.overall_rating}
        paragraph = {item.review_paragraph}   
        tags = {item.tags}       
    />
    )); //did not use Date

  return (
    <div style = {{padding: 100 , display: 'flex', justifyContent: "space-evenly", flexDirection: 'row'}}>
      <div>
        <MuiMultiselect value = {personalDietaryrestrictions} setter = {setPersonalDietaryrestrictions}/>
        <RestaurantCard name = "Jeff's Jelly Beans" locationLine1 = "200 De Naur Drive" locationLine2 = "Los Angeles, CA 90001"/>      
      </div>
      <div> {reviews} </div>
      
    </div>   
  );
}

export default RestaurantDetails;