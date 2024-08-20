// Configs
const Configs = require("../Config/Configs")
const os = require('os')
const T = new Date()

var Time = {
    Day:T.getUTCDate(),
    Year:T.getUTCFullYear(),
    Month:T.getUTCMonth()+1,
}

var Infos = {
    Platform:os.platform(),
    Machine:os.machine(),
    Type:os.type(),
    CPU:os.cpus()[0].model,
    Desktop_Name:os.hostname(),
    UserName:os.userInfo()["username"],
    System:os.version(),
    
    // Functions


    Tips:function(Table_Customize=[]){
        var informatic__tips = Configs.Settings.Language.informatic__tips[0]
        if (Table_Customize == [].length==1){
            return informatic__tips[Math.floor(Math.random() * informatic__tips.length)]
        }else{
            return Table_Customize[Math.floor(Math.random() * Table_Customize.length)]
        }
        
    },
    
    Memory:function(text_formatted=false){
        const Converte = (os.totalmem() / 1073741824).toString()
        if (text_formatted){
            const Memory = `${Converte.split('.')[0]},${Converte.split('.')[1][0]} GB`
            return Memory
        }else{ 
            const Memory = Converte.split('.')[0]
            return Memory
        }
    }

    
}

 


 
 



module.exports={
    Time,
    Infos
}