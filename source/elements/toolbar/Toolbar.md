
<script setup>
    import LesliToolbar from "./Toolbar.vue"
</script>


# Toolbar
This component provides a standard layout for adding search and filter elements. It contains a search input for general queries and a couple of slots in case you want to add extra HTML elements. It is designed mainly to be used in the **index** views.


### Props

| Name | Type | Description  |
|:---  |---   |---           |
| :placeholder | string | Helper text for the empty search field |
| :initial     | string | The initial value to be displayed into the search input. |

### Methods

##### void search(text)

You can use this function from your own component to do some action when the search is triggered from the component. On a normal execution, the search is triggered 0.8s after the user stopped writting on the input.

**params:**

- **String** <span style="color:blue">text to be searched</span>: The text that the user typed into the input. This function has a small delay, in case of backend search, so not all characters typed will trigger an HTTP request.

### Slots

##### default slot 
If you want to add extra HTML elements to the toolbar (for example, an autocomplete, or a dropdown), you can use the default slot. Since this is the default slot, you can skip the **< template >** directive and write your html directly inside the toolbar component:


### Examples

**Simple toolbar**

```html
<lesli-toolbar></lesli-toolbar>
```

**Result:**

<lesli-toolbar></lesli-toolbar>


**Search placeholder**
```html
<lesli-toolbar placeholder="Filter projects by code">
</lesli-toolbar>
```

**Result:**

<lesli-toolbar placeholder="Filter projects by code">
</lesli-toolbar>


**Toolbar controls**

```html
<lesli-toolbar>
    <div class="control">
        <div class="select">
            <select v-model="filters.per_page" name="projects-filters-per-page">
                <option :value="10">10</option>
                <option :value="15">15</option>
                <option :value="30">30</option>
                <option :value="50">50</option>
            </select>
        </div>
    </div>
    <button class="button is-primary">save</button>
</lesli-toolbar>
```

<lesli-toolbar>
    <div class="control">
        <div class="select">
            <select name="projects-filters-per-page">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="50">50</option>
            </select>
        </div>
    </div>
    <button class="button is-primary">save</button>
</lesli-toolbar>
