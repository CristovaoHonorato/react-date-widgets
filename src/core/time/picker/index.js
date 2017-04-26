import Column from './Column'
import Header from './Header'
import createPicker from './createPicker'

export default createPicker(() => null, Column)

export const WithHeader = createPicker(Header, Column)
