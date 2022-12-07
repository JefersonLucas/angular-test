const express = require("express");

const app = express();

const appName = "angular-test";

const outputPath = `${__dirname}/dist/${appName}`;

app.use(express.static(outputPath));

app.get("/*", (_, response) => {
  response.sendFile(`${outputPath}/index.html`);
});

app.listen(process.env.PORT);
