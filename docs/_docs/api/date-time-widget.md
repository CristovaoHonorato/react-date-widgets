---
title: Date Time Widget
category: API
order: 3
---

<div id="date-time-widget-api"></div>
<script>
  window.renderDateTime('date-time-widget-api')
</script>

---

## Component props

### withClear
Type: `bool` | default: `false`

Whether clear icon should be shown on the right side of an input. By pressing the clear button, the value of the component is set to `null`.

### clearText
Type: `string` | default: `'clear'`

Text in a tooltip, which appears when hovering over the clear icon.

### placeholder
Type: `string` | default: `'please choose a date and time'`

Placeholder string for the input.

### value
Type: `string` | default: None

The Value of the component. The date time widget is stateless with respect to value. If you want to display value in the component, you will need to wrap stateful component on top of the date time widget and pass the value down to the widget.

### defaultValue
Type: `string` | default: current time

The value to display at the first render.

### textFormat
Type: `string` | default: `'YYYY-MM-DD HH:mm:ss'`

Dependent on the format, different number of columns is rendered. For example, if the format includes only "HH" and "mm" then only hours and minutes columns are rendered. Additionally, this format is to display a value in the input.

### valueFormat
Type: `string` | default: `'TYYYY-MM-DD HH:mm:ssZ'`

The format of the value you passed into the component. For example, for the default format `'TYYYY:MM:DDZ'`the valid value would be: "2017:04:10". As we use [moment](https://momentjs.com/docs/) for date handling, we support any format supported by moment. This format is also used in [onChange](#onchange) event.

### className
Type: `string` | default: None

Class name for a container of the component.

### minDate
Type: `string` | default: None

Lower boundary for the date value. Date after `maxDate` will be disabled. This string should be formatted with respect to [valueFormat](#valueformat).

### maxDate
Type: `string` | default: None

Upper bound for the date value. Date after `maxDate` will be disabled. This string should be formatted with respect to [valueFormat](#valueformat).

### pickerHeight
Type: `number` | default: `210`

The height of the date picker.

### style
Type: `object` | default: Look at the [Style section]({{ site.baseurl}}/style)

Style object for the component. For further details please take a look at our [Style section]({{ site.baseurl }}/style).

---

## Events

### onChange
Type: `(value: string) => void` | default: None

Event handler when the value of the component is changed. The format of the value string is the same as [valueFormat](#valueformat).

### onClear
Type: `(e: SyntethicEvent) => void` | default: None

Event handler when the cross button next to the input is clicked.

### onDayHover
Type: `(cellValue: moment) => void` | default: None

Event handler when hovering over the cell. Cell here is the `div` around day number in the widget.

---


```js
import DateTimeWidget from 'react-date-widgets/lib/date-time'

const Widget = ({value, ...rest}) => (
	<DateTimeWidget {...{
		...rest,
		value,
		withClear: true,
		placeholder: 'choose the date',
	}}/>
)
```


<!-- onChange: PropTypes.func,
onClear(evt)
onDayHover(cellValue) -->

<!-- ## style
clearText: 'clear',
style: skin,
textFormat: 'YYYY/MM/DD',
valueFormat: 'TYYYY:MM:DDZ',

clearText: PropTypes.string,
value: PropTypes.string,
withClear: PropTypes.bool,
placeholder: PropTypes.string,
textFormat: PropTypes.string.isRequired,
valueFormat: PropTypes.string.isRequired,
style: PropTypes.object,
className: PropTypes.string,
onChange: PropTypes.func,
onClear(evt)
onDayHover(cellValue) -->
