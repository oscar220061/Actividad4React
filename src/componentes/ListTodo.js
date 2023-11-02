const ListTodo = ({Todos, setTodos}) => {
const estilo1 ={backgroundColor: "red"}
const estilo2 ={backgroundColor: "green"}
    return (
        <div>
          <ul>
            {Todos.map(todo =>
              <li key={todo.id}>
              {todo.name}
              <button onClick={() => {
                let index = Todos.indexOf(todo)
                Todos.splice(index, 1) 
                setTodos([...Todos])
              }}>
              Eliminar</button>
              
              <button onClick={() => {
                let indice = Todos.indexOf(todo); 
                
                console.log(indice)
                const UpdateTodos = Todos.map((todo) => {
                  if(todo.id===indice+1){
                    return{...todo, isCompleted:true};
                  }
                  return todo;
                }
                );
                setTodos(UpdateTodos)
                console.log(UpdateTodos);
              }}>Actualizar</button>
              
              {todo.isCompleted ? <span style={estilo2}> Hecho </span> : <span style={estilo1}> Pendiente </span>}
          </li>
      )}
        </ul>
       </div>
    )
}

export default ListTodo;