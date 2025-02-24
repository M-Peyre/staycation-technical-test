export type UserType = {
  id: number;
  name: string;
};

export type HotelType = {
  id: number;
  name: string;
  stars: number;
  preview: string;
  pictureId: string;
  reviews: number;
  averageScore: number;
  highestPrice: number;
  lowestPrice: number;
};

export type HotelsType = HotelType[];
