<script setup>
    import LesliForm from "./Form.vue"
    import LesliInput from "../input/Input.vue"
    import LesliButton from "../button/Button.vue"
</script>

# Form

Simple form wrapper to build Lesli forms


## Props and emited functions

**@submit()** 
Emited when form is submited


### examples

```html
<lesli-form class="mb-4" @submit="isEditable ? onUpdate() : onCreate()">
</lesli-form>
```
<lesli-form title="Información de Usuario" @submit="isEditable ? onUpdate() : onCreate()">
    <lesli-input label="Nombre:" placeholder="Ingresa tu nombre completo."></lesli-input>
    <lesli-input label="E-mail:" placeholder="*Email corporativo unicamente*"></lesli-input>
    <lesli-button>
        Save
    </lesli-button>
</lesli-form>

<br />

<lesli-form title="Información de Usuario" @submit="isEditable ? onUpdate() : onCreate()">
    <lesli-input horizontal label="Nombre:" placeholder="Ingresa tu nombre completo."></lesli-input>
    <lesli-input horizontal label="E-mail:" placeholder="*Email corporativo unicamente*"></lesli-input>
    <lesli-button>
        Save
    </lesli-button>
</lesli-form>
