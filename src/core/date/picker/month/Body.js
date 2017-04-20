import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import { range, extendObject, omit } from '../../../common/utils'

const ROW = 4
const COL = 3

function chooseMonth(month) {
  const next = this.state.value.clone()
  next.month(month)
  this.setAndSelectValue(next)
}

function getTodayTime(value) {
  const today = moment();
  today.locale(value.locale()).utcOffset(value.utcOffset());
  return today;
}

class MonthTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: props.shadowValue,
        }
    }
    render() {
        const { value } = this.state
        const today = getTodayTime(value)
        const currentMonth = value.month()
        const { prefixCls, } = this.props

        const monthsEls = months(value).map((month, index) => {
            const tds = month.map(monthData => {
                const disabled = isDisabled(value, this.props)
                const style = getStyles()
                const cellEl = (<a className={ `${prefixCls}-month`}>{ monthData.content }</a>)
                const cellProps = {
                    role: "gridcell",
                    key: monthData.value,
                    onClick: disabled ? null : chooseMonth.bind(this, monthData.value),
                    title: monthData.title,
                    // className: classnames(classNameMap),
                }
                return (<td {...cellProps}>{cellEl}</td>)
            })
            return (<tr key={index} role="row">{tds}</tr>)
        })

        return (
            <table className={`${prefixCls}-table`} cellSpacing="0" role="grid">
                <tbody className={`${prefixCls}-tbody`}>{monthsEls}</tbody>
            </table>
        )
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.shadowValue.isSame(this.state.value)) {
            this.setState({ value: nextProps.shadowValue})
        }
    }

    setAndSelectValue(value) {
        this.setState({ value }, () => {
            this.props.onShadowValueChange(value)
            this.props.onChangeMode('day')
        })
    }
}
function isDisabled(value, disabledDate) {
    return false
    // if (disabledDate) {
    //     const testValue = value.clone()
    //     testValue.month(monthData.value);
    //     disabled = disabledDate(testValue);
    // }
}
function getStyles() {
    return {}
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
    //TODO: refactoring is needed below
    range(ROW).map( (rowIndex) => {
        months[rowIndex] = []

        // return range(COL).reduce( () => {}, months[rowIndex])
        range(COL).map( (colIndex) => {
            const index = COL * rowIndex + colIndex
            current.month(index)
            months[rowIndex][colIndex] = {
              value: index,
              content: localeData.monthsShort(current),
              title: localeData.monthsShort(current),
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
