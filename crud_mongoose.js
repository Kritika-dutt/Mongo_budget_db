const mongoose = require("mongoose")
const namesModel = require("./models/budget_schema")

let url = 'mongodb://localhost:27017/testing_kritika';


mongoose.connect(url, { useNewUrlParser: true, useunifiedTopology: true })
    .then(() =>{
        console.log("connected to the database")
        //List All entries
        namesModel.find({})
                .then((data)=>{
                    console.log(data)
                    mongoose.connection.close()
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                })
    })
    .catch((connectionError)=> {
        console.log(connectionError) 
       
    })

    //Fetch one document
                
            // namesModel.find({id: 2})
            //     .then((data)=>{
            //         console.log(data)
            //         mongoose.connection.close()
            // })
            // .catch((connectionError)=>{
            //     console.log(connectionError)
            // })

        //     namesModel.findID("5f976c8542f01c112fa4db75")
        //     .then((data)=>{
        //         console.log(data)
        //         mongoose.connection.close()
        // })
        // .catch((connectionError)=>{
        //     console.log(connectionError)
        // })

        // })
    })
   
//inserting values lesson
    // let newData = new namesModel({id: 10, name: "Testing mongoose"});
    //     namesModel.insertMany(newData)
    //         .then((data)=>{
    //             console.log(data)
    //             mongoose.connection.close()
    //     })
    //     .catch((connectionError)=>{
    //         console.log(connectionError)
    //     })
    

        //update

        // let newData = {$set: {id: 10, name:"Udated Content"}};;
        // namesModel.update({id: 10}, newData)
        //     .then((data)=>{
        //         console.log(data)
        //         mongoose.connection.close()
        // })
        // .catch((connectionError)=>{
        //     console.log(connectionError)
        // })


// removing one of the entries
// let newData = {$set: {id: 10, name:"Udated Content"}};;
// namesModel.remove({id: 10})
//     .then((data)=>{
//         console.log(data)
//         mongoose.connection.close()
// })
// .catch((connectionError)=>{
//     console.log(connectionError)
// }) 