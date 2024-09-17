<script setup>
    import LesliAvatar from "./Avatar.vue"
</script>

# Avatar

The Avatar component offers a customizable way to display user avatars. It supports showing a single character, a name, or an image, with adjustable sizes (small, medium, large) to fit different design needs. Ideal for profiles and UI elements, it enhances visual consistency and user experience.


### Props

| Name | Type | Description  |
|:---  |---   |---           |
| :name   | string | Word that represents name of a user |
| :src    | string | Url for an image|
| :size   | string | Size of the avatar small/medium/large |


### Text as avatar
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
</template>
```

Results:

<lesli-avatar name="Lesli">
</lesli-avatar>

<br />

<lesli-avatar name="Lesli Tech">
</lesli-avatar>


### Image as avatar

If url image is not defined, the component will use the letter as the image.

```html
<lesli-avatar image="https://picsum.photos/128/128">
</lesli-avatar>
```

<lesli-avatar image="https://picsum.photos/128/128">
</lesli-avatar>


### Sizes


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

    <lesli-avatar image="https://picsum.photos/128/128" size="large">
    </lesli-avatar>

    <lesli-avatar image="https://picsum.photos/128/128" size="medium">
    </lesli-avatar>

    <lesli-avatar image="https://picsum.photos/128/128" size="small">
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

<br>

<lesli-avatar image="https://picsum.photos/128/128" size="large">
</lesli-avatar>

<br>

<lesli-avatar image="https://picsum.photos/128/128" size="medium">
</lesli-avatar>

<br>

<lesli-avatar image="https://picsum.photos/128/128" size="small">
</lesli-avatar>
