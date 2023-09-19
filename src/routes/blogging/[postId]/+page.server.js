import { page } from '$app/stores';
import { getBlogById } from "$lib/server/database.js";

export const load = ({ params }) => {
  let post = params;
  return getBlogById(post);
}
