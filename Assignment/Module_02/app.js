const yargs=require("yargs")
const app=require("./app_operation")

yargs.command({
    command:"add",
    builder:{
          todo:{
            type:String
          }
    },
    handler:function(argv){
            const data={
              todo:argv.todo
            }
            app.appdata(data);
    }
})



yargs.command({
  command:"view",
  handler:function(argv){
        app.viewdata();
  }
})

yargs.argv