// Configs
const os = require('os')
const T = new Date()

var Time = {
    Day:T.getUTCDate(),
    Year:T.getUTCFullYear(),
    Month:T.getUTCMonth()+1,
}



// Functions




function Platform(){
    return os.platform()
}

function Machine(){
    return os.machine()
}
function Type(){
    return os.type()
}

function Tips(){
    var informatic__tips = [
        "Keep your software up to date to protect against security vulnerabilities.",
        "Use strong, unique passwords for different accounts and consider a password manager.",
        "Regularly back up your important data to an external hard drive or cloud storage.",
        "Be cautious of phishing emails; verify the sender before clicking on links.",
        "Use antivirus software and run regular scans to detect malware.",
        "Organize your files and folders logically to make them easier to find.",
        "Learn keyboard shortcuts to improve your efficiency in applications.",
        "Clear your browser cache and cookies regularly for better performance.",
        "Set up two-factor authentication (2FA) for an extra layer of security.",
        "Use a firewall to protect your computer from unauthorized access.",
        "Take regular breaks when using a computer to prevent eye strain and fatigue.",
        "Explore productivity tools such as task managers and note-taking apps.",
        "Customize your desktop with relevant icons and widgets for quick access.",
        "Use cloud services for collaboration and easier access to files from multiple devices.",
        "Learn basic troubleshooting steps to diagnose common computer issues.",
        "Stay informed about the latest technology trends to keep your skills current."
    ]
    return informatic__tips[Math.floor(Math.random() * informatic__tips.length)]
}

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
    return os.version()
}

function UserName(){
    return os.userInfo()["username"]
}



module.exports={
    CPU,
    Memory,
    Desktop_Name,
    System,
    UserName,
    // Update
    Time,
    Platform,
    Machine,
    Type,
    Tips
}