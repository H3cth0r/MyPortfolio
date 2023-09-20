import { getMyWorkData } from '$lib/server/database.js';

/** @type {import('./$types').PageServerLoad} */
export const load = () => {
  let resultData = getMyWorkData();
  console.log(resultData);
  return resultData;
}

