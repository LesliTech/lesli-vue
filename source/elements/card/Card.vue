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
import { useSlots } from "vue"


// · 
const slots = useSlots()


// · defining props
const props = defineProps({
    title: {
        type: String,
        default: null
    }
})

</script>
<template>
    <div class="card lesli-card">
        <div v-if="slots['header']" class="card-header">
            <slot name="header"></slot>
        </div>
        <div v-if="!slots.header && props.title" class="">
            <h4 class="card-header-title pb-0 pt-2 pl-3">
                {{ props.title }}
            </h4>
        </div>
        <div class="card-content py-3 px-4">
            <slot></slot>
        </div>
    </div>
</template>
