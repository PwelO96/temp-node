const EventsEmitter = require("events");

const customEmitter = new EventsEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data recieved ${name} which is ${age} years old`);
});
customEmitter.on("response", () => {
  console.log("some other logic here");
});

customEmitter.emit("response", "john", 34);
