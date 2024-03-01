
# Loading

Shows a standard message with an icon to indicate the empty state of a page or component.


### Props

| Name | Description | Type | Values | Default |
|---   |---	         |---	|---	 |---	   |
| size | Size of the loading animation | Number | 1 ~ 10 | 5 |
| text | Text to display along with the animation | String | - | Loading |


### Usage
```vue
<script setup>
    import { LesliLoading } from "lesli-vue/elements"
</script>
```


### Example
```vue
<lesli-loading></lesli-loading>
```
**Result:**

<lesli-loading></lesli-loading>

<hr />



### Example with text

```vue
<lesli-loading text="Loading"></lesli-loading>
```
**Result:**

<lesli-loading text="Cargando"></lesli-loading>

<hr />



### Example with large text

```vue
<lesli-loading size="3"></lesli-loading>
```
**Result:**

<lesli-loading size="3"></lesli-loading>

<hr />



### Example icon only

```vue
<lesli-loading icon></lesli-loading>
```
**Result:**

<lesli-loading icon></lesli-loading>

<script setup>
    import LesliLoading from "./Loading.vue"
</script>
