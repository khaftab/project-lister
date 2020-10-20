// export const createProject = (project) => {
//   return (dispatch, getState, { getFirestore, getFirebase }) => {
//     console.log(getFirestore);
//     // getFirestore
//     //   .collection("projects")
//     //   .add({
//     //     ...project,
//     //   })
//     //   .then(() => console.log("success"))
//     //   .catch(() => console.log("failure"));
//   };
// };
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(getFirestore);
    console.log(getFirebase);
  };
};
