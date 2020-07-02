const fs = require("fs");

//read file
// fs.readFile("./docs/t2.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// console.log("last line");

// wrte file
// fs.writeFile("./docs/t2.txt", "new file t2", () => {
//   console.log("1st executed");
// });

//make nd remove directory
// if (!fs.existsSync("./assets"))
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file cresated 1st");
//   });
// else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// delete file
if (fs.existsSync("./assets/deleteme.txt")) {
  fs.unlink("./assets/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("files deleted");
  });
}
