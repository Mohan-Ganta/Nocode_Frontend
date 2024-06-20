const express = require('express')
const cors = require('cors')
const multer = require("multer")
const path = require("path")
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongooDB connection established succcessfuly");
});

//adding routers
const userRouter = require('./routers/userRouter')
const aboutUserRouter = require('./routers/aboutUserRouter')
const userEducationRouter = require('./routers/userEducationRouter')
const userExperienceRouter = require('./routers/userExperienceRouter')
const userProjectRouter = require('./routers/userProjectsRouter')
const userCertificateRouter = require('./routers/userCertificatesRouter')
const userSkillsRouter = require('./routers/userSkillsRouter')

app.use("/users",userRouter)
app.use("/about",aboutUserRouter)
app.use("/education",userEducationRouter)
app.use("/experience",userExperienceRouter)
app.use("/projects",userProjectRouter)
app.use("/certificates",userCertificateRouter)
app.use("/skills",userSkillsRouter)

const storage = multer.diskStorage({
    destination: "D:/VTS PROS/NoCodePortfolio/frontend/src/assets/profileImages/",
    filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
  });
  const upload = multer({ storage: storage });

  // Route to handle image upload
  app.post("/upload", upload.single("image"), (req, res) => {
    try {
      if (req.file) {
        console.log(`Uploaded image: ${req.file.filename}`);
        const imageUrl = `http://localhost:${5000}/images/${req.file.filename}`;
        res.json({ message: "Image uploaded successfully!", image_url: imageUrl });
      } else {
        res.status(400).json({ message: "No image uploaded" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error uploading file" });
    }
  });
  app.get("/",(req,res)=>{
    res.send("<h1>Welcome to NocodePortfolio</h1>")
  })
  app.use("/images", express.static("D:/VTS PROS/NoCodePortfolio/frontend/src/assets/profileImages/"));

app.listen(5000,()=>{
    console.log("listening at port 5000")
})