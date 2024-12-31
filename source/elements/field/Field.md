<script setup>
    import { ref } from "vue"
    import LesliInput from "../input/Input.vue"

    const name = ref("ldonis")

    setTimeout(() => {
        name.value = "Luis Donis"
    }, 5000)
</script>

# Input

The component lesli input is registered globally and is meant to be used in all the vue apps as lesli-input

## Props

**:placeholder**
prop that contains the placeholder for the input
- **type**: String
- **required**: false
- **default**: ""

**:disabled**
prop that indicates if the input is disabled
- **type**: Boolean
- **required**: false
- **default**: false

**:type**
prop that indicates the type of the input
- **type**: String
- **required**: false
- **default**: "text"

**:required**
prop that indicates if the input is required
- **type**: Boolean
- **required**: false
- **default**: false

**:name**
prop that indicates the name of the input
- **type**: String
- **required**: false
- **default**: ""
    
**:label**
prop that indicates the label of the input
- **type**: String
- **required**: false
- **default**: ""

**:rules**
array of rules to validate the input, the array contains arrow functions that return a string if the validation fails or true if the validation passes
- **type**: Array of arrow functions
- **required**: false
- **default**: []


**Example:**

```html
    <lesli-input
        required
        name="title"
        label="Titel"
        v-model="title"
        placeholder="Enter a title for the project"
        :rules="[
            (value) => value.length <= 50 || 'The title cannot be longer than 50 characters',
            (value) => value.length >= 3 || 'The title must be at least 3 character long',
        ]"
    />
```
<lesli-input label="Nombre:" placeholder="Ingresa tu nombre completo." v-model="name">
</lesli-input>
