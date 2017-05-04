---
title: Date Time Widget
category: Style
order: 4
---

To style the Date Time Widget you need to pass a style object with properties that you want to overwrite. These properties will extend the default style object.

Here will be described how to style the panel for the date time widget. For how to style input please refer to [this page]({{ site.baseurl }}/style/intro).

**Panel** here represents the overlay where an user picks a date and a time.

As this component is a composition of Date widget and Time widget, style object of date time widget consist of the combination of date widgets style object and time widget style object:

```js

const style = {
    panel: {
        picker: {
            day: {
                // here you can pass style of the same structure as in date widget
            },
            time: {
                // here you can pass style of the same structure as in time widget
            }
        }
    }
}
```

Below you can see an example of how you can style panel for the Date Time Widget.
Please pay attention to the comments as they explain how to style elements in the component with respect to the property name.

<div id="date-time-widget-style-api"></div>
<script>
  window.renderDateTimePanelStyleExample('date-time-widget-style-api')
  window.scrollTo(0, 0)
</script>
