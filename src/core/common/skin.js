export const fontFamily = '"Helvetica Neue For Number", BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif"'
export const backgroundTransition = 'background .3s ease'
export const colorTransition = 'color .3s ease'

export const footer = {
    borderTop: '1px solid #e9e9e9',
    boxSizing: 'border-box',
    fontSize: 12,
    position: 'relative',
    textAlign: 'right',
    padding: '9px 0',
    now: {
        ...footerAction(),
        position: 'absolute',
        left: 10
    },
    mode: {
        ...footerAction(),
        marginRight: 10
    },
    ok: {
        ...footerButton(),
        marginRight: 10
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
    padding: 8,
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
        top: 8,
        right: 8,
        ':hover': {
            opacity: 1,
            color: '#666'
        }
    }
}

function footerButton(){
    return {
        backgroundColor: '#108ee9',
        border: '1px solid transparent',
        borderRadius: 4,
        boxSizing: 'border-box',
        color: '#fff',
        display: 'inline-block',
        height: '21px',
        lineHeight: '21px',
        padding: '0px 7px',
        textAlign: 'center',
        transition: backgroundTransition,
        ':hover': {
            backgroundColor: '#49a9ee',
        }
    }
}

function footerAction(){
    return {
        boxSizing: 'border-box',
        color: '#108ee9',
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily,
        height: '21px',
        lineHeight: '21px',
        transition: colorTransition,
        WebkitFontSmoothing: 'antialiased',
        ':hover': {
            color: '#49a9ee',
        },
        ':disabled': {
            color: '#bbb',
        }
    }
}
