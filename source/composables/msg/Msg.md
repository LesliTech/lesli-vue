<script setup>
    import "./Msg.scss";
    import { useLesliMsg } from "./Msg.js"
    import LesliButton from "../../elements/button/Button.vue"

    const msg = useLesliMsg()
</script>

# Messages

**msg** is a small utility to show simple message notifications to users.

msg provides a simple function to show flash messages at the top of any Lesli app.

## Props and emited functions

| Name | Type | Description  |
|:---  |---   |---           |
| text | String | Message to show to the user. | 
| duration | Integer | duration in miliseconds | 


#### Implementation
```vue
<script setup>
    import "./msg.scss";
    import { useLesliMsg } from "lesli-vue/composables"

    const msg = useLesliMsg()
</script>
```

<hr />



#### Simple information message
```vue
<script setup>
    function message() {
        msg.info("My simple information message")
    }
</script>
<template>
    <lesli-button @click="message">
        show information
    </lesli-button>

    <lesli-button @click="msg.info('My simple information message')">
        show information
    </lesli-button>
</template>
```
<lesli-button @click="msg.info('My simple information message')">
    show information
</lesli-button>

<hr />


#### Simple success message
```vue
<script setup>
    function message() {
        msg.success("My simple success message")
    }
</script>
<template>
    <lesli-button @click="message">
        show success
    </lesli-button>

    <lesli-button @click="msg.success('My simple success message')">
        show warning
    </lesli-button>
</template>
```
<lesli-button success @click="msg.success('My simple success message')">
    show success
</lesli-button>

<hr />


#### Simple warning message
```vue
<script setup>
    function message() {
        msg.warning("My simple warning message")
    }
</script>
<template>
    <lesli-button @click="message">
        show warning
    </lesli-button>

    <lesli-button @click="msg.warning('My simple warning message')">
        show warning
    </lesli-button>
</template>
```
<lesli-button warning @click="msg.warning('My simple warning message')">
    show warning
</lesli-button>

<hr />


#### Simple danger message
```vue
<script setup>
    function message() {
        msg.danger("My simple danger message")
    }
</script>
<template>
    <lesli-button @click="message">
        show danger
    </lesli-button>

    <lesli-button @click="msg.danger('My simple danger message')">
        show danger
    </lesli-button>
</template>
```
<lesli-button danger @click="msg.danger('My simple danger message')">
    show danger
</lesli-button>

<hr />


#### Simple and fast message
```vue
<script setup>
    function message() {
        msg.info("My simple and fast message", 500)
    }
</script>
<template>
    <lesli-button @click="message">
        show and fast
    </lesli-button>

    <lesli-button @click="msg.info('My simple and fast message', 500)">
        show and fast
    </lesli-button>
</template>
```
<lesli-button @click="msg.info('My simple and fast message', 500)">
    show and fast
</lesli-button>
