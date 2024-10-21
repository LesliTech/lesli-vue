/**
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
import { describe, it } from "vitest"


// · plugins to be tested
import { useLesliUrl } from "./Url"


// · Composable instance
const URL = useLesliUrl()


// · 
describe("COMPOSABLES/URL", () => {

    describe("Build URL for custom to", () => {        
        it("should build a url for invite", ({ expect }) => { 
            var url = URL.to("invite")
            expect(url).to.be.a("string");
            expect(url).to.equal("/invite")
        })
    })

    describe("Build URL for application/x", () => {

        ["json", "html", "pdf", "xlsx"].forEach(ext => {
            it(`should build a url for ${ ext.toUpperCase() } request`,({ expect }) => { 
                var url = URL.admin("users").toString(`.${ ext }`)
                expect(url).to.be.a("string");
                expect(url).to.equal(`/admin/users.${ ext }`)
            });
        })
      
        it("should build a url with json extension through json method", ({ expect }) => { 
            var url = URL.admin("users").json()
            expect(url).to.equal("/admin/users.json")
        })

        it("should build a url with pdf extension through pdf method", ({ expect }) => { 
            var url = URL.admin("users").pdf()
            expect(url).to.equal("/admin/users.pdf")
        })

    })


    describe("Build URL for admin", () => {

        it("should build a url for administration users", ({ expect }) => { 
            var url = URL.admin("users").toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users");
        });
        
        it("should build a url for administration users list", ({ expect }) => { 
            var url = URL.admin("users/list").toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users/list");
        });
    
        it("should build a url for administration users options", ({ expect }) => { 
            var url = URL.admin("users/options").toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users/options");
        });

        it("should build a url for an specific user", ({ expect }) => { 
            var url = URL.admin("users/:id", 777).toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users/777");
        });

        it("should build a url for an specific user through object params", ({ expect }) => { 
            var url = URL.admin("users/:id", { id: 777 }).toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users/777");
        });

    });

    describe("Build URL with with order", () => {
        
        it("should build a url with order column", ({ expect }) => { 
            var url = URL.admin("users").order("name").toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users?orderBy=name&order=asc");
        });

        it("should build a url with order params", ({ expect }) => { 
            var url = URL.admin("users").order("name", "desc").toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users?orderBy=name&order=desc");
        });

    });

    describe("Build URL with with pagination", () => {
        
        it("should build a url for default pagination", ({ expect }) => { 
            var url = URL.admin("users").paginate(1).toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users?page=1&perPage=12");
        });

        it("should build a url for paginate page 5", ({ expect }) => { 
            var url = URL.admin("users").paginate(5).toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users?page=5&perPage=12");
        });

        it("should build a url for paginate 20 items per page", ({ expect }) => { 
            var url = URL.admin("users").paginate(1,20).toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users?page=1&perPage=20");
        });

    });

    describe("Build URL with search", () => {
        
        it("should build a url with a search param", ({ expect }) => { 
            var url = URL.admin("users").search("my search string").toString()
            expect(url).to.be.a("string");
            expect(url).to.equal("/admin/users?search=my search string");
        });

    });

    describe("Build URL with filters", () => {
        
        it("should build a url to filter by role name", ({ expect }) => { 
            var url = URL.admin("users").filter({ roles: ['admin', 'guest'] }).toString()
            expect(url).to.equal("/admin/users?f[roles]=admin,guest");
        });

        it("should build a url with multiple filters", ({ expect }) => { 
            var url = URL.admin("users").filter({ roles: ['admin', 'guest'], categories: ['cat1', 'cat2'] }).toString()
            expect(url).to.equal("/admin/users?f[roles]=admin,guest&f[categories]=cat1,cat2");
        });

    });

    describe("Build URL for ROOT requests", () => {
        
        it("should build a url for the root", ({ expect }) => { 
            expect(URL.root().toString()).to.equal("/")
        });

        it("should build a url to search at the root level", ({ expect }) => { 
            expect(URL.root().search("mysearchstring").toString()).to.equal("/?search=mysearchstring")
        });

        it("should build a url for a user at the root level", ({ expect }) => { 
            expect(URL.root("users/:id", 1).search("emc2@ldonis.com").toString()).to.equal("/users/1?search=emc2@ldonis.com")
        });

        it("should build a url for a user at the root level with object params", ({ expect }) => { 
            expect(URL.root("users/:id", { id: 2 }).search("emc2@ldonis.com").toString()).to.equal("/users/2?search=emc2@ldonis.com")
        });

    });

    describe("Build full featured URL", () => {
        
        it("should build a full feature url at root level", ({ expect }) => { 
            var url = URL.root().order("id").paginate(1).search("text").filter({ role: ['admin'] }).toString()
            expect(url).to.equal("/?orderBy=id&order=asc&page=1&perPage=12&search=text&f[role]=admin")
        });

        it("should build a full feature url at root level with path", ({ expect }) => { 
            var url = URL.root("user/:id", 1).order("id").paginate(1).search("text").filter({ role: ['admin'] }).toString()
            expect(url).to.equal("/user/1?orderBy=id&order=asc&page=1&perPage=12&search=text&f[role]=admin")
        });

        it("should build a full feature url for the admin area", ({ expect }) => { 
            var url = URL.admin().order("id").paginate(1).search("text").filter({ role: ['admin'] }).toString()
            expect(url).to.equal("/admin/?orderBy=id&order=asc&page=1&perPage=12&search=text&f[role]=admin")
        });

        it("should build a full feature url for the admin area with path", ({ expect }) => { 
            var url = URL.admin("user/:userid", { userid: "2" }).order("id").paginate(1).search("text").filter({ role: ['admin'] }).toString()
            expect(url).to.equal("/admin/user/2?orderBy=id&order=asc&page=1&perPage=12&search=text&f[role]=admin")
        });

        it("should build a full feature url for an engine", ({ expect }) => { 
            var url = URL.audit().order("id").paginate(1).search("text").filter({ role: ['admin'] }).toString()
            expect(url).to.equal("/audit/?orderBy=id&order=asc&page=1&perPage=12&search=text&f[role]=admin")
        });

        it("should build a full feature url for an engine with path", ({ expect }) => { 
            var url = URL.audit("user/:userid", { userid: "3" }).order("id").paginate(1).search("text").filter({ role: ['admin'] }).toString()
            expect(url).to.equal("/audit/user/3?orderBy=id&order=asc&page=1&perPage=12&search=text&f[role]=admin")
        });

    });
})
