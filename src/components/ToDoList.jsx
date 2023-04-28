import React from "react"
import { v4 as uuidv4 } from 'uuid';

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
                    <input type="text" placeholder="add to do" onChange={this.handleInputChange}/>
                    <button onClick={this.handleAddItem}>Add</button>
                </>
                {/* <ul>
                    {

                    }
                </ul> */}
            </div>

        )
    }
}

export default ToDoList