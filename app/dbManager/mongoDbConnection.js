var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const config = require('../config/db.config').DB_CONFIG;

var promise = mongoose.connect(config.MONGO_HOST_NAME, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    /* other options */
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo DB connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
process.on('SIGINT', function(){
    db.close(function(){
        process.exit(0)
    });
});