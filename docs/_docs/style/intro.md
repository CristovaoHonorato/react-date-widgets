---
title: Style the components
category: Style
order: 1
---

In React Date Widgets we follow following approach to style our components:
 <!-- You can find this object below. -->

 <!-- - Please make sure that your object represents the same structure as skin object below. -->
- we provide a basic skin object per component where all UI styles are defined.
- skin object is representing the component tree, hence each nested property in the skin object will style a certain component with respect to nesting level and a name of property.
- you are able to overwrite this object by passing your own object with styles.
- we define layout style directly in the components to make sure that nothing of it can be overwritten. If one still want to overwrite layout style, one will need to fork this repo.



<!-- Below is the style object that is provided by React Date Widgets for `date-widget`: -->

All widgets in React Date Widget are divided into two components: `field` and `panel`. Therefore style object should represent this structure as well:
```js

const style = {
    field: {
        // here goes styles for the field
    },
    panel: {
        // here goes styles for a panel
    }
}
```
As `field` component is shared between widgets, the structure for field will be same for all widgets in React Date Widgets.

### Style panels

 You can find instructions of how to style panels here: [style Date widget]({{ site.baseurl }}/style/date-widget/), [style Time widget]({{ site.baseurl }}/style/time-widget/), [style time widget]({{ site.baseurl }}/style/date-time-widget/).

### Style field

<!-- Please don't be scared of the size of the object. Every widget consist of two parts: Input and Panel, therefore you need to specify these properties in your style object. -->
`field` is a container for the input and the clear button. Clear button is a cross on the right side of the input. Styling `field` is quite straightforward:

```js

const style = {
    field: {
        // here goes styles for the field (container for the input)
        input: {
            // here goes style for the input
        },
        clear: {
            // here goes style for the cross button
        }
    }
}
```
Below you can try it by yourself.

### Try it yourself

Below you can play around with style object. This example shows how you can style `field` in the widgets.
You will find similar playgrounds for each of the panel.
 <!-- here:  React Date Widgets built with Input component that shared between three widgets. Hence structure of a style object for the input will be same for all widgets. -->

<div id="input-style-api"></div>
<script>
  window.renderInputStyleExample('input-style-api')
  window.scrollTo(0, 0)
</script>
