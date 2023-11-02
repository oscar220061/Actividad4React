const InputEmail = (props) => {

    return(
        <form>
            <input type="text" onChange={props.ChangeInput}  value = {props.Value}/>
        </form>
    )
}

export default InputEmail;