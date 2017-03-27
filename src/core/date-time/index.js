import widget from '../_hoc/widget'
import expandCollapse from '../_hoc/expandCollapse'

import skin from './skin'
import locale from '../date/locale'
import Input from '../common/Input'
import Panel from './Panel'

export default widget(
    expandCollapse(Input, Panel),
    {
        clearText: 'clear',
        style: skin,
        valueFormat: 'TYYYY-MM-DD HH:mm:ssZ',
        textFormat: 'YYYY-MM-DD HH:mm:ss',
        pickerHeight: 200,
        locale
    }
)
