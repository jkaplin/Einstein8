const express = require("express");

const config = require("config");

const router = express.Router();

const Graph = require("../../models/Graph");

function calcRows(
  initialInvestment,
  timeFrame,
  growth,
  contribution,
  totalTime
) {
  // Compund interest formula: A = P * (1 + (r / n))^(n * t)
  /*
        A	=	final amount
        P	=	initial principal balance
        r	=	interest rate
        n	=	number of times interest applied per time period
        t	=	number of time periods elapsed
  */

  const r = growth / 100;
  const n = 1;

  const base = 1 + r / n;

  let rows = [];
  for (let t = 0; t < totalTime / timeFrame; t++) {
    const exponent = n * t;
    const amount = initialInvestment * Math.pow(base, exponent);
    rows.push([t, amount]);
  }

  return rows;
}

// @route   POST api/graph
// @desc    Create new graph
// @access  Public
router.post("/", async (req, res) => {
  const initialInvestment = Number(req.body.initialInvestment);
  const timeFrame = Number(req.body.timeFrame);
  const growth = Number(req.body.growth);
  const contribution = Number(req.body.contribution);
  const totalTime = Number(req.body.totalTime);
  const rows = calcRows(
    initialInvestment,
    timeFrame,
    growth,
    contribution,
    totalTime
  );
  const graph = new Graph({
    initialInvestment,
    timeFrame,
    growth,
    contribution,
    totalTime,
    rows
  });

  try {
    await graph.save();
    res.json(graph);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
