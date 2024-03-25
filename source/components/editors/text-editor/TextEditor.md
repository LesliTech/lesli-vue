<script setup>
    import TextEditor from "./TextEditor.vue"
</script>

# Text Editor
Provide a set of html view components to allow user work with date and time

## Props single date
- v-model: (Date) v-model of the date picker
- min-date: (Date) min date to show in the date picker
- required: (Boolean) prevent clearing the date value by deleting all text from the input

## Props date ranges
- v-model: (object) v-model of the date picker
- mode: (String) mode of the date picker (date, dateTime, time)

## Use examples:

```html
<text-editor v-model="mytext">
</text-editor>
```

<text-editor v-model="mytext" mode="full">
</text-editor>

<hr />

<text-editor v-model="mytext">
</text-editor>

<hr />

<text-editor v-model="mytext" mode="small">
</text-editor>

<hr />

<text-editor v-model="mytext" mode="empty">
</text-editor>
