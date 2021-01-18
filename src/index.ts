import App from "./app.svelte";

import "./index.css";

const title = "What astrological sign should you have been?";
const questions = [
  {
    question: "When hanging out with friends I enjoy ______",
    answers: [
      "saying in",
      "going out to clubs",
      "haning out in nature",
      "I don't have any friends",
    ],
  },
  {
    question: "When confronted with a problem I ______",
    answers: [
      "think outside the box",
      "apply previous experiences",
      "avoid the problem",
    ],
  },
  {
    question: "I'm the type of person to plan everyting out.",
    answers: ["True", "False"],
  },
  {
    question: "I snack on stuff ______",
    answers: [
      "all the time",
      "when I'm' stressed",
      "to pass the time",
      "very rarely",
    ],
  },
  {
    question: "I'm eager to start new projects",
    answers: ["True", "False"],
  },
  {
    question: "I actually complete those projects",
    answers: ["True", "False"],
  },
];
const result = "It doesn't matter and you just wasted your time.";

new App({
  props: { title, questions, result },
  target: document.getElementById("root") as HTMLElement,
});
