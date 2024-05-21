require("dotenv").config();
const PORT = process.env.PORT || 8001;
const app = require("./server");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
