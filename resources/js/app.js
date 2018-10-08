
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
const app = new Vue({
    el: '#app',
    data: {
        todos:[],
        new_todo: '',
    },
    methods:{
        fetchTodos: function() { //axios.getでtodoリストを取得しています
            axios.get('/api/get').then((res) => {
                this.todos = res.data //取得したtodoリストをtodosに格納
            })
        },

        addTodo: function(){
            axios.post('/api/add', {
                title: this.new_todo
            }).then((res) => {
                this.new_todo = '';
                this.todos = res.data;
            })
        },

        delTodo: function(task_id){
            axios.post('/api/del', {
                id: task_id
            }).then((res) => {
                this.todos = res.data;
            })
        }
    },
    created(){
        this.fetchTodos();
    },
});
