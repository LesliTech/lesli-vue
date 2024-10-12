<script setup>
    import LesliPagination from "./Pagination.vue"

    const store = {
        pagination: {
            page: 1,
            pages: 10,
            total: 1000,
            results: 100
        }
    }

    function paginate(page) {
        console.log(page)
    }
</script>

# Pagination
This component allows you to navigate between the pages of the records that contain a response with pagination.

**:pagination**
Prop that contain the pagination structure, this is the same returned by "response_with_pagination".

**:mode**
[complete (default) | simple] Prop that allows to show simple pagination, only prev and next buttons or full controls.

**@paginate(page)**
Function executed every time the user clicks on pagination buttons, this function receive the page the user requested for.

**Example of a simple use of pagination:**

```vue
<script>
const store = {
    pagination: {
        page: 1,
        pages: 10,
        total: 1000,
        results: 100
    }
}
function paginate(page) {
    console.log(page)
}
</script>
<lesli-pagination :pagination="store.pagination" @paginate="paginate">
</lesli-pagination>
```
<lesli-pagination :pagination="store.pagination" @paginate="paginate">
</lesli-pagination>


<br />

```vue
<script>
const store = {
    pagination: {
        page: 1,
        pages: 10,
        total: 1000,
        results: 100
    }
}
</script>
<lesli-pagination :pagination="store.pagination" mode="simple">
</lesli-pagination>
```

<lesli-pagination :pagination="store.pagination" mode="simple">
</lesli-pagination>
