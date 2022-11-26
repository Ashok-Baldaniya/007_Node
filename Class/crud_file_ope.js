const fs=require("fs")


const addfile=(data)=>{
    const dt=JSON.stringify(data)
    fs.writeFile("userdata.json",dt,()=>{
        console.log("file written successfully");
    })
}

// const viewfile=()=>{
//     const data=view()
//     console.log(data);
// }

const view=()=>{
    var dt;
    var data=fs.readFileSync("userdata.json","utf-8")
    dt=JSON.parse(data)
    console.log(dt);
}


module.exports={addfile,view}