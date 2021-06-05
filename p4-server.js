/*
    CIT 281 Project 4
    Name: Julia Smith
*/

const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module.js");

// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax

//DONE
fastify.get("/cit/question", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({
        "error": "",
        "statusCode": 200,
        "questions": getQuestions(),
    });
});

//DONE
fastify.get("/cit/answer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          "error": "",
          "statusCode": 200,
          "answers": getAnswers(),
      });
});

//DONE
fastify.get("/cit/questionanswer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          "error": "",
          "statusCode": 200,
          "questions_answers": getQuestionsAnswers(),
      });
});

//DONE
fastify.get("/cit/question/:number", (request, reply) => {
    let numberFromClient = request.params.number;
    let dataObject = getQuestion(numberFromClient);
    let {error, question, number} = dataObject;
    number = parseInt(number);

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          "error": error,
          "statusCode": 200,
          "question": question,
          "number": number,
      });
});

//DONE
fastify.get("/cit/answer/:number", (request, reply) => {
    let numberFromClient = request.params.number;
    let dataObject = getAnswer(numberFromClient);
    let {error, answer, number} = dataObject
    number = parseInt(number);

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          "error": error,
          "statusCode": 200,
          "answers": answer,
          "number": number,
      });
});

//DONE
fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let numberFromClient = request.params.number;
    let dataObject = getQuestionAnswer(numberFromClient);
    let {error, question, answer, number} = dataObject
    number = parseInt(number);

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
          "error": error,
          "statusCode": 200,
          "question": question,
          "answers": answer,
          "number": number
      });
});

//DONE
fastify.get("*", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({
        "error": "Route not found",
        "statusCode": 404
    });
});

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});