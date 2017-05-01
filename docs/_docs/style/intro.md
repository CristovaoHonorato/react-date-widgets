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



<!--
const cell = {
    background: 'transparent',
    borderRadius: '2px',
    color: '#666',
    fontSize: 13,
    height: 22,
    width: 20,
    lineHeight: '20px',
    margin: '0 auto',
    transition: backgroundTransition,
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    ':hover': {
        background: '#ebfaff',
        cursor: 'pointer',
        selectedDay: {
            background: '#3fc7fa',
        },
        disabled: {
            background: '#f3f3f3',
        }
    },
    shadowSelectedDay: {
        background: '#108ee9',
        color: '#fff',
    },
    selectedDay: {
        background: '#3fc7fa',
    },
    disabled: {
        cursor: 'not-allowed',
        color: '#bcbcbc',
        background: '#f3f3f3',
        borderRadius: '0',
        width: 'auto',
    },
    today: {
        border: '1px solid #3fc7fa',
        color: '#108ee9',
        fontWeight: 'bold',
    },
    disabledCellFirstOfRow: {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
    },
    disabledCellLastOfRow: {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
    },
    prevMonthCell: {
        color: '#bbb',
    },
    nextMonthCell: {
        color: '#bbb',
    }
}

const bodyHeader = {
    fontSize: 12,
    lineHeight: '18px',
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    fontWeight: 400,
    padding: '6px 0',
}


const body = {
    bodyHeader,
    cell
}

const commonHeaderBtn = {
    color: '#999',
    fontFamily: 'Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    transition: colorTransition,
    fontSize: 16,
    ':hover': {
      color: '#23c0fa',
    }
}

const selectBtn = {
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    transition: colorTransition,
    color: '#666',
    cursor: 'pointer',
    ':hover': {
      color: '#23c0fa',
    }
}

const header = {
    borderBottomColor: '#e9e9e9',
    prevMonthBtn: commonHeaderBtn,
    nextMonthBtn: commonHeaderBtn,
    nextYearBtn: commonHeaderBtn,
    prevYearBtn: commonHeaderBtn,
    selectBtn
}

const picker = {
    day: {
        fontFamily: 'Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif',
        fontSize: '12px',
        body,
        header,
    },
    month: {},
    year: {},
}

const date = {
    input,
    panel: {
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 1px 5px #e9e9e9',
        backgroundClip: 'padding-box',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e9e9e9',
        picker,
        footer
    }
} -->
