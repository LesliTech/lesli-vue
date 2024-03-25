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
import { ref, watch, onMounted } from "vue"
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import "./Calendar.scss"



// · defining emits
const emit = defineEmits(['update:modelValue']);


// · defining props
const props = defineProps({
    modelValue: {
        type: [Date, Object, String],
    },
    mode: {
        type: String,
        default: 'date',
    },
    range: {
        type: Boolean,
        required: false,
        default: false
    },
    minDate: {
        type: [Date, Object]
    },
    required: {
        type: Boolean,
        required: false,
        default: false
    },
    placeholderValue: {
        type: String,
    }
})


// · 
const date = ref(null)


const masks = ref({
    modelValue: 'YYYY-MM-DD',
});

// · 
onMounted(() => {
    setTimeout(() => {
        date.value = props.modelValue
    }, 200)
})

// ·
watch(date, () => {
    emit('update:modelValue', date.value)
})

</script>
<template>
    <DatePicker 
        v-model="date" 
        :mode="mode" 
        :masks="masks"
        class="lesli-calendar">
        <template v-slot="{ inputValue, inputEvents }">
            <div class="field lesli-element-calendar">
                <p class="control has-icons-right">
                    <input 
                        class="input is-default"
                        v-on="inputEvents"
                        :value="placeholderValue ? placeholderValue : inputValue" 
                    />
                    <span class="icon is-small is-right">
                        <span class="material-icons">
                            calendar_month
                        </span>
                    </span>
                </p>
            </div>
        </template>
    </DatePicker>
</template>
