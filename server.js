const express = require("express");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 3000;

// Force production mode
const dev = false; // Always false for production
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Handle all requests with Next.js
  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Global error handler
  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
  });

  // Start the server
  server.listen(port, () => {
    console.log(`> Server listening at http://localhost:${port} in production mode`);
  });
});
