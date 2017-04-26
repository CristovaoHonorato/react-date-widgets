import { footer, fontFamily, colorTransition, field, backgroundTransition } from '../common/skin'

export default {
    field,
    panel: {
        backgroundColor: '#fff',
        borderColor: '#e9e9e9',
        borderRadius: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        boxSizing: 'border-box',
        boxShadow: '0 1px 5px #e9e9e9',
        picker: picker(),
        footer
    }
}

function picker() {
    return {
        height: 168,
        header: header(),
        column: column()
    }
}

function header(){
    return {
        borderBottomColor: '#e9e9e9',
        headerBtn: {
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily,
            WebkitFontSmoothing: 'antialiased',
            transition: colorTransition,
            color: '#666',
            cursor: 'pointer',
            ':hover': {
                color: '#23c0fa'
            }
        }
    }
}

function column(){
    return {
        boxSizing: 'border-box',
        width: '33%',
        height: '100%',
        entry: entry(),
        ':hours': {

        },
        ':minutes': {
            borderLeft: '1px solid #e9e9e9',
            width: '34%'
        },
        ':seconds': {
            borderLeft: '1px solid #e9e9e9',
        }
    }
}

function entry() {
    return {
        color: '#666',
        fontFamily,
        fontSize: '12px',
        height: '24px',
        lineHeight: '24px',
        transition: backgroundTransition,
        WebkitFontSmoothing: 'antialiased',
        ':hover': {
            background: '#ecf6fd',
        },
        ':selected': {
            background: '#f7f7f7',
            color: 'black',
        },
        ':disabled': {

        }
    }
}
