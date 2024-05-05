<script setup>
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

Lesli · Your Smart Business Assistant. 

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · import vue tools
import { ref, watch, onMounted } from "vue"
import "./Avatar.scss";

// · 
const props = defineProps({

    image: {
        type: String,
        default: null
    },

    name: {
        type: String,
        default: "",
    },

    size: {
        type: String,
        required: true,
        default: "medium",
    },
})


// · calculate the font size of the letter based on the size of the avatar
const fontSize = ref("")


// · size of the avatar its injected in the style attribute
const avatarSize = ref("")


const letter = ref("?")

function getLetter() {

    if (!props.name || props.name == "") {
        return letter.value = ""
    }

    // Split the sentence into words
    const words = props.name.trim().split(/\s+/);
    
    // Extract the first character of the first two words and convert to uppercase
    const firstChars = words.slice(0, 2).map(word => word.charAt(0).toUpperCase());
    
    // Join the extracted characters and return
    letter.value = firstChars.join('');
}


// calculate the size of the avatar
function calculateSize() {

    if (props.size === "small") {
        fontSize.value = "is-size-5"
        avatarSize.value = "height: 60px; width: 60px;"
        return 
    } 
    
    if (props.size === "medium") {
        fontSize.value = "is-size-3"
        avatarSize.value = "height: 120px; width: 120px;"
        return 
    } 
    
    if (props.size === "large") {
        fontSize.value = "is-size-1"
        avatarSize.value = "height: 180px; width: 180px;"
    }
}


onMounted(() => {
    calculateSize()

    if (!props.image) {
        getLetter()
    }
})

watch(() => props.name, () => {
    if (!props.image) {
        getLetter()
    }
})

</script>
<template>
    <figure class="lesli-element-avatar has-background-grey-lighter" :style="avatarSize">
        <img v-if="image" :src="image">
        <span v-else class="has-text-weight-bold" :class="fontSize">{{ letter }}</span>
    </figure>
</template>
