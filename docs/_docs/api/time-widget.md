---
title: Time Widget
category: API
order: 2
---


## Component props

### withClear
Type: `bool` | default: `false`

Whether clear icon should be shown on the right side of an input. By pressing the clear button, the value of the component is set to `null`.

### clearText
Type: `string` | default: `'clear'`

Text in a tooltip, which appears when hovering over the clear icon.

### placeholder
Type: `string` | default: `'please choose a date'`

Placeholder string for the input.

### value
Type: `string` | default: None

The Value of the component. The time widget is stateless with respect to value. If you want to display value in the component, you will need to wrap stateful component on top of the time widget and pass the value down to the widget.

### defaultValue
Type: `string` | default: current time

The value to display at the first render.

### textFormat
Type: `string` | default: `'HH:mm:ss'`

Dependent on the format, different number of columns is rendered. For example, if the format is 'HH/mm' then only hours and minutes columns are rendered. Additionally, this format is to display a value in the input.

### valueFormat
Type: `string` | default: `'THH:mm:ssZ'`

The format of the value you passed into the component. For example, if the value is "2017:04:10" then format can be `"THH:mm:ssZ"`. As we use [moment](https://momentjs.com/docs/) for date handling, we support any format supported by moment. This format is also used in [onChange](#onChange) event.

### className
Type: `string` | default: None

Class name for a container of the component.

### pickerHeight
Type: `number` | default: `210`

The height of the time picker.

### style
Type: `object` | default: Look at the [Style section]({{ site.baseurl}}/style)

Style object for the component. For further details please take a look at our [Style section]({{ site.baseurl }}/style).

---

## Events

### onChange
Type: `(value: string) => void` | default: None

Event handler when the value of the component is changed. The format of the value string is the same as [valueFormat]({{ site.baseurl }}/api/date-widget#valueFormat).



## Example:

<div id="show_cases" style="color: red;">time-widget should be present here and input with props</div>

```js
import TimeWidget from 'react-date-widgets/lib/time'

const Widget = ({value, ...rest}) => (
    <TimeWidget {...{
        ...rest,
        value,
        valueFormat: 'THH:mm:ssZ',
        textFormat: 'HH:mm:ss',
    }}/>
)
```

<div id='time-widget'></div>
