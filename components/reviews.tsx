import React, { useState } from "react";
import { ElfsightWidget } from 'react-elfsight-widget';
// // import axios from "axios";

// const fetchReviews = async (apiKey: string, placeId: string, offset: number) => {
//    const response = await axios.get(
//      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&offset=${offset}`
//    );
//    return response.data.result.reviews;
//  };
 
//  const ReviewList = ({ apiKey, placeId }: { apiKey: string; placeId: string }) => {
//    const [reviews, setReviews] = useState<any[]>([]);
//    const [offset, setOffset] = useState(0);
 
//    const handleLoadMore = async () => {
//      const newReviews = await fetchReviews(apiKey, placeId, offset + 5);
//      setReviews([...reviews, ...newReviews]);
//      setOffset(offset + 5);
//    };
 
//    return (
//      <div>
//        <ul>
//          {reviews.map((review) => (
//            <li key={review.time}>
//              <strong>{review.author_name}</strong>
//              <p>{review.text}</p>
//            </li>
//          ))}
//        </ul>
//        <button onClick={handleLoadMore}>Load More</button>
//      </div>
//    );
//  };
 
//  export default ReviewList;


function Review() {
   return <div className="container3">
    <h2 className="flex justify-center text-center text-black text-5xl font-team font-bold py-36">WHAT OUR CLIENTS SAY ABOUT US</h2>
    <ElfsightWidget widgetID="6fb5148f-2351-41db-9470-7bce003f4843" />
   </div>;
 }

export default Review
 
 