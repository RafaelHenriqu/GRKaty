const os = require('os')

function CPU(){
    return os.cpus()[0].model
}

function Memory(text_formatted){
    const Converte = (os.totalmem() / 1073741824).toString()
    if (text_formatted){
        const Memory = `${Converte.split('.')[0]},${Converte.split('.')[1][0]} GB`
        return Memory
    }else{ 
        const Memory = Converte.split('.')[0]
        return Memory
    }
    
    
}

function Desktop_Name(){
    return os.hostname()  
}

function System(){
    return os.platform()
}

function UserName(){
    return os.userInfo()["username"]
}

module.exports={
    CPU,
    Memory,
    Desktop_Name,
    System,
    UserName

}