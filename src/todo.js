import React, { Component } from "react";
import Todoit from "./Todoit";
import "./todoList.css";

class Todo extends Component{
    constructor(props){
        super(props);

        this.state = {
            items:[]
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e){
        if(this._inputElement.value !== "" && this._inputElement.value !==" "){
            var newItem ={
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState)=>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value="";
        }
        e.preventDefault();
    }
    deleteItem(key){
        var fiItems = this.state.items.filter(function(item){
            return (item.key !==key)
        });
        this.setState({
            items:fiItems
        });
    }

    render(){
        return(
            <div className="todoMain">
                <div className="titl">
                    <div className="hh1"><h1>TODO</h1></div>
                </div>
                <div className = "header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Enter task">
                        </input>
                        <button type="submit">+</button>
                    </form>
                </div>
                <Todoit entries = {this.state.items}
                    delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default Todo;