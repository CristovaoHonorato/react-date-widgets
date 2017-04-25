import widget from '../_hoc/widget'
import panel from '../_hoc/panel'
import expandCollapse from '../_hoc/expandCollapse'

import skin from './skin'
import translations from './translations'
import Input from '../common/Input'
import Picker from './picker'
import Footer from './Footer'

const DateWidget = expandCollapse(
    Input,
    panel(
        Picker,
        Footer
    ),
    true
)

export default widget(
    DateWidget,
    {
        clearText: 'clear',
        style: skin,
        textFormat: 'YYYY/MM/DD',
        valueFormat: 'TYYYY:MM:DDZ',
        placeholder: 'please choose a date',
        translations,
    }
)
