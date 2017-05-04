export const dateTimeInputStyleExample = `<DateTimePicker {...{
	style: {
		field: {
			background: 'tomato',
			border: '1px solid orange',
			borderRadius: '4px',
			fonSize: 14,
			boxSizing: 'border-box',
			':expanded' : {
				borderWidth: '1px 1px 0 1px',
				borderRadius: '4px 4px 0 0'
			},
			input: {
				fontSize: 15,
			},
			clear: {
				color: 'red',
				':hover': {
					color: 'black',
				}
			}
		}
	}
}} />`

const timeHeader  = `
header: {
	headerBtn: {
// header text when in mode of a time widget
// to time. e.g.: '4 May 2017'
		color: 'orange',
		":hover": {

		},
	},
},
`

const timePicker = `
column: {
// here goes common style for the columns
// ":hours" - styles for the hours column
// ":minutes" - styles for the minutes column
// ":seconds" - styles for the seconds column
	entry: {
// entry in a column. Entry is a div element which surrounds a value.
		":hover": {

		},
		":selected": {

		},
		":disabled": {

		},
	},
	":hours": {

	},
	":minutes": {

	},
	":seconds": {

	},
},`
export const timePanelStyleExample = `<TimePicker {...{
	style: {
		field: {
			// style for the field
		},
		panel: {
// here goes style to style conainer of the panel
			borderRadius: "10px",
			picker: {
				${timePicker}
			},
			footer: {
				"ok": {
// 'ok' - button
					backgroundColor: 'chocolate',
					":hover": {

					},
					":disabled": {

					},
				}
			},
		},
	}
}} />`

const datePanel = `
day: {
	header: {
		prevMonthBtn: {
// css properties here
// will style button <,
// button to go to previous month
			color: 'turquoise',
			":hover": {
// the same button when hovered
// all the followings :hover properties
// style the same element when hovered
			}
		},
		nextMonthBtn: {
// css properties here
// will style button >,
// button to go to next month
			color: 'tomato',
			":hover": {

			}
		},
		nextYearBtn: {
// css properties here
// will style button >,
// button to go to next year
			color: 'tan',
			":hover": {

			}
		},
		prevYearBtn: {
// css properties here
// will style button <<,
// button to go to previous year
			color: 'tean',
			":hover": {

			}
		},
		selectBtn: {
// css properties here
// will style current value of month and year
// in the header
			color: 'plum',
			":hover": {

			}
		}
	},
	body: {
		weekdayCell: {
// css properties here
// will style weekdays text
// Mo Tu and etc
			color: 'orchid',
		},
		dayCell: {
// this property will style div with
// day number inside
// Day cell can have different states:
// shadowSelectedDay - day which has a cursor
// selectedDay - day of the component's value
// today - today's day
// prevMonthCell - day cell that belongs to previous month
// nextMonthCell - day cell that belongs to next month
// disabled - disabled day

			":hover": {
				today: {
					// when today cell is hovered
				}
			},
			shadowSelectedDay: {
				background: 'violet',
			},
			selectedDay: {
				background: 'forestGreen',
			},
			disabled: {

			},
			today: {
				border: '1px solid gold',
			},
			prevMonthCell: {
				// background: 'mocasson',
			},
			nextMonthCell: {
				background: 'mediumOrchid',
			}
		}
	}
},`

export const datePanelStyleExample = `<DatePicker {...{
	style: {
		panel: {
			picker: {
				${datePanel}
			},
			footer: {
				now: {
// "Today" button
					color: "red",
					":hover": {

					},
					":disabled": {

					},
				}
			}
		}
	}
}} />`

export const dateTimePanelStyleExample = `<DateTimePicker {...{
	style: {
		panel: {
			picker: {
				date: {
					${datePanel}
				},
				time: {
					${timePicker}
					${timeHeader}
				}
			},
			footer: {
				now: {
// 'Now' button
					":hover": {

					},
					":disabled": {

					},
				},
				mode: {
// 'Select time / Select Date' - button
					":hover": {

					},
					":disabled": {

					},
				},
				ok: {
// 'Ok' button
					":hover": {

					},
					":disabled": {

					},
				}
			}
		}
	}
}} />`
