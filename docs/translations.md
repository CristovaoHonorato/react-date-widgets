---
title: Translations and I18n
---

We provide a set of basic translation for the date widgets:

```json
{
	"today": "Today",
	"now": "Now",
	"backToToday": "Back to today",
	"ok": "Ok",
	"clear": "Clear",
	"month": "Month",
	"year": "Year",
	"timeSelect": "Select time",
	"dateSelect": "Select date",
	"monthSelect": "Choose a month",
	"yearSelect": "Choose a year",
	"decadeSelect": "Choose a decade",
	"yearFormat": "YYYY",
	"dateFormat": "M/D/YYYY",
	"dayFormat": "D",
	"dateTimeFormat": "M/D/YYYY HH:mm:ss",
	"monthFormat": "MMMM",
	"previousMonth": "Previous month (PageUp)",
	"nextMonth": "Next month (PageDown)",
	"previousYear": "Last year (Control + left)",
	"nextYear": "Next year (Control + right)",
	"previousDecade": "Last decade",
	"nextDecade": "Next decade",
	"previousCentury": "Last century",
	"nextCentury": "Next century",
}
```

To overwrite the translation you can pass the `translation` property to a date widget:

```js
import { render } from 'react-dom';
import DateWidget from 'react-date-widgets/lib/date'

render(<DateWidget {...{
	translations: yourTranslationObject
}}/>, document.getElementById('main'))
```
