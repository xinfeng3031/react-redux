import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // 提供全局唯一的状态存储方法,来自redux

import Counter from './components/Counter'; //引入Counter组件

//创建reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
      case 'INCREASE':
        return state + 1
      default:
        return state
  }
}

const store = createStore(reducer);

//render方法
const render = () => ReactDOM.render(
  <div>
    <Counter 
        counter={store.getState()}
        increase={() => store.dispatch({ type: 'INCREASE' })}
    />
  </div>,
  document.getElementById('root')
)


//初始化渲染页面
render();

let i = 0;
//store提供监听方法
store.subscribe(() => {
  console.log(`${ i++ }监听到我改变了,state: ${ store.getState() }`)
  render();
});
