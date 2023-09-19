  import { getMyWorkData } from '$lib/server/database.js';

export const config = {
  runtime: 'edge',
};

/** @type {import('./$types').PageServerLoad} */
export const load = () => {
  let resultData = getMyWorkData();
  console.log(resultData);
  return resultData;
}

