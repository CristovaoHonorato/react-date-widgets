export const fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif'
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

export const input = {
    border: '1px solid #eee',
    boxSizing: 'border-box',
    width: '100%',
    cursor: 'auto',
    lineHeight: '1.5',
    margin: 0,
    outline: 0,
    padding: 5,
    clearBtn: {
        cursor: 'pointer',
        fontSize: 12,
        lineHeight: '200%',
        opacity: '0.5',
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        right: 0,
        width: '10%',
        ':hover': {
            color: '#666',
        }
    }
}
