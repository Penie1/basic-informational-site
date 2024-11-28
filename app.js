import express from "express";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/view/about.html");
});
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/view/contact-me.html");
});
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/view/404.html");
});
app.listen(port, () => {
  console.log(`Listening on port ${port || 3000}!`);
});
