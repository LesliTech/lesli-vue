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
import { ref, computed, useSlots, onMounted } from "vue"


// · 
const slots = useSlots()


// · defining emits
const emit = defineEmits(['click']);


// · defining props
const props = defineProps({
    icon: {
        type: String,
        required: false
    },
    loading: {
        type: Boolean,
        default: false,
        required: false
    },
    solid: {
        type: Boolean,
        default: false,
        required: false
    },
    info: {
        type: Boolean,
        default: false,
        required: false
    },
    success: {
        type: Boolean,
        default: false,
        required: false
    },
    warning: {
        type: Boolean,
        default: false,
        required: false
    },
    danger: {
        type: Boolean,
        default: false,
        required: false
    },
    small: {
        type: Boolean,
        default: false,
        required: false
    }
})

const iconOnly = ref(false)

function buttonVariant() {

    if (props.warning) return "is-warning"

    if (props.success) return "is-success"

    if (props.danger) return "is-danger"

    if (props.info) return "is-info"

    return "is-primary"
}

const buttonClasses = computed(() => {

    let classes = ["button", buttonVariant()]

    if (!props.solid) {
        classes.push("is-light")
        classes.push("is-outlined")
    }

    if (props.loading) {
        classes.push("is-loading")
    }

    if (props.small) {
        classes.push("is-small")
    }

    return classes    

})

onMounted(() => {
    // if slots has default method, slot is not empty, maybe it has text
    if (!('default' in slots) && props.icon) {
        iconOnly.value = true
    }
})

</script>
<template>
    <button 
        @click="emit('click')" 
        :class="buttonClasses">
        <span v-if="icon" :class="['icon', { 'is-small': small }]">
            <span class="material-icons">{{ icon }}</span>
        </span>
        <span v-if="!iconOnly">
            <slot></slot>
        </span>
    </button>
</template>
