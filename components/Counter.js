import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    //从组件的props属性中导入方法和变量
    const { increase, counter } = this.props;
    //渲染组件，包括1个数字，1个按钮
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increase}>+</button>
      </p>
    )
  }
}

//限制组件的props安全
Counter.propTypes = {
  //increment必须为fucntion,且必须存在
  increase: PropTypes.func.isRequired,
  //counter必须为数字，且必须存在
  counter: PropTypes.number.isRequired
}

export default Counter
