import datePicker from '../date/skin'
import timePicker from '../time/skin'
import { footer } from '../common/skin'

export default {
    ...datePicker,
    panel: {
        ...datePicker.panel,
        picker: {
            date: datePicker.panel.picker,
            time: {
                ...timePicker.panel.picker,
                height: 206
            }
        },
        footer: {
            ...footer,
            okButton: {
                ...footer.okBtn,
                position: 'absolute',
                bottom: '16%',
                right: '5%',
            },
            selectTimeBtn: {
                ...footer.nowBtn,
                paddingLeft: 0,
                position: 'relative',
                left: '22%',
            }
        }
    }
}
