import React from 'react'

class ToDoItem extends React.Component {

    constructor(props)  {
        super(props)
    }

    render() {

        return (
            <div>
                {/* checkbox */}
                {this.props.toDoItem.name}
                {/* delete button */}
            </div>
        )
    }
}

export default ToDoItem