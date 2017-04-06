---
title: Getting Started
---

React Date Widgets is a set of ready to use date components built with React. This set was inspired by [Ant Design specification](https://ant.design/docs/react/introduce) but was completely rebuilt by following best code practices.

Current version of React Date Widgets provides three high-quality React UI widgets:
- Date Widget
- Time Widget
- Date Time Widget

- - -
##### Features:

- It's very easy to build upon the existing components
- Code is very well organized
- built with Inline styles
- loose coupling
- only two dependencies: moment, React.


### Installation

Date Widgets are available as the `react-date-widgets` package on [npm](https://www.npmjs.com/). The installation is easy as :

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

and you should be ready to go.

### Usage

The good news are that you don't need anything more to configure. You can just require widgets from your project:

```js
import { render } from 'react-dom';
import DateWidget from 'react-date-widgets/lib/date'

render(<DateWidget/>, document.getElementById('main'))
```

### I18n and Localization

We provide basic english translations for the widgets. If you need to customize it, please check out the [Translations page]({{ site.baseurl }}) for how to it.
