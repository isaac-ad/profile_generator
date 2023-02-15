const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable :)",
  function (name) {
    rl.question("What's an activity you like doing?", function (activity) {
      rl.question("What do you listen to while doing that?", function (music) {
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)",
          function (meal) {
            rl.question(
              "What's your favourite thing to eat for that meal?",
              function (food) {
                rl.question(
                  "Which sport is your absolute favourite?",
                  function (sport) {
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!",
                      function (superpower) {
                        console.log(`\nHi, my name is ${name}.
               I like to ${activity} and listen to ${music} while doing it.
                My favourite meal of the day is ${meal}, and my favourite thing to eat for ${meal} is ${food}.
                 My favourite sport is ${sport}, and my superpower is ${superpower}.`);
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
