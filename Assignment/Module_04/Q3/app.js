const mongoClient=require("mongodb").MongoClient
const dbname="task"
const dburl="mongodb://127.0.0.1:27017/task"

mongoClient.connect(dburl,(err,client)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("connected with mongodb...");
    const db=client.db(dbname)
    console.log("connected with database successfully...");


    /* ------------------------ Q4 -------------------- */



    // db.createCollection("User",(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log("collection created successfully...");
    // })

    // db.createCollection("Product category",(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    // })

    // db.createCollection("Product",(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    // })

    // db.createCollection("Order",(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    // })

    // db.createCollection("Review",(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    // })

    // var dt=[{name:"hairOil",price:200},{name:"sandal",price:300},{name:"book",price:70}]
    // db.collection("Product").insertMany(dt,(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(resp);
    // })

    // var dt=[{name:"ashok"},{name:"ramesh"},{name:"vivek"}]
    // db.collection("User").insertMany(dt,(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(resp);
    // })

    // var dt=[{catname:"footware"},{catname:"stationary"},{catname:"cosmetic"}]
    // db.collection("Product category").insertMany(dt,(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(resp);
    // })

    // var dt=[{pname:"pen",qty:10},{pname:"pencil",qty:20},{pname:"shoes",qty:5}]
    // db.collection("Order").insertMany(dt,(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(resp);
    // })

    // var dt=[{pname:"pen",review:"very nice"},{pname:"pencil",review:"very good"},{pname:"shoes",review:"nice quality"}]
    // db.collection("Review").insertMany(dt,(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(resp);
    // })


    /* ------------------------ Q5 -------------------- */



    // db.collection("Product").find({}).sort({"name":1}).toArray((err,result)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(result);
    // })

    /* ------------------------ Q6 -------------------- */

    // db.collection("Product").updateOne({name:"chowk"},{$set:{price:10}},(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(resp);
    // })


   
    /* ------------------------ Q7 -------------------- */


    // db.collection("Product").deleteOne({name:"chowk"},(err,resp)=>{
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(resp);
    // })

    // db.collection("Review").drop((err,resp)=>{
    //     if (err) {
    //                 console.log(err);
    //                 return;
    //             }
    //             console.log(resp);
    // })

})
