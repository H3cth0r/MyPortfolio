import { getMyWorkData } from '$lib/server/database.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try{
    const resultData = await getMyWorkData();
    console.log(resultData);
    return resultData;
  } catch(error){
    console.error("Error fetching myword data: ", error);
  }
}

