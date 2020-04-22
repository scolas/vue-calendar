//state getters
//import axios from 'axios';

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo one'
        },
        {
            id: 2,
            title: 'Todo two'
        }
        
    ]
};

const getters = {
    allTodos: state => state.todos
};

const actions = {

};

//mutates the state
const mutations = {
    //take sate state.todos and set it to the ones that are passed in  
    //unshift helps place the new todo to the top of list
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo:(state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
}