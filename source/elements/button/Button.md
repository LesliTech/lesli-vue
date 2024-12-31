<script setup>
    import LesliButton from "./Button.vue"
</script>

# Buttons

lesli-button provides a wrapper around standard buttons, allowing manipulate the state of the button and the ability to use icon family like material icons.

You can build action buttons and vue router links.

By default the button is outlined

## Props and emited functions

| Name | Type | Description  |
|:---  |---   |---           |
| :icon | String | Indicates if the button is waiting to finish and action | 
| :loading | Boolean | Callback for clicking action | 
| @click | Function | Callback for clicking action | 
| primary | Boolean | Style primary for the button (default) | 
| main | Boolan | Style solid for the button | 


## Slots
This component accepts one single slot for the button text.

#### Standard button 
```html
    <lesli-button>
        My button
    </lesli-button>
```

<lesli-button>
    My button
</lesli-button>

<hr />


#### Button with link
```html
    <lesli-button to="www.lesli.dev">
        My button
    </lesli-button>
```

<lesli-button>
    My button
</lesli-button>

<hr />


#### Colors
```html
    <lesli-button>
        Standard
    </lesli-button>

    <lesli-button info>
        information
    </lesli-button>

    <lesli-button success>
        success
    </lesli-button>

    <lesli-button warning>
        Warning
    </lesli-button>

    <lesli-button danger>
        danger
    </lesli-button>
```
<div class="buttons">
    <lesli-button>
        Standard
    </lesli-button>
    <lesli-button info>
        information
    </lesli-button>
    <lesli-button success>
        success
    </lesli-button>
    <lesli-button warning>
        Warning
    </lesli-button>
    <lesli-button danger>
        danger
    </lesli-button>
</div>


<hr />


#### Solid colors
```html
    <lesli-button solid>
        Standard
    </lesli-button>

    <lesli-button solid info>
        information
    </lesli-button>

    <lesli-button solid success>
        success
    </lesli-button>

    <lesli-button solid warning>
        Warning
    </lesli-button>

    <lesli-button solid danger>
        danger
    </lesli-button>
```
<div class="buttons">
    <lesli-button solid>
        Standard
    </lesli-button>
    <lesli-button solid info>
        information
    </lesli-button>
    <lesli-button solid success>
        success
    </lesli-button>
    <lesli-button solid warning>
        Warning
    </lesli-button>
    <lesli-button solid danger>
        danger
    </lesli-button>
</div>

<hr />

#### Loading button 

```html
    <lesli-button loading>
        loading
    </lesli-button>
```

<div class="buttons mb-3">
    <lesli-button loading>
        loading
    </lesli-button>
    <lesli-button loading info>
        loading
    </lesli-button>
    <lesli-button loading success>
        loading
    </lesli-button>
    <lesli-button loading warning>
        loading
    </lesli-button>
    <lesli-button loading danger>
        loading
    </lesli-button>
</div>
<div class="buttons">
    <lesli-button loading solid>
        loading
    </lesli-button>
    <lesli-button loading solid info>
        loading
    </lesli-button>
    <lesli-button loading solid success>
        loading
    </lesli-button>
    <lesli-button loading solid warning>
        loading
    </lesli-button>
    <lesli-button loading solid danger>
        loading
    </lesli-button>
</div>

<hr />


#### Buttons with icon

> This feature is compatible only with google icons.


```html
    <lesli-button icon="refresh">
        My refresh button
    </lesli-button>
```
<div class="buttons">
    <lesli-button icon="refresh">
        reload
    </lesli-button>
    <lesli-button icon="person">
        profile
    </lesli-button>
    <lesli-button icon="save">
        save
    </lesli-button>
</div>

You can avoid the text to have a nice icon button

```html
<div class="buttons">
    <lesli-button icon="refresh">
    </lesli-button>
    <lesli-button icon="person">
    </lesli-button>
    <lesli-button icon="save">
    </lesli-button>
</div>
```

<div class="buttons">
    <lesli-button icon="refresh">
    </lesli-button>
    <lesli-button icon="person">
    </lesli-button>
    <lesli-button icon="save">
    </lesli-button>
</div>


<hr />


#### Sizes 
Currently we only support normal and small button variations

```html
    <lesli-button small>
        small button
    </lesli-button>

    <lesli-button small solid>
        small solid button
    </lesli-button>

    <lesli-button small icon="save">
        small icon button
    </lesli-button>

    <lesli-button small icon="refresh">
    </lesli-button>
```
<div class="buttons">
    <lesli-button small>
        small button
    </lesli-button>
    <lesli-button small solid>
        small solid button
    </lesli-button>
    <lesli-button small icon="save">
        small icon button
    </lesli-button>
    <lesli-button small icon="refresh">
    </lesli-button>
</div>
