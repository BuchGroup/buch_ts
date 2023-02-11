import React, { useState } from "react";
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
 