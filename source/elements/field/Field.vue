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
import { ref, onMounted, watch } from "vue"
import "./Field.scss";


// · defining props
const props = defineProps({
    label: {
        type: String,
        required: false
    },
    horizontal: {
        type: Boolean,
        default: false,
        required: false
    }
})
</script>
<template>
    <div class="lesli-field mb-3">
        <div :class="['field', { 'is-horizontal': props.horizontal }]">
            <div class="field-label is-normal">
                <label class="label"> 
                    {{ props.label }}
                </label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
