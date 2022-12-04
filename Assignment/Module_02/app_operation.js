
const fs=require("fs")
const appdata=(data)=>{
    const dt=JSON.stringify(data);
          fs.writeFile("detail.json",dt,()=>{
                    console.log("file written successfully");
          })
}


const viewdata=()=>{
    const data=view();
    console.log(data);
}

const view=()=>{
        const data=  fs.readFileSync("detail.json","utf-8",()=>{
                  
          })
          const dt=JSON.parse(data)
          return dt;
}

module.exports={appdata,viewdata}