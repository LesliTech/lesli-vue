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

Made with ♥ by LesliTech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · import vue tools
import { ref } from "vue";
import "./Navbar.scss";


// · 
const isActive = ref(false)


// · 
function toggle() {
    isActive.value = !isActive.value
}
</script>
<template>
    <nav class="lesli-navbar navbar" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <slot name="brand"></slot>
                <button @click="toggle" 
                    role="button" class="navbar-burger"
                    aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div :class="['navbar-menu', {'is-active': isActive }]">
                <div class="navbar-start">
                    <slot name="start"></slot>
                </div>
                <div class="navbar-end">
                    <slot name="end"></slot>
                </div>
            </div>
        </div>
    </nav>
</template>
