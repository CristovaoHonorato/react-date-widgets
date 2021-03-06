import PropTypes from 'prop-types'
import React, { Component } from 'react'
import moment from 'moment'

import { range } from '../../../common/utils'

const ROW = 4
const COL = 3

const tableStyle = {
    tableLayout: 'fixed',
    width: '100%',
    height: '255px',
    borderCollapse: 'separate',
}

const cellStyle = {
    display: 'block',
    width: '46px',
    margin: '0 auto',
    color: '#666',
    borderRadius: '4px 4px',
    height: '36px',
    padding: '0',
    background: 'transparent',
    lineHeight: '36px',
    // textAlign: 'center',
}

function getTodayTime(value) {
    const today = moment()
    today.locale(value.locale()).utcOffset(value.utcOffset())
    return today
}

class MonthTable extends Component {
    render() {
        const { shadowValue } = this.props
        // const today = getTodayTime(value)
        // const currentMonth = value.month()

        const monthsEls = months(shadowValue).map((month, index) => {
            const tds = month.map(monthData => {
                const disabled = isDisabled(shadowValue, this.props)
                const style = getStyles()
                const cellEl = <a className={`month-cell`}>{monthData.text}</a>
                const cellProps = {
                    role: 'gridcell',
                    key: monthData.value,
                    onClick: disabled
                        ? null
                        : () => {
                              this.changeMonth(monthData.value)
                          },
                    title: monthData.text,
                    // style,
                    // className: classnames(classNameMap),
                }
                return <td {...cellProps}>{cellEl}</td>
            })
            return (
                <tr key={index} style={{ textAlign: 'center' }} role="row">
                    {tds}
                </tr>
            )
        })

        return (
            <table
                className={`month-table`}
                cellSpacing="0"
                role="grid"
                style={tableStyle}
            >
                <tbody className={`month-tbody`}>{monthsEls}</tbody>
            </table>
        )
    }

    changeMonth(month) {
        const next = this.props.shadowValue.clone().month(month)
        this.props.onShadowChange(next, 'day')
    }
}

function isDisabled(value, { minDate, maxDate }) {
    return (
        minDate &&
        maxDate &&
        (value.isBefore(minDate) || value.isAfter(maxDate))
    )
}
function getStyles() {
    return cellStyle
    // const classNameMap = {
    //     [`${prefixCls}-cell`]: 1,
    //     [`${prefixCls}-cell-disabled`]: disabled,
    //     [`${prefixCls}-selected-cell`]: monthData.value === currentMonth,
    //     [`${prefixCls}-current-cell`]: today.year() === value.year() &&
    //         monthData.value === today.month(),
    // };
}
function months(value) {
    const current = value.clone()
    const months = []
    const localeData = value.localeData()
    const base = []

    // range(ROW).reduce( (rowIndex, rowAcc) => {
    //     range(COL).reduce( (colIndex, colAcc) => {}, [])
    // }, [])
    //TODO: refactoring is needed below
    range(ROW).forEach(rowIndex => {
        months[rowIndex] = []

        // return range(COL).reduce( () => {}, months[rowIndex])
        range(COL).forEach(colIndex => {
            const index = COL * rowIndex + colIndex
            current.month(index)
            months[rowIndex][colIndex] = {
                value: index,
                text: localeData.monthsShort(current),
            }
        })
    })
    return months
}

MonthTable.defaultProps = {
    onSelect: () => {},
}

MonthTable.propTypes = {
    onSelect: PropTypes.func,
    cellRender: PropTypes.func,
    prefixCls: PropTypes.string,
    value: PropTypes.object,
}

export default MonthTable

//
// class MonthTable extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       value: props.value,
//     };
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if ('value' in nextProps) {
//       this.setState({
//         value: nextProps.value,
//       });
//     }
//   }
//
//   setAndSelectValue(value) {
//     this.setState({
//       value,
//     });
//     this.props.onSelect(value);
//   }
//
//   months() {
//     const value = this.state.value;
//     const current = value.clone();
//     const months = [];
//     const localeData = value.localeData();
//     let index = 0;
//     for (let rowIndex = 0; rowIndex < ROW; rowIndex++) {
//       months[rowIndex] = [];
//       for (let colIndex = 0; colIndex < COL; colIndex++) {
//         current.month(index);
//         const content = localeData.monthsShort(current);
//         months[rowIndex][colIndex] = {
//           value: index,
//           content,
//           title: content,
//         };
//         index++;
//       }
//     }
//     return months;
//   }
//
//   render() {
//     const props = this.props;
//     const value = this.state.value;
//     const today = getTodayTime(value);
//     const months = this.months();
//     const currentMonth = value.month();
//     const { prefixCls, locale, contentRender, cellRender } = props;
//     const monthsEls = months.map((month, index) => {
//       const tds = month.map(monthData => {
//         let disabled = false;
//         if (props.disabledDate) {
//           const testValue = value.clone();
//           testValue.month(monthData.value);
//           disabled = props.disabledDate(testValue);
//         }
//         const classNameMap = {
//           [`${prefixCls}-cell`]: 1,
//           [`${prefixCls}-cell-disabled`]: disabled,
//           [`${prefixCls}-selected-cell`]: monthData.value === currentMonth,
//           [`${prefixCls}-current-cell`]: today.year() === value.year() &&
//           monthData.value === today.month(),
//         };
//         let cellEl;
//         if (cellRender) {
//           const currentValue = value.clone();
//           currentValue.month(monthData.value);
//           cellEl = cellRender(currentValue, locale);
//         } else {
//           let content;
//           if (contentRender) {
//             const currentValue = value.clone();
//             currentValue.month(monthData.value);
//             content = contentRender(currentValue, locale);
//           } else {
//             content = monthData.content;
//           }
//           cellEl = (
//             <a className={`${prefixCls}-month`}>
//               {content}
//             </a>
//           );
//         }
//         return (
//           <td
//             role="gridcell"
//             key={monthData.value}
//             onClick={disabled ? null : chooseMonth.bind(this, monthData.value)}
//             title={monthData.title}
//             className={classnames(classNameMap)}
//           >
//             {cellEl}
//           </td>);
//       });
//       return (<tr key={index} role="row">{tds}</tr>);
//     });
//
//     return (
//       <table className={`${prefixCls}-table`} cellSpacing="0" role="grid">
//         <tbody className={`${prefixCls}-tbody`}>
//         {monthsEls}
//         </tbody>
//       </table>
//     );
//   }
// }
//
// MonthTable.defaultProps = {
//   onSelect: noop,
// };
// MonthTable.propTypes = {
//   onSelect: PropTypes.func,
//   cellRender: PropTypes.func,
//   prefixCls: PropTypes.string,
//   value: PropTypes.object,
// };
// export default MonthTable;
