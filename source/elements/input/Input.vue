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
import "./Input.scss";


// · 
const emit = defineEmits(["update:modelValue", "onError"])


// · defining props
const props = defineProps({
    modelValue: {
        type: [Number, String],
        required: false
    },
    label: {
        type: String,
        required: false
    },
    placeholder: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false,
        default: "text"
    },
    horizontal: {
        type: Boolean,
        default: false,
        required: false
    }
})


// · 
const inputValue = ref(null)


// · 
function updateInputValue() {
    inputValue.value = props.modelValue
}


// · this function is called when the input value changes
const onInput = (e) => {
    emit("update:modelValue", e.target.value)
}


// · 
onMounted(() => {
    updateInputValue()
})


// · 
watch(() => props.modelValue, () => {
    updateInputValue()
})


</script>
<template>
    <div class="lesli-input mb-3">
        <div :class="['field', { 'is-horizontal': props.horizontal }]">
            <div class="field-label is-normal">
                <label class="label"> 
                    {{ props.label }}
                </label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input 
                            class="input"
                            v-model="inputValue"
                            :placeholder="props.placeholder" 
                            :type="props.type"
                            @input="onInput">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
