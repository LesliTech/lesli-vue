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

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/



// · import vue tools
import { computed, useSlots } from "vue"

// · 
const slots = useSlots()


// · defining emits
const emit = defineEmits(['click']);


// · defining props
const props = defineProps({
    to: {
        type: String,
        required: true
    },
    button: {
        type: Boolean,
        default: false
    },
    icon:{},
    loading: {},
    solid: {},
    info: {},
    success: {},
    warning: {},
    danger: {},
    small: {}
})

</script>
<template>
    <router-link :to="props.to.toString()">
        <component v-bind="props" :is="props.button ? 'lesli-button' : 'span'">
            <slot></slot>
        </component>
    </router-link>
</template>
