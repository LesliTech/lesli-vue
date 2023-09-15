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
import { ref, reactive, onMounted, watch, computed, getCurrentInstance } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

// · defining props
const props = defineProps({
    title: {
        type: String,
        default: null
    },
    back: {
        type: Object,
        required: false
    }
})

function goBack() {
    router.go(-1)
}

</script>
<template>
    <section class="lesli-element-header is-flex">
        <div class="lesli-element-header-title is-flex">
            <button v-if="false" class="button is-ghost" @click="goBack()">
                <span class="material-icons">
                    arrow_back
                </span>
            </button>
            <h1 class="subtitle is-3" v-if="title">{{ title }}</h1>
        </div>
        <div class="lesli-element-header-items is-flex is-flex-grow-1 is-justify-content-end">
                <slot></slot>
        </div>
    </section>
</template>
