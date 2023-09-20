import { getMyWorkData } from '$lib/server/database.js';

export const load = () => {
  let resultData = getMyWorkData();
  console.log(resultData);
  return resultData;
}

