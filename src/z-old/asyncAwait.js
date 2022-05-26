function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to  ${location} `);
    if (location == "Google" || location == "google") {
      resolve("nice");
    }
    reject("shizzen");
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing");
    resolve("extra info" + response);
  });
}

async function doThings() {
  try {
    const mine = await makeRequest("nut");
    const mine2 = await processRequest(mine);
    console.log(mine2);
  } catch (err) {
    console.log(err);
  }
}

doThings();
