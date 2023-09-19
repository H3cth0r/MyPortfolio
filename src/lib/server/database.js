import { db } from "../../firebase.server.js";
import { getDatabase, onValue, ref } from "firebase/database";
export const getMyWorkData = () => {
    const query = ref(db, "mywork");
    let result = [];
    onValue(query, (snapshot) => {
      result = Object.values(snapshot.val());
    });
  return {mywork_data: result};
}
export const getBlogById = ( {postId} ) => {
    let result = "None";
    const query = ref(db, `blogging/${postId}`); 
    onValue(query, (snapshot) => {
      result = snapshot.val();
    });
    return {blog_data: result};
}
