<script setup>
    import { ref } from "vue"
    import LesliToggle from "./Toggle.vue"
    const isChecked = ref(false);
</script>

# Toggle

The component lesli toggle is registered globally and is meant to be used in all the vue apps as lesli-toggle. This component is used to create a toggle, and needs to be used like a input type checkbox.


## Props

**:disabled**
This prop is used to disable the toggle.
- **type**: Boolean
- **required**: false
- **default**: false

**:disabledText**:
This prop is used to indicate the text to be displayed when the toggle is disabled
- **type**: String,
- **default**: No

**:enabledText**
This prop is used to indicate the text to be displayed when the toggle is enabled
- **type**: String,
- **default**: yes

**:showText**:
This prop is used to show text when the toggle is enabled or disabled
- **type**:  Boolean,
- **default**: false

## Events
No events are defined for this component.

## Slots
No slots are defined for this component.

## Example 

v-model is required because it is the only way to control the state of the toggle.

```html
<script setup>
    import LesliToggle from "./Avatar.vue"
    const isChecked = ref(false);
</script>
<template>
    <lesli-toggle v-model="isChecked"/>
</template>
```

**Results:**

<lesli-toggle v-model="isChecked"/>
