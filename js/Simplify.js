const Config = require("../Config/Configs")
const Web = {
    Api:function(URL){
        if (URL == null){return Configs.Settings.Language.Invalid_Value}
        return fetch(URL).then(response => {
            if (!response.ok){
                console.log(Config.Settings.Language.Invalid_Value)
            }else{
                return response.json()
            }
        })
    },
    
}

module.exports = {
    Web
}