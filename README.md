
1. npm init
2. npm install express nodemon body-parser   dotenv mongoose.
3. Change in package.json `"start": "nodemon index.js",`
4. now `npm start `


```

const express = require("express")

const app = express()

const coursesRouter = require("./routes/courses")

app.get("/", (req,res) => {
    console.log("Hello, our url is working propery")
})


app.listen(2000, () =>{
    console.log("server is running at port 2000..")
})
```

Now courses router
```
const express = require("express")

const router = express.Router()


router.get("/courses", (req,res) => {
    res.send("This is our first course")
})

module.export = router;
```
Now in ndex .js 

```

const express = require("express")

const app = express()

// here we use .env config

require("dotenv").config()

// Here we bring courses router
const coursesRouter = require("./routes/courses")


// Here we use middleware to register all router of courses to index.js

app.use("/c", coursesRouter)


// app.get("/", (req,res) => {
//     console.log("Hello, our url is working propery")
// })


app.listen(process.env.PORT, () =>{
    console.log("server is running at port 2000..")
})
```

```


```

