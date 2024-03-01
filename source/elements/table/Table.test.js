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
@website  https://www.lesli.dev
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
import { expect } from "vitest";
import { mount } from "@vue/test-utils";


// · 
import Table from "./Table.vue";


// · 
describe("ELEMENTS/TABLE", () => {

    it("Should render component with defaults", () => {
        const component = mount(Table, {
            props: {
                columns:[{field: 'id', label: 'ID'},{field: 'email', label: 'Email'}],
                records:[{id:0,email:'ldonis@lomax.com.gt'},{id:0,email:'ldonis@gmail.com'}]
            }
        });

        expect(component.find(".table").find("thead").findAll("tr")).toHaveLength(1)
        expect(component.find(".table").find("thead").findAll("th")).toHaveLength(2)

        expect(component.find(".table").find("tbody").findAll("tr")).toHaveLength(2)
        expect(component.find(".table").find("tbody").findAll("td")).toHaveLength(4)
    })
})
