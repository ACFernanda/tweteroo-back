import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
app.use(cors());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  tweets.push(tweet);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(tweets.slice((tweets[tweets.length - 1], -10)));
});

app.listen(5000, () => console.log(chalk.green("Rodando na porta 5000.")));
