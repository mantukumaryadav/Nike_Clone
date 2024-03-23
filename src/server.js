const app = require("./index");
const connect = require("./configs/db");

// const path = require('path');

// // static fils
// app.use(express.static(path.join(__dirname, './client/dist')))
// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, "./client/dist/index.html"))
// })


const port = process.env.PORT || 8000;

app.listen(port, async () => {
    await connect();
    console.log(`Listening to port ${port}`);
});





// require('dotenv').config(); 

// const app = require("./index");
// const connect = require("./configs/db");
// const mongoose = require('mongoose');


// //database

// mongoose.set('strictQuery', false);


// mongoose
//   .connect(process.env.MONGO_PATH, {
//     useNewUrlParser: true,
//   })
//   .then(() => console.log("database connected successfully"))
//   .catch((err) => console.log("error connecting to mongodb", err));

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}..`);
// });