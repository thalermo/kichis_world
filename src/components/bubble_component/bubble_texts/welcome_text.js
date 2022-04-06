// welcome page

let userName = "Dan";

const welcome = {
  scene1: {
    key: 1,
    title: "welcome",
    phrase: "Welcome to Kichi's World!",
  },
  scene2: {
    key: 2,
    title: "Kichi appearers",
    phrase: "My name is Kichi!",
  },
  scene3: {
    key: 3,
    title: "tutorial",
    phrase: "Tap on me to continue",
  },

  scene4: {
    key: 4,
    title: "joke after clicking",
    phrase: "I love the attention hihi",
    //action: "clicking on Kichi",
  },

  scene5: {
    key: 5,
    title: "your name",
    phrase: "What is your name?",
    //action: prompt(""),
  },
  scene6: {
    key: 6,
    title: "greeting ",
    phrase: "Nice to meet you " + userName + " !",
  },
  scene7: {
    key: 7,
    title: "next page",
    phrase: "tap on me to continue ",
  },
};

console.log(welcome.scene1.phrase);
console.log(welcome.scene6.phrase);

export default welcome;
