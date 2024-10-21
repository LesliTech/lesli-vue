<script setup>
    import LesliNavbar from "./Navbar.vue"
</script>

# Navbar
The component lesli navbar isn't registered globally. For this reason, you have to import it in your app.js file that loads the vue app.


## Example
```html
<script setup>
    import LesliNavbar from "./Navbar.vue"
</script>

<lesli-navbar>
    <template v-slot:brand>
        <a class="navbar-item">
            <img width="33" alt="Lesli icon" src="/images/brand/lesli-icon.svg" />        
        </a>
    </template>
    <template v-slot:start>
        <a class="navbar-item" href="#">home</a>
    </template>
    <template v-slot:end>
        <a class="navbar-item" href="#">
            <span class="ri-dashboard-3-line"></span>
            Dashboard
        </a>
        <a class="navbar-item" href="#">
            <i class="ri-notification-3-line"></i>
            Notifications
        </a>
    </template>
</lesli-navbar>
```


<lesli-navbar>
    <template v-slot:brand>
        <a class="navbar-item">
            <img width="33" alt="Lesli icon" src="/images/brand/lesli-icon.svg" />        
        </a>
    </template>
    <template v-slot:start>
        <a class="navbar-item" href="#">home</a>
    </template>
    <template v-slot:end>
        <a class="navbar-item" href="#">
            <span class="ri-dashboard-3-line"></span>
            Dashboard
        </a>
        <a class="navbar-item" href="#">
            <i class="ri-notification-3-line"></i>
            Notifications
        </a>
    </template>
</lesli-navbar>

<lesli-navbar :unresponsive="true">
    <template v-slot:brand>
        <a class="navbar-item">
            <img width="33" alt="Lesli icon" src="/images/brand/lesli-icon.svg" />        
        </a>
    </template>
    <template v-slot:start>
        <a class="navbar-item" href="#">home</a>
    </template>
    <template v-slot:end>
        <a class="navbar-item" href="#">
            <span class="ri-dashboard-3-line"></span>
            Dashboard
        </a>
        <a class="navbar-item" href="#">
            <i class="ri-notification-3-line"></i>
            Notifications
        </a>
    </template>
</lesli-navbar>


<lesli-navbar unresponsive>
    <template v-slot:brand>
        <a class="navbar-item">
            <img width="33" alt="Lesli icon" src="/images/brand/lesli-icon.svg" />        
        </a>
    </template>
    <template v-slot:end>
        <a class="navbar-item" href="#">
            <span class="ri-dashboard-3-line"></span>
            Dashboard
        </a>
        <a class="navbar-item" href="#">
            <i class="ri-notification-3-line"></i>
            Notifications
        </a>
    </template>
</lesli-navbar>
