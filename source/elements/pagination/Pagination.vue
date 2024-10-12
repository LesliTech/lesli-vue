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

Lesli · Ruby on Rails SaaS development platform.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · import vue tools
import { computed, ref } from "vue"


// · defining emits
const emit = defineEmits(['paginate']);


// · defining props
// · Pagination example
// { "page": 1, "pages": 15, "total": 225, "results": 225 } 
const props = defineProps({
    pagination: {
        type: Object,
        required: true
    },
    mode: {
        type: String,
        default: 'complete',
        required: false,
        validator: (val) => ['complete', 'simple'].includes(val),
    }
})

const paginationPage = ref(0)
const paginationPages = ref(0)


paginationPage.value = props.pagination.page
paginationPages.value = props.pagination.pages


// · 
function paginateNext() {
    paginationPage.value++
    emit('paginate', paginationPage.value)
}


// · 
function paginatePrev() {
    paginationPage.value--
    emit('paginate', paginationPage.value)
}


// · 
function paginateLast() {
    paginationPage.value = paginationPages.value
    emit('paginate', paginationPage.value)
}


// · 
function paginateTo(page) {
    paginationPage.value = page
    emit('paginate', paginationPage.value)
}
</script>
<template>
    <nav class="pagination mb-5" role="navigation" aria-label="pagination">
        <ul class="pagination-list" v-if="props.mode==='complete'">
            <template v-if="paginationPages > 1">
                <template v-for="page in 5"> 
                    <li v-if="page < paginationPages">
                        <button 
                            class="button pagination-link" 
                            :class="{'is-current': paginationPage == page}"
                            @click.stop="paginateTo(page)">
                            {{ page }}
                        </button>
                    </li>
                </template>
                <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <button 
                        class="button pagination-link" 
                        :class="{'is-current': paginationPage == paginationPages }"
                        :disabled="(paginationPage >= paginationPages)"
                        @click.stop="paginateLast()">
                        {{ paginationPages }}
                    </button>
                </li>
            </template>
        </ul>
        
        <button 
            class="button is-primary is-outlined pagination-previous" 
            @click.stop="paginatePrev()"
            :disabled="(paginationPage <= 1)">
            Previous 
        </button>
        <button 
            class="button is-primary is-outlined pagination-previous" 
            @click.stop="paginateNext()"
            :disabled="(paginationPage >= paginationPages)">
            Next page 
        </button>
    </nav>
</template>
