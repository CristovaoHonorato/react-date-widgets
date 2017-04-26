export const fontFamily = '"Helvetica Neue For Number", BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif"'
export const backgroundTransition = 'background .3s ease'
export const colorTransition = 'color .3s ease'

const commonFooterBtn = {
    display: 'inline-block',
    textAlign: 'center',
    color: '#108ee9',
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    transition: colorTransition,
    fontSize: '14px',
    lineHeight: '18px',
    cursor: 'pointer',
    ':hover': {
        color: '#49a9ee',
    },
    disabled: {
        color: '#bbb',
        ':hover': {
            color: '#bbb',
        },
    },
}

export const footer = {
    borderTop: '1px solid #e9e9e9',
    fontSize: 12,
    padding: '10px 0',
    position: 'relative',
    nowBtn: {
        ...commonFooterBtn,
        paddingLeft: 12,
    },
    okBtn: {
        ...commonFooterBtn,
        backgroundColor: '#108ee9',
        borderRadius: 4,
        lineHeight: '1.5',
        padding: '1px 7px',
        border: '1px solid transparent',
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
        transition: backgroundTransition,
        ':hover': {
            backgroundColor: '#49a9ee',
        }
    }
}

export const field = {
    border: '1px solid #eee',
    borderWidth: '1px',
    borderRadius: '4px',
    fonSize: 12,
    boxSizing: 'border-box',
    cursor: 'auto',
    margin: 0,
    padding: 5,
    ':expanded' : {
        borderWidth: '1px 1px 0 1px',
        borderRadius: '4px 4px 0 0'
    },
    input: {
        border: 'none',
        display: 'block',
        height: '20px',
        lineHeight: '20px',
        margin: 0,
        outline: 'none',
        padding: 0,
        width: '100%'
    },
    clear: {
        cursor: 'pointer',
        fontSize: 12,
        lineHeight: '20px',
        height: '20px',
        opacity: '0.5',
        position: 'absolute',
        textAlign: 'center',
        top: 5,
        right: 5,
        ':hover': {
            opacity: 1,
            color: '#666'
        }
    }
}
