import http from "http";
import fs from "node:fs";
const app = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, { "Content-Type": "text/html" });
  let path = "./view/";
  switch (url) {
    case "/":
      path += "index.html";
      break;

    case "/about.html":
      path += "about.html";
      break;

    case "/contact.html":
      path += "contact-me.html";
      break;

    default:
      path += "404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      res.end(data);
    }
  });
});

app.listen(8000);
