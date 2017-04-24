---
title: Translations
---

We provide a set of basic translation for the date widgets.

```js
// Default translation strings for the widgets
const translation = {
	today: "Today",
	now: "Now",
	backToToday: "Back to today",
	ok: "Ok",
	clear: "Clear",
	month: "Month",
	year: "Year",
	timeSelect: "Select time",
	dateSelect: "Select date",
	monthSelect: "Choose a month",
	yearSelect: "Choose a year",
	decadeSelect: "Choose a decade",
	yearFormat: "YYYY",
	dateFormat: "M/D/YYYY",
	dayFormat: "D",
	dateTimeFormat: "M/D/YYYY HH:mm:ss",
	monthFormat: "MMMM",
	previousMonth: "Previous month (PageUp)",
	nextMonth: "Next month (PageDown)",
	previousYear: "Last year (Control + left)",
	nextYear: "Next year (Control + right)",
	previousDecade: "Last decade",
	nextDecade: "Next decade",
	previousCentury: "Last century",
	nextCentury: "Next century",
}
```

To overwrite the translation you can pass the `translation` property to a date widget:

```js
import { render } from 'react-dom';
import DateWidget from 'react-date-widgets/lib/date'

const myTranslationObject = {
	monthSelect: "Please choose the month"
}

render(<DateWidget {...{
	translations: myTranslationObject
}}/>, document.getElementById('main'))
```

We will extend the default object with object passed from outside so you don't need to pass an object with all keys if there is no need for that.

### i18n
This approach will give you full control over translations used in the widgets. That means, to have i18n support you will need to handle i18n strings outside of React Date Widgets and then pass an translation object contained strings into a widget.

### Demo

<div style="color: red">we can also render a playground here</div>
