import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            title: '',
            createdAt: '',
            body: '',
            titleMaxLength: 50,
        }

        this.onDateChangeHandler = this.onDateChangeHandler.bind(this);
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onDateChangeHandler(event){
        this.setState(() => {
            return {
                createdAt: event.target.value
            }
        });
    }

    onTitleChangeHandler(event){
        this.setState(() => {
            return {
                title: event.target.value,
            }
        })
    }

    onBodyChangeHandler(event){
        this.setState(() => {
            return{
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state)
    }


    render() {
        return(
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa Karakter: {this.state.titleMaxLength - this.state.title.length}</p>
                <input type="text" placeholder="title" value={this.state.title} onChange={this.onTitleChangeHandler} maxLength={this.state.titleMaxLength}/>
                <p value={this.state.createdAt} onChange={this.onDateChangeHandler}></p>
                <textarea placeholder="body" rows='10' value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}


export default NoteInput;