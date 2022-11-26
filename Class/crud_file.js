
const yargs=require("yargs")
const file=require("./crud_file_ope")

yargs.command({
    command:"add",
    builder:{
        name:{
            type:String
        },
        task:{
            type:String
        }
    },
    handler: function(argv){
         const data={
            name:argv.name,
            task:argv.task
         }
         file.addfile(data);
    }
})

yargs.command({
    command:"view",
    handler: function(){
         file.view();
    }
})

yargs.argv