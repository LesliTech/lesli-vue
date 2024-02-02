// · 
class LesliDebug {

    m(message, modulo=null, level=null) {
        return utils.buildMessage(message, modulo, level)
    }

    // · write information message
    log(message, modulo = null) {
        console.log(utils.buildMessage(message, modulo, "log"))
    }

    // · write information message
    msg(message, modulo = null) {
        console.log(utils.buildMessage(message, modulo, "msg"))
    }

    // · write informatie message
    info(message, modulo = null) {
        console.info("%c"+utils.buildMessage(message, modulo, "info"), utils.stylesForBrowser("info"))
    }

    // · write success message
    success(message, modulo = null) {
        console.log(utils.buildMessage(message, modulo, "msg"))
    }

    // · write warning message
    warn(message, modulo = null) {
        console.warn("%c"+utils.buildMessage(message, modulo, "warn"), utils.stylesForBrowser("warn"))
    }

    // · write warning message
    error(message, modulo = null) {
        console.error("%c"+utils.buildMessage(message, modulo, "error"), utils.stylesForBrowser("error"))
    }

    // · write warning message
    fatal(message, modulo = null) {
        console.error("%c"+utils.buildMessage(message, modulo, "error"), utils.stylesForBrowser("fatal"))
    }

    message(title, messages, more_information=null) {

        console.log("%c"+title, "color:#3689e6;font-size:35px;font-weight:600;line-height:1;")

        if (typeof messages === "string") messages = [ messages ]

        console.log("%c"+messages.join("\n"), "background-color:#ffffff;color:#1a1a1a;font-size:18px;font-weight:400;line-height:1.1;")    

        if (more_information) {
            console.log("%c"+more_information, "background-color:#ffffff;color:#1a1a1a;font-size:14px;font-weight:400;line-height:2;")
        }
        
    }

    lesli_message_warning(title="LESLI", support="For mor information contact your system administrator") {
        this.message(title, [
            "This is a browser feature intended for developers.",
            "For security reasons, DO NOT copy or paste any information, text, or code here."
        ], support)
    }

    // · 
    pp (data, level = 1) {

        let isArray = Array.isArray(data);

        let comma = ","
        let string = ""
        let padding_key = ""
        let padding_prop = ""
        let newline = "\n"

        for(let i=0;i<(4*level);i++) {
            padding_prop += " "
        }

        if (level > 1) {
            padding_key = padding_prop.slice(0, padding_prop.length - 4)
        }

        if (typeof data == "object" && !Array.isArray(data)) {

            string += padding_key + "{" + newline

            for(let property in data) {

                if (typeof data[property] == "object") {
                    string += padding_prop + property + ": " + this.print_r(data[property], level+1) + comma + newline
                } else {
                    string += padding_prop + property + ": " + data[property] + comma + newline
                }
                
            }

            string += padding_key + "}"

        } 

        if (typeof data == "object" && Array.isArray(data)) {

            string += "[" + newline

            for(let property in data) {

                if (typeof data[property] == "object") {
                    string += this.print_r(data[property], level+1) + comma + newline
                } else {
                    string += padding_prop + data[property] + newline
                }

            }

            string += padding_key + "]"

        }

        // trying to remove last comma if is the end of object or array
        //string = string.replace(/,\n/g, "0")

        return string

    }

    #buildMessage(message, module, level) {

        // desire output format
        // [2010-01-17 11:43:37] [ERROR] (cheese module) - Cheese is too ripe!
        // [2010-01-17 11:43:37] [FATAL] (cheese module) - Cheese was breeding ground for listeria.
        let newMessage = `[${this.buildDate()}] [${level.toUpperCase()}]`

        if (module) {
            newMessage += ` (${module})`
        }

        newMessage = newMessage.concat(" - ").concat(message)

        return newMessage

    }

    #stylesForBrowser(type) {

        let lineheight="1.5;"
        let fontsize="14px;"
        let padding="2px;"

        let info = "background-color:#3498db;color:#ffffff;"
        let warn = "background-color:#f1c40f;color:#000000;"
        let error = "background-color:#e74c3c;color:#ffffff;"
        let fatal = "background-color:#c0392b;color:#fff394;"
        let success = "background-color:##48c774;color:#000000;"

        let style = ""

        switch (type) {
            case "info": style = info; break;
            case "warn": style = warn; break;
            case "error": style = error; break;
            case "fatal": style = fatal; break;
            case "success": style = success; break;
        }

        style += "padding:" + padding
        style += "font-size:" + fontsize
        style += "line-height:" + lineheight

        return style

    }

}

// · 
export function useLesliDebug() {
    return new LesliDebug()
}
