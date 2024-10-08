<script setup>
    import {ref} from "vue"
    import LesliSelect from "./Select.vue"

    const selectedOption = ref(null)

    function onSelected() {
        console.log(selectedOption)
    }
</script>

# Select 

The component lesli select is registered globally and is meant to be used in all the vue apps as lesli-select. The difference between this component and the lesli-dropdown component is that lesli-select is used to display a list of options in a form.

## Props

**:options**
prop that contains the options to be shown in the select component
- **type**: Array
- **required**: true

**:placeholder**
prop that contains the placeholder for the select
- **type**: String
- **required**: false
- **default**: "Select..."

**:icon**
prop that contains the icon to be set on the select component
- **type**: String
- **required**: false

**:required**
prop that allows to set the select component as required in a form
- **type**: Boolean
- **required**: false
- **default**: false

**:disabled**
prop that allows to disable the select component
- **type**: Boolean
- **required**: false
- **default**: false

```html
<lesli-select
    v-model="selection"
    icon="public"
    required
    :options="[{
        label: 'Primera opcion',
        value: 'option_one'
    }, {
        label: 'Segunda opcion',
        value: 'option_two'
    }]">
</lesli-select>
```

<lesli-select
    @change="onSelected"
    v-model="selectedOption"
    icon="public"
    required
    :options="[{
        label: 'Primera opcion',
        value: 'option_one'
    }, {
        label: 'Segunda opcion',
        value: 'option_two'
    }]">
</lesli-select>


<div class="control has-icons-left">
    <div class="select">
        <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
        </select>
    </div>
    <span class="icon is-small is-left">
        <span class="material-icons">
            public
        </span>
    </span>
</div>

<div class="control has-icons-left">
  <div class="select is-small">
    <select>
      <option selected>Country</option>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
  <span class="icon is-small is-left">
    <span class="material-icons">
            public
        </span>
  </span>
</div>
