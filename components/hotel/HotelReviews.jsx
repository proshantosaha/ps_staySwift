import { getReviewsForAHotel } from "@/database/queries";
import Link from "next/link";
import React from "react";

const HotelReviews = async ({ id }) => {
  const reviews = await getReviewsForAHotel(id);
  return (
    <>
      {reviews?.length === 0 ? (
        <Link href="#" className="underline">
          Be the first one to review
        </Link>
      ) : (
        <Link href={`/hotel/${id}/reviews`} className="underline">
          {reviews.length}Reviews
        </Link>
      )}
    </>
  );
};

export default HotelReviews;
