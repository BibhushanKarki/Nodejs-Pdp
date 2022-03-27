setTimeout(() => {
  console.log("timeout");
}, 2000);

const names = ["Andrew", "Jen", "Jess"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

const data = geocode("Biratnagar", (data) => {
  console.log(data);
});

// messing around with callback pattern

const add = (value1, value2, callback) => {
  setTimeout(() => {
    callback(value1 + value2);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
