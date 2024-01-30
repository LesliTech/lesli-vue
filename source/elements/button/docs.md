# Buttons

lesli-button provides a wrapper around standard buttons, allowing manipulate the state of the button and the ability to use icon family like material icons.

You can build action buttons and vue router links.

By default the button is outlined

## Props and emited functions

|    |   |   |   |   |
|:---|---|---|---|---|
| :icon | String | Indicates if the button is waiting to finish and action | 
| :loading | Boolean | Callback for clicking action | 
| @click | Function | Callback for clicking action | 
| primary | Boolean | Style primary for the button (default) | 
| main | Boolan | Style solid for the button | 


## Slots
This component accepts one single slot for the button text.

## Examples

**Example simple plain button:**

```html
    <lesli-button>
        My button
    </lesli-button>
```

**Result:**

<lesli-button>
    My button
</lesli-button>


**Example of a loding button:**

```html
    <lesli-button :loading="true">
        My loading button
    </lesli-button>
```

**Result:**

<lesli-button :loading="true">
    My loading button
</lesli-button>

**Example of icon button:**

```html
    <lesli-button icon="refresh">
        My refresh button
    </lesli-button>
```

**Result:**

<lesli-button icon="refresh">
    My refresh button
</lesli-button>

**Example of solid button:**

```html
    <lesli-button icon="refresh" main>
        My outlined button
    </lesli-button>
```

**Result:**

<lesli-button icon="refresh" main>
    My outlined button
</lesli-button>
