const express = require("express");
const app = express();
const PORT = 8000;

const family = {
  lily: {
    age: 39,
    birthName: "Lilian Thanh Vo",
    birthLocation: "NorthRidge, California",
  },
  nguyen: {
    age: 43,
    birthName: "Nguyen Ngoc Tran",
    birthLocation: "Saigon, Vietnam",
  },
  emily: {
    age: 13,
    birthName: "Emily Thanh Tran",
    birthLocation: "Fontana, California",
  },
  ethan: {
    age: 10,
    birthName: "Ethan Tran",
    birthLocation: "Fontana, California",
  },
  supra: {
    age: 2,
    birthName: "Supra",
    birthLocation: "Supra",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:familyName", (request, response) => {
  const familyName = request.params.familyName.toLowerCase();
  if (family[familyName]) {
    response.json(family[familyName]);
  } else {
    response.json(family["supra"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`);
});
