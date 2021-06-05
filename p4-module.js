/*
    CIT 281 Project 4
    Name: Julia Smith
*/

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
};

const { data } = require("./p4-data.js");

function getQuestions() {
  questionArray = [];
  for (let i of data) {
    let { question } = i;
    questionArray.push(question);
  }
  return questionArray;
}

function getAnswers() {
  answerArray = [];
  for (let i of data) {
    let { answer } = i;
    answerArray.push(answer);
  }
  return answerArray;
}

function getQuestionsAnswers() {
  const clonedData = [...data];
  return clonedData;
}

function getQuestion(number = "") {
  if (typeof number === "integer") {
    number = parseInt(number);
  }

  let error = "";
  let dataNumber = "";

  if (number === "") {
    error = "Question number must be an integer";
  } else if (number <= 0) {
    error = "Question number must be >= 1";
  } else if (number > 3) {
    error = "Question number must be less than the number of questions (3)";
  } else {
    error = "";
    dataNumber = data[number - 1];
  }

  let { question = "" } = dataNumber;

  const questionObject = {
    question: question,
    number: number,
    error: error,
  };
  return questionObject;
}

function getAnswer(number = "") {
  if (typeof number == "integer") {
    number = parseInt(number);
  }

  let error = "";
  let dataNumber = "";

  if (number === "") {
    error = "Answer number must be an integer";
  } else if (number <= 0) {
    error = "Answer number must be >= 1";
  } else if (number > 3) {
    error = "Answer number must be less than the number of questions (3)";
  } else {
    error = "";
    dataNumber = data[number - 1];
  }

  let { answer = "" } = dataNumber;

  const answerObject = {
    answer: answer,
    number: number,
    error: error,
  };
  return answerObject;
}

function getQuestionAnswer(number = "") {
  if (typeof number == "integer") {
    number = parseInt(number);
  }

  let error = "";
  let dataNumber = "";

  if (number === "") {
    error = "Question number must be an integer";
  } else if (number <= 0) {
    error = "Question number must be >= 1";
  } else if (number > 3) {
    error = "Question number must be less than the number of questions (3)";
  } else {
    error = "";
    dataNumber = data[number - 1];
  }

  let { question = "" } = dataNumber;
  let { answer = "" } = dataNumber;

  const answerObject = {
    question: question,
    answer: answer,
    number: number,
    error: error,
  };
  return answerObject;
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}
