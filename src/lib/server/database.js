import { db } from "../../firebase.server.js";
import { getDatabase, onValue, ref } from "firebase/database";

// export async const getMyWorkData = async () => {
//     const query = ref(db, "mywork");
//     let result = [];
//     onValue(query, (snapshot) => {
//       result = Object.values(snapshot.val());
//     });
//   return {mywork_data: result};
// }
export const getMyWorkData = async () => {
  return new Promise((resolve, reject) => {
    const query = ref(db, "mywork");
    onValue(query, (snapshot) => {
      const result = Object.values(snapshot.val());
      resolve({ mywork_data: result});
    }, (error) => {
      reject(error);
    });
  });
}
export const getBlogById = async ({ postId }) => {
  return new Promise((resolve, reject) => {
    const query = ref(db, `blogging/${postId}`);
    onValue(query, (snapshot) => {
      const result = snapshot.val();
      resolve({ blog_data: result });
    }, (error) => {
      reject(error);
    });
  });
}
// export async const getBlogById = ( {postId} ) => {
//     let result = "None";
//     const query = ref(db, `blogging/${postId}`); 
//     onValue(query, (snapshot) => {
//       result = snapshot.val();
//     });
//     return {blog_data: result};
// }
