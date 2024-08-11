/*
Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.dev
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
export function useLesliMsg() {

    const durationDefault = 10000

    function msg(text, type="success", duration=0) {

        if (duration === 0) {
            duration = durationDefault
        }

        // create a new raw html div in the root of the html document
        var toastContainer = document.getElementById("lesli-msg-container")

        // check if the toast container exists
        if (!toastContainer) {

            // if not exist, we create the new html node
            toastContainer = document.createElement('div')
            toastContainer.id = "lesli-msg-container"
            toastContainer.className = 'lesli-msg'
        }

        //
        var toastContent = document.createElement('div')
        toastContent.className = 'lesli-msg-content'
        var toastEl = document.createElement('div')


        // build the message
        toastEl.innerHTML = text
        toastEl.classList.add("notification", `is-${type}`)

        toastContent.appendChild(toastEl);

        // Inject the new toast message into the main 
        // visible container at the html body
        //toastContainer.appendChild(toastContent)
        toastContainer.prepend(toastContent)

        // Inject the main toast container into the body
        document.body.appendChild(toastContainer)
    
        // start counting to hide the message
        setTimeout(function () {

            // hide message
            toastContent.classList.add("hide")

            // wait to remove the html from document, so the transition animation works
            setTimeout(()=>{
                toastContent.parentNode.removeChild(toastContent)
            }, 200)
            
        }, duration)
    }

    return {
        info: (text, duration=0) => msg(text, "info", duration),
        danger: (text, duration=0) => msg(text, "danger", duration),
        success: (text, duration=0) => msg(text, "success", duration),
        warning: (text, duration=0) => msg(text, "warning", duration)
    }

}
