const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GraphSchema = new Schema({
  initialInvestment: {
    type: Number,
    required: true
  },
  timeFrame: {
    type: Number,
    required: true
  },
  growth: {
    type: Number,
    required: true
  },
  contribution: {
    type: Number,
    default: 0
  },
  totalTime: {
    type: Number,
    required: true
  },
  rows: []
});

const Graph = mongoose.model("graph", GraphSchema);

module.exports = Graph;
