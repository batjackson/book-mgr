// const request = (arg, cb) => {
//   setTimeout(() => {
//     console.log(arg);
//     cb(arg + 1);
//   }, 300);
// };

// request(1, (arg1) => {
//   request(arg1, (arg2) => {
//     request(arg2, (arg3) => {
//       request(arg3, (arg4) => {
//         console.log("arg5:", arg4);
//       });
//     });
//   });
// });
// const request = (arg) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(arg);
//       resolve(arg + 1);
//     }, 300);
//   });
// };
// request(1)
//   .then((res1) => request(res1))
//   .then((res2) => request(res2))
//   .then((res3) => request(res3))
//   .then((res4) => console.log("arg5:", res4));

const request = (arg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(arg);
      resolve(arg + 1);
    }, 300);
  });
};

const fn = async () => {
  const res1 = await request(1);
  const res2 = await request(res1);
  const res3 = await request(res2);
  const res4 = await request(res3);
  console.log("arg5:", res4);
};
fn();
