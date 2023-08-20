const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
const LogInCollection = require("../db/login");
const BookTableCollection = require("../db/book");
const FeedbackCollection = require("../db/feedback");
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)



app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/menu', (req, res) => {
    res.render('menu')
})
app.get('/delivery', (req, res) => {
    res.render('delivery')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/gallery', (req, res) => {
    res.render('gallery')
})
app.get('/rider', (req, res) => {
    res.render('rider')
})
app.get('/bug', (req, res) => {
    res.render('bug')
})
app.get('/feedback', (req, res) => {
    res.render('feedback')
})
app.get('/logout', (req, res) => {
    res.render('index')
})
app.get('/error', (req, res) => {
    res.render('error')
})
app.get('/payment', (req, res) => {
    res.render('payment')
})
app.get('/giftcard', (req, res) => {
    res.render('giftcard')
})

app.get('/thank', (req, res) => {
    res.render('thank')
})


app.post('/signup', async (req, res) => {

    const data = {
        name: req.body.name,
        lname:req.body.lname,
        password: req.body.password,
        gender: req.body.gender,
        email:req.body.email,
        mobile:req.body.mobile,
        state:req.body.state,

    }

    const checking = await LogInCollection.find({ name: req.body.name })

   try{
    if (checking.name === req.body.name && checking.password===req.body.password && checking.email===req.body.email) {
        res.send("user details already exists")
    }
    else{
        await LogInCollection.insertMany([data])
    }
   }
   catch(error) {
    res.status(500).render("error", { message: e });  
}

    res.status(201).render("home", {
        naming: req.body.name
    })
})


app.post('/contact', async (req, res) => {
    const bookingData = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        city:req.body.city,
        date: req.body.date,
        time: req.body.time,
        people: req.body.people,
    };
    const checking = await BookTableCollection.find({ name: req.body.name })

    try{
     if (checking.name === req.body.name) {
         res.send("user details already exists")
     }
     else{
         await BookTableCollection.insertMany([bookingData])
     }
    }
    catch(error) {
     res.status(500).render("error", { message: "This email id already exits"  });  
 }
 
     res.status(201).render("contact", {
         done: req.body.name + "  Table is Booked Succesfully - More Information GujjuFlavor send FROM Email"
     })
 })
 
   



app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.name}` })
        }

        else {
            res.status(500).render("error", { message: errorMessage });
        }


    } 
    
    catch (e) {

        res.status(500).render("error", { message: e });  
        

    }


})

app.get('/logout', (req, res) => {
    // Destroy the session to log the user out
    req.session.destroy(err => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      res.redirect('/home');
    });
  });




  
app.post('/feedback', async (req, res) => {
    const feedData = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        message: req.body.message,
    };
    const checking = await FeedbackCollection.find({ name: req.body.name })

    try{
     if (checking.name === req.body.name) {
         res.send("user details already exists")
     }
     else{
         await FeedbackCollection.insertMany([feedData])
     }
    }
    catch(error) {
     res.send("This email id already exits: " );
 }
 
     res.status(201).render("feedback", {
        donefeed: "  Hello" + req.body.name + "  Your Request/Message Send to Gujju "
     })
 })




app.listen(port, () => {
    console.log('port connected');
})