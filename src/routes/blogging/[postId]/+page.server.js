import { page } from '$app/stores';
import { getBlogById } from "$lib/server/database.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }){
  try{
    const post = params;
    const resultData = await getBlogById(post);
    return resultData;
  } catch(error){
    console.error("Error fetching data: ", error);
  }
}
