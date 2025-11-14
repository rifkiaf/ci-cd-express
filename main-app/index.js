const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Main App 🚀");
});

app.listen(PORT, () => {
  console.log(`Main App running on port ${PORT}`);
});
