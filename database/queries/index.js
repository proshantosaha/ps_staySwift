import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/data_util";

export async function getAllHotels() {
  const hotels = await hotelModel
    .find()
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();
  return replaceMongoIdInArray(hotels);
}
