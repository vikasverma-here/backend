const connect = require("./src/db/db")
const app = require("./src/app")
connect()
app.listen(3000, () => {
 console.log("server is running on port 3000")
})