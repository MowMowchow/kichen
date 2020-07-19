var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3001;

// Mongo Connections
//var { MongoClient } = require("mongodb");
getConnection = async () => {
    const MONGODB_URI = 'mongodb+srv://Jason:sushila44@cluster0.iq2bk.mongodb.net/kichen-test?retryWrites=true&w=majority';
    try {
        await mongoose.connect(MONGODB_URI || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connection to DB Successful');
    } catch (err) {
        console.log('Connection to Db Failed');
    }
}

getConnection();


// production for build
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
} 



//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
  });
  

// Body parser prereqs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Models
var Item = require('./models/item');
var Cart = require('./models/cart');
const { response } = require('express');


// main
app.get('/getitem', function(req, res){
    Item.find({}, function(err, items){
        if (err) {
            res.status(500).send({error: "could not fetch items"});   
        } else {
            res.send(items);
        }
    });
});

app.post('/postitem', function(req, res){
    var item = new Item();
    item.title = req.body.title;
    item.price = req.body.price;
    item.servings = req.body.servings;
    item.location = req.body.location;
    item.ready_time = req.body.ready_time;
    item.ingredients = req.body.ingredients;
    item.description = req.body.description;
    item.imgUrl = req.body.imgUrl;
    Item.find({
        title: item.title, 
        price: item.price, 
        location: item.location
        }, function(err, items){
            if (err){
                res.status(500).send({error: "Could not fetch items"});
            } else {
                if (!items.length){
                    called = true;
                    item.save(function(err, savedItem){
                        if (err){
                            res.status(500).send({error: "Could not upload item"});
                        } else {
                            res.send(savedItem);
                        }
                    });
                } else{
                     console.log("skipping item");
                }
            }
        });     
});



app.listen(PORT, console.log('server hosted at {PORT}'));