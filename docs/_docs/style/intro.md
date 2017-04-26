---
title: Style the components
category: Style
order: 1
---

In React Date Widgets we follow following approach to style our components:

- we provide a basic skin object where all UI styles are defined. You can find this object below.
- skin object is representing the component tree, hence each nested property in the skin object will style a certain component with respect to nesting level and a name of property.
- you are able to overwrite this object by passing your own object with styles.
- Please make sure that your object represents the same structure as skin object below.
- we define layout style directly in the components to make sure that nothing of it can be overwritten. If one still want to overwrite layout style, one will need to fork this repo.



Here is an example of how you can style the `date-widget`:
```js
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
}
```

Please don't be scared of the size of the object. Every widget consist of two parts: Input and Panel, therefore you need to specify these properties in your style object.
Below you can do it by yourself.

### Do it yourself

Below you can play around with style object. This example shows how you can style input in the widgets. React Date Widgets built with Input component that shared between three widgets. Hence structure of a style object for the input will be same for all widgets.

<div id="input-style-api"></div>
<script>
  window.renderInputStyleExample('input-style-api')
  window.scrollTo(0, 0)
</script>
