const ListTodo = ({Todos, setTodos}) => {
    return (
        <div>
          <ul>
            {Todos.map(todo =>
              <li key={todo.id}>
              {todo.name}
              <button onClick={() => {
                let index = Todos.indexOf(todo)
                Todos.splice(index, 1) //At position index, remove n=1 items
                setTodos([...Todos])
              }}>
              Eliminar</button>

              <button onClick={() => {
                let indice = Todos.indexOf(todo);
                
                console.log(indice)
                const UpdateTodos = Todos.map((todo) => {
                  
                  if(true){
                    return({...todo, isCompleted:true});
                  }
                    
                  
                }
                );
                console.log(UpdateTodos);
              }}>Actualizar</button>
          </li>
      )}
        </ul>
       </div>
    )
}

export default ListTodo;