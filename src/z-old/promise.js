const userLeft = false;

function watchPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        message: ":(",
      });
    } else {
      resolve({
        name: "user stayed",
        message: "good",
      });
    }
  });
}

watchPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name);
  });
