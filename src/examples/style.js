
const fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif'
const backgroundTransition = 'background .3s ease'
const colorTransition = 'color .3s ease'

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

const footer = {
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

const input = {
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
	input,
	panel: {
		backgroundClip: 'padding-box',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#ccc',
		borderRadius: 3,
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


export const dateTimeInputStyleExample = `<DateTimePicker {...{
	style: {
		input: {
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
	}
}} />`


const timePanelStyleExample = `<TimePicker {...{
	style: {
		panel: {
			backgroundClip: 'padding-box',
			backgroundColor: '#fff',
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: '#ccc',
			borderRadius: 3,
			boxShadow: '0 1px 5px #ccc',
			outline: 'none',
			width: '100%',
			picker,
			footer: {
				borderTop: '1px solid #e9e9e9',
				fontSize: 12,
				padding: '10px 0',
				position: 'relative',
				nowBtn: {
					display: 'inline-block',
					textAlign: 'center',
					color: '#108ee9',
					transition: 'color .3s ease',
					fontSize: '14px',
					lineHeight: '18px',
					cursor: 'pointer',,
					paddingLeft: 12,
				},
				okBtn: {
					backgroundColor: '#108ee9',
					borderRadius: 4,
					lineHeight: '1.5',
					padding: '1px 7px',
					border: '1px solid transparent',
					color: '#fff',
					fontWeight: '500',
					marginRight: 10,
					textAlign: 'center',
					transition: 'background .3s ease',
					':hover': {
						backgroundColor: '#49a9ee',
					},
				}
				textAlign: 'right',
			}
		}
	}
}} />`
