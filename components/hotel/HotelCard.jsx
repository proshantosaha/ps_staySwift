import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotelInfo }) => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src={hotelInfo?.thumbNailUrl}
        alt={hotelInfo?.name}
        width={240}
        height={165}
        className="max-h-[162px] max-w[240px]"
      />
      <HotelSummaryInfo fromListPage={true} info={hotelInfo} />
    </div>
  );
};

export default HotelCard;
