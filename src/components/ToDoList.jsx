import React from "react"
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {

    constructor() {
        super()
        this.state = {
            items: [],
            inputValue: ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    // handleDeleteItem = (deletedItem) => {
    //     this.setState({
    //         items: this.state.items.filter(item.id !== deletedItem.id)
    //     })
    // }

    handleAddItem = () => {

        const newItem = {
            id: uuidv4(),
            name: this.state.inputValue,
            complete: false
        }

        this.setState({
            items: [...this.state.items, newItem],
            inputValue: ""
        })
    }

    render() {

        console.log("ITEMS: ", this.state.items)

        return (
            <div>
                <>
                    <input type="text" placeholder="add to do" onChange={this.handleInputChange} value={this.state.inputValue
                    }/>
                    <button onClick={this.handleAddItem}>Add</button>
                </>
                <ul>
                    {
                        this.state.items.map(item => {
                            return <ToDoItem toDoItem={item} />
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default ToDoList