export type dataList = {
  id: number;
  image: any;
  title: string;
  location: string;
  description: string;
  rating: number;
  gallery: any[];
  reviews: {
    id: number;
    date: string;
    author: {
      id: number;
      username: string;
      avatar: any;
    };
    rating: number;
    text: string;
  }[];
  hotels: object[];
  type: string;
}[];
