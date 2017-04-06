---
title: Time Widget
category: API
order: 2
---

Here will be explained time-widget

```js
import DateWidget from 'react-date-widgets/lib/date'

const Widget = ({value, ...rest}) => (
    <DateWidget {...{
        ...rest,
        value,
        valueFormat: 'YYYY-MM-DD',
        textFormat: 'YYYY/MM/DD',
    }}/>
)
```
