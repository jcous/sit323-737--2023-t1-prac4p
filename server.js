const express = require("express");
const app = express();

app.use(express.json());
//addition endpoint
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  // Check if num1 and num2 are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: "Invalid input parameters" });
  } else {
    const result = num1 + num2;
    res.json({ result: result });
  }
});
//subtract endpoint
app.get("/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: "Invalid input parameters" });
  } else {
    const result = num1 - num2;
    res.json({ result: result });
  }
});
//multiply endpoint
app.get("/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: "Invalid input parameters" });
  } else {
    const result = num1 * num2;
    res.json({ result: result });
  }
});
//division endpoint
app.get("/division", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: "Invalid input parameters" });
    //check if num2 equal 0
  } else if (num2 === 0) {
    res.status(400).json({ error: "Cannot divide by zero" });
  } else {
    const result = num1 / num2;
    res.json({ result: result });
  }
});

app.listen(3000, () => {
  console.log("Calculator listening on port 3000");
});
