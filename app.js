import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const users = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];
const tweets = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
];

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const user = users.find((user) => user.username === username);
  tweets.push({
    username: username,
    avatar: user.avatar,
    tweet: tweet,
  });
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  if (tweets.length > 10) {
    res.send(tweets.slice((tweets[tweets.length - 1], -10)));
  } else {
    res.send(tweets);
  }
});

app.listen(5000, () => console.log(chalk.green("Rodando na porta 5000.")));
