<script setup>
    import { ref } from "vue"
    import dayjs from "dayjs"
    
    import LesliCalendar from "./Calendar.vue"
    const mydate = new Date()

    const birthday = ref("1990-09-11T11:05:00.507Z")
</script>

# Calendar
Provide a set of html view components to allow user work with date and time

## Props single date
- v-model: (Date) v-model of the date picker
- min-date: (Date) min date to show in the date picker
- required: (Boolean) prevent clearing the date value by deleting all text from the input

## Props date ranges
- v-model: (object) v-model of the date picker
- mode: (String) mode of the date picker (date, dateTime, time)

## Examples

### Basic usage:

```vue
<script setup>
    import LesliCalendar from "./Calendar.vue"
    const mydate = new Date()
</script>

<lesli-calendar v-model="mydate" mode="dateTime">
</lesli-calendar>
```

<lesli-calendar v-model="mydate" mode="dateTime">
</lesli-calendar>

<hr />

### Using date & time libraries:

```vue
<script setup>
    import LesliCalendar from "./Calendar.vue"
    import dayjs from "dayjs"
    const mydate = datejs().toDate()
</script>

<lesli-calendar v-model="mydate" mode="dateTime">
</lesli-calendar>
```

<lesli-calendar v-model="mydate" mode="dateTime">
</lesli-calendar>

<hr />

### Date as string (from database)

```vue
<script setup>
    const birthday = "1990-09-11T11:05:00.507Z"
</script>

<lesli-calendar v-model="birthday" mode="dateTime">
</lesli-calendar>
```
{{ birthday }}
<lesli-calendar v-model="birthday" mode="dateTime">
</lesli-calendar>
