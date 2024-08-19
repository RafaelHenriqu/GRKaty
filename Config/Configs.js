const LanguageArray = ["pt-br","en-us","ru-ru","zh-cn"]

const Settings = {
    Language:require(`../json/Language/en-us.json`)
}




function Set_Language(Language="en-us"){
    if (LanguageArray.includes(Language.toLowerCase())){
        Settings.Language = require(`../json/Language/${Language}.json`) 
    }else{
        console.log(Settings.Language.Set_Language_ERROR)
    }
}



module.exports={
    Set_Language,
    Settings,
}

