<script setup>
    import LesliAvatar from "./Avatar.vue"
</script>

# Avatar

The component lesli avatar is registered globally and is meant to be used in all the vue apps as lesli-avatar

## Props

**:letter**
This prop is used to define the letter that will be used to show in the avatar. It is required because it is the only way to show a letter by default if the user doesn't provide a url.
- **type**: String
- **required**: false

**:name**
This prop is used to get the first letter of the name that was provided in the props.
- **type**: String
- **required**: false

**:url-image**
This prop is used to define the url of the image that will be used to show in the avatar.
- **type**: String
- **required**: false
- **default**: null

**:size**
This prop is used to define the size of the avatar. It can be set to small, medium or large.
- **type**: Number
- **required**: false
- **default**: small


## Text as avatar

The letter is requerided to be used in the component.

```html
<script setup>
    import LesliAvatar from "./Avatar.vue"
</script>
<template>
    <lesli-avatar name="Lesli">
    </lesli-avatar>

    <lesli-avatar name="Lesli Tech">
    </lesli-avatar>

    <lesli-avatar name="Lesli Tech" size="small">
    </lesli-avatar>

    <lesli-avatar name="Lesli Tech" size="medium">
    </lesli-avatar>

    <lesli-avatar name="Lesli Tech" size="large">
    </lesli-avatar>
</template>
```

Results:

<lesli-avatar name="Lesli">
</lesli-avatar>

<br >

<lesli-avatar name="Lesli Tech">
</lesli-avatar>


## Image as avatar

If url image is not defined, the component will use the letter as the image.

```html
<lesli-avatar image="https://picsum.photos/128/128">
</lesli-avatar>
```

<lesli-avatar image="https://picsum.photos/128/128">
</lesli-avatar>


## Sizes


```html
<script setup>
    import LesliAvatar from "./Avatar.vue"
</script>
<template>
    <lesli-avatar name="Lesli Tech" size="small">
    </lesli-avatar>

    <lesli-avatar name="Lesli Tech" size="medium">
    </lesli-avatar>

    <lesli-avatar name="Lesli Tech" size="large">
    </lesli-avatar>
</template>
```

Results:

<lesli-avatar name="Lesli Tech" size="small">
</lesli-avatar>
<br>
<lesli-avatar name="Lesli Tech" size="medium">
</lesli-avatar>
<br>
<lesli-avatar name="Lesli Tech" size="large">
</lesli-avatar>

