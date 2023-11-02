const InputEmail = (props) => {

    return(
        <div>
            <input type="text" onChange={props.ChangeInput}  value = {props.Value}/><br/>
            <button onClick={props.ClickButton}>Submit</button>
        </div>
    )
}

export default InputEmail;