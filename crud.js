const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/testing_kritika';


//1connect to database
//2perform the desired operation
//3close database connection

mongoDBClient.connect(url, (operationError, dbHandler) => {
    if (operationError){
        console.log("An error has occurred during the connection process")
    } else {
        console.log("connected to the data base")
        dbHandler.close()
    }

});
