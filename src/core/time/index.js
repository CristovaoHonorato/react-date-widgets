import widget from '../_hoc/widget'
import panel from '../_hoc/panel'
import expandCollapse from '../_hoc/expandCollapse'
import { deepAssign } from '../common/utils'


import skin from './skin'
import Picker from './picker'
import Input from '../common/Input'
import Footer from './Footer'

const layoutStyle = {
    display: 'inline-block',
    boxSizing: 'border-box',
    width: '100%',
}

const TimeWidget = expandCollapse(
    Input,
    panel(
        Picker,
        Footer
    )
)

export default widget(
    TimeWidget,
    {
        clearText: 'clear',
        style: deepAssign(layoutStyle, skin),
        placeholder: 'please choose a time',
        textFormat: 'HH:mm:ss',
        valueFormat: 'THH:mm:ssZ',
    }
)
