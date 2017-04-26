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
        footer
    }
}
