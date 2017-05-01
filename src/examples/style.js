
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

// eslint-disable-next-line no-unused-vars
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

export const timePanelStyleExample = `<TimePicker {...{
	style: {
		field: {
		},
		panel: {
			picker: {
				header: {
					headerBtn: {
						":hover": {

						},
					},
				},
				column: {
					entry: {
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
				},
				footer: {
					"ok": {
						":hover": {

						},
						":disabled": {

						},
					}
				},
			},
		},
	}
}} />`

export const datePanelStyleExample = `<DatePicker {...{
	style: {
		panel: {
			picker: {
				day: {
					header: {
						prevMonthBtn: {

							":hover": {

							}
						},
						nextMonthBtn: {

							":hover": {

							}
						},
						nextYearBtn: {

							":hover": {

							}
						},
						prevYearBtn: {

							":hover": {

							}
						},
						selectBtn: {

							":hover": {

							}
						}
					},
					body: {

						weekdayCell: {

						},
						dayCell: {

							":hover": {

							},
							shadowSelectedDay: {

							},
							selectedDay: {

							},
							disabled: {

							},
							today: {

							},
							prevMonthCell: {

							},
							nextMonthCell: {

							}
						}
					}
				},
			},
			footer: {
				now: {

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
					day: {
						header: {
							prevMonthBtn: {

								":hover": {

								}
							},
							nextMonthBtn: {

								":hover": {

								}
							},
							nextYearBtn: {

								":hover": {

								}
							},
							prevYearBtn: {

								":hover": {

								}
							},
							selectBtn: {

								":hover": {

								}
							}
						},
						body: {

							weekdayCell: {

							},
							dayCell: {

								":hover": {

								},
								shadowSelectedDay: {

								},
								selectedDay: {

								},
								disabled: {

								},
								today: {

								},
								prevMonthCell: {

								},
								nextMonthCell: {

								}
							}
						}
					},
				},
				time: {

				}
			},
			footer: {
				now: {

					":hover": {

					},
					":disabled": {

					},
				},
				mode: {
					":hover": {

					},
					":disabled": {

					},
				},
				ok: {
					":hover": {

					},
					":disabled": {

					},
				}
			}
		}
	}
}} />`


// const style = {
// 	"panel": {
// 		"picker": {
// 			"day": {
// 				"header": {
// 					"prevMonthBtn": {
//
// 						":hover": {
//
// 						}
// 					},
// 					"nextMonthBtn": {
//
// 						":hover": {
//
// 						}
// 					},
// 					"nextYearBtn": {
//
// 						":hover": {
//
// 						}
// 					},
// 					"prevYearBtn": {
//
// 						":hover": {
//
// 						}
// 					},
// 					"selectBtn": {
//
// 						":hover": {
//
// 						}
// 					}
// 				},
// 				"body": {
//
// 					"weekdayCell": {
//
// 					},
// 					"dayCell": {
//
// 						":hover": {
//
// 						},
// 						"shadowSelectedDay": {
//
// 						},
// 						"selectedDay": {
//
// 						},
// 						"disabled": {
//
// 						},
// 						"today": {
//
// 						},
// 						"prevMonthCell": {
//
// 						},
// 						"nextMonthCell": {
//
// 						}
// 					}
// 				}
// 			},
// 		},
// 		"footer": {
// 			"now": {
//
// 				":hover": {
//
// 				},
// 				":disabled": {
//
// 				},
// 			}
// 		}
// 	}
// }
//
// "picker": {
//
// 			"header": {
//
// 				"headerBtn": {
// 					...
// 					":hover": {
// 						...
// 					}
// 				}
// 			},
// 			"column": {
// 				...
// 				"entry": {
// 					...
// 					":hover": {
// 						...
// 					},
// 					":selected": {
// 						...
// 					},
// 					":disabled": {
// 						...
// 					}
// 				},
// 				":hours": {
// 					...
// 				},
// 				":minutes": {
// 					...
// 				},
// 				":seconds": {
// 					...
// 				}
// 			}
// 		},
// 		"footer": {
// 			...
// 			"now": {
// 				...
// 				":hover": {
// 					...
// 				},
// 				":disabled": {
// 					...
// 				},
// 			},
// 			"mode": {
// 				...
// 				":hover": {
// 					...
// 				},
// 				":disabled": {
// 					...
// 				},
// 			},
// 			"ok": {
// 				...
// 				":hover": {
// 					...
// 				},
// 				":disabled": {
// 					...
// 				},
// 			}
// 		}
/*
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
*/
