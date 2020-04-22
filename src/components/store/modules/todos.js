//state getters
import axios from 'axios';

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
    async fetchTodos({ commit }){
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
       // console.log(response+""+response.data);
       commit('setTodos', response.data);
    },
    async addTodo({ commit }, title){
        //completed is the status
        console.log("add to b4 post");
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        console.log("todo added"+response.data);
        //commit a mutation/ response data has the new todo nad that will updte the list
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id){
        //this removes it from back end
        //commit removes it from User interface
        // in commit last part says filter and for each todo return where the todo id is not equal  to the id thats passed in 
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log("todo deleted");
        commit('removeTodo', id)
    }
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