// // var myHeaders = new Headers();
// // myHeaders.append("X-Api-Key", "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr");
// // myHeaders.append("X-Tenant-Key", "INDU140923");
// // myHeaders.append("Content-Type", "application/json");

// // var raw = JSON.stringify({
// //   "Index": 1,
// //   "ContentType": [
// //     2
// //   ],
// //   "IsTagged": false,
// //   "URL": ""
// // });

// // var requestOptions = {
// //   method: 'POST',
// //   headers: {
// //     "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
// //     "X-Tenant-Key": "INDU140923",
// //     "Content-Type": "application/json"
// //   },
// //   body: raw,
// //   redirect: 'follow'
// // };

// // fetch("https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1", requestOptions)
// //   .then(response => response.text())
// //   .then(result => console.log(result))
// //   .catch(error => console.log('error', error));
// import React, { useEffect, useState } from "react";

// const APK = () => {
//   const [app, setApp] = useState([]);
//   useEffect(() => {
//     var raw = JSON.stringify({
//       Index: 1,
//       ContentType: [2],
//       IsTagged: false,
//       URL: "",
//     });

//     var requestOptions = {
//       method: "POST",
//       headers:{
//         "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
//         "X-Tenant-Key": "INDU140923",
//         "Content-Type": "application/json",
//       },
//       body: raw,
//       redirect: "follow",
//     };

//     fetch(
//       "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => setApp(result))
//       .catch((error) => console.log("error", error));
//   }, []);
//   return <div>{console.log(app)}</div>;
// };

// export default APK;
