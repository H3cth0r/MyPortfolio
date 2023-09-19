  import { getMyWorkData } from '$lib/server/database.js';

export const load = () => {
  return getMyWorkData();
}

