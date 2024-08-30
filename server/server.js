const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/AdminRoutes");
const db = require("./config/db");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
