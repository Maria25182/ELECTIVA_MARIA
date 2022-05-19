const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 6000
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.connect(
    "mongodb://0.0.0.0:27017/",
  /* mongodb:// ${IP_SERVER}:${PORT_DB}/proyecto_db`,*/
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("success connection to db");
      app.listen(PORT_SERVER, () => {
        console.log("##############");
        console.log("#######API-REDS#######");
        console.log("##############");
        console.log(`https:// ${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
      });
    }
  }
);
