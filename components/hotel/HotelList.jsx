import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout }) => {
  const allHotels = await getAllHotels(destination, checkin, checkout);
  // console.log(allHotels);

  return (
    // <div className="col-span-9">
    //   <div className="space-y-4">

    //     <HotelCard />
    //   </div>
    // </div>

    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels?.map((hotel) => (
          <HotelCard hotelInfo={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;

{
  /* <div className="col-span-9">
  <div className="space-y-4">
    {allHotels.map((hotel) => {
      <HotelCard hotelInfo={hotel} key={hotel.id} />;
    })}
  </div>
</div>; */
}
