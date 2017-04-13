---
title: Getting Started
---
### Widgets

<div id="getting-started"></div>
<script type="text/javascript">
  function getLink(href, text) {
      return "<a href='" +href + "'>" + text + "</a>"
  }
  var baseUrl = window.location.href
  var apiLinks = {
      datepickerText: getLink(baseUrl + "api/date-widget", "Date Widget API"),
      timepickerText: getLink (baseUrl + "api/time-widget", "Time Widget API"),
      dateTimePickerText: getLink(baseUrl + "api/date-time-widget", "Date Time Widget API"),
  }
  window.renderGettingStartedComponents('getting-started', apiLinks)
</script>

### Installation

Date widgets are available as the `react-date-widgets` package on [npm](https://www.npmjs.com/). The installation is easy as :

<div className='row'>
<div className='col-sm-6'>
<h4>npm</h4>
<pre><code>
$ npm install react-date-widgets --save
</code></pre>
</div>
<div className='col-sm-6'>
<h4>yarn</h4>
<pre><code>
$ yarn add react-date-widgets
</code></pre>
</div>
</div>


### Usage

The good news are that you don't need anything more to configure. You can just require widgets from your project:

```js
import { render } from 'react-dom';
import DateWidget from 'react-date-widgets/lib/date'

render(<DateWidget/>, document.getElementById('main'))
```

### I18n and Localization

As default we provide english translations for the widgets. If you need to customize it or translate it in different language, please check out the [Translations page]({{ site.baseurl }}/translations) for more information.

### Style

<!-- From our own experience we are certainly aware of how important it can be to have ability to customize components. -->
To find more information about how to style React Date Widgets, please follow our [Style section]({{ site.baseurl }}/style).


### About

Please check out our [About page]({{ site.baseurl }}/about) where you can read about reasons behind creating React Date Widgets.
