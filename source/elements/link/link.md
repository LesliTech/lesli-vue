
<script setup>
    import LesliLink from "./Link.vue"
</script>

# Links

Simple component to navigate through the vue router

## Props and emited functions
**:to**
(Object) Lesli URL instance 

**:button**
(Boolean) Lesli URL instance 

## Examples

**Example simple plain button:**

```html
    <lesli-link :to="url.admin('users')">
        My link
    </lesli-link>
```

<lesli-link to="holi">
    My link
</lesli-link>
