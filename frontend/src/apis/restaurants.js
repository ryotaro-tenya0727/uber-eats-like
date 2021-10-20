import axios from 'axios';
import { restaurantsIndex } from '../urls/index';

export const fetchRestaurants = async () => {
  return await axios
    .get(restaurantsIndex)
    .then((res) => {
      return res.data;
    })

    .catch((e) => console.error(e));
};

// fetchRestaurantsのresolveが呼び出された時、すなわち.thenが付けられた時の返しがreturnの後に書いてある
