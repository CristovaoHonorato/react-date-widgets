import { footer, field, backgroundTransition } from '../common/skin'

const headerBtn = {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#666',
}

const header = {
    borderBottomColor: '#e9e9e9',
    headerBtn
}

const column = {
    fontSize: '12px',
    borderColor: '#e9e9e9',
    height: '100%',
    entry: {
        transition: backgroundTransition,
        height: '24px',
        lineHeight: '24px',
        ':hover': {
            background: '#ecf6fd',
        },
        ':selected': {
            // background: '#edfaff',
            background: '#f7f7f7',
            color: 'black',
        },
        ':disabled': {}
    }
}

const picker = {
    column,
    header
}

const skin = {
    field,
    panel: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        boxSizing: 'border-box',
        boxShadow: '0 1px 5px #ccc',
        outline: 'none',
        width: '100%',
        picker,
        footer: {
            ...footer,
            textAlign: 'right',
            okBtn: {
                ...footer.okBtn,
                marginRight: 10,
            }
        }
    }
}

export default skin
