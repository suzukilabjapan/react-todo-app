import React, { Component } from 'react';
 
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      todo: [
        {title:'js覚える'},
        {title:'jQuery覚える'},
        {title:'ES2015覚える'},
        {title:'React覚える'}
      ]
    };
    this.addTodo = this.addTodo.bind(this);
  }

  //新規追加
  addTodo(){
    //追加
    this.state.todo.push({
      title: this.refs.newText.value
    });
    //保存
    this.setState({
      todo: this.state.todo
    });
    //初期化
    this.refs.newText.value='';
  }

  //削除機能
  deleteTodo(i){
    //削除
    this.state.todo.splice(i,1);
    //保存
    this.setState({
      todo: this.state.todo
    });
  }
  
  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <ul>
          {this.state.todo.map( (todo,i) => {
              return <li key={i}> <input type="button" value="x" 
                                         onClick={() => this.deleteTodo(i)}/> {todo.title} </li>
          })}
        </ul>
        <input type ="text" ref="newText" />
        <input type ="button" value="追加" onClick={this.addTodo} />
      </div>
    );
  }
}
 
export default App;
 