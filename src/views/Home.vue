<template>
  <q-page>
    <div class="row">
      <div class="col-xs-12 col-8-md offset-2-md q-pa-xl">
          <q-field
          icon="add_circle_outline"
          >
            <q-input 
            @keyup.enter="submit()" 
            float-label="Add your list" 
            :value="todo" 
            @change="val => todo = val"
             />
          </q-field>
          
          <q-list 
            class="q-mt-sm" 
            highlight
            no-border	
          >
            <q-list-header>Recent todo lists</q-list-header>
            <template v-for="(value, index) in todoStorage">
              <q-item v-if="value.done" :key="index">
                <q-item-side left>
                  <q-btn flat color="secondary" round icon="check_circle" @click="done(value.text, index)"></q-btn>
                </q-item-side>
                <q-item-main disabled><strike>{{value.text}}</strike></q-item-main>
                <q-item-side right>
                  <q-btn flat round icon="highlight_off" @click="deleteTodo(index)"></q-btn>
                </q-item-side>
              </q-item>

              <q-item v-else :key="index">
                <q-item-side left>
                  <q-btn flat round icon="check_circle" @click="done(value.text, index)"></q-btn>
                </q-item-side>
                <q-item-main :label="value.text" />
                <q-item-side right>
                  <q-btn flat round icon="highlight_off" @click="deleteTodo(index)"></q-btn>
                </q-item-side>
              </q-item>
            </template>
          </q-list>
      </div>
    </div>
    
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    submit() {
      this.$store.state.todos.push({ text: this.todo, done: false });
      console.log(this.$store.state.todos);

      return (this.todo = "");
    },
    deleteTodo(index) {
      return this.$store.state.todos.splice(index, 1);
    },
    done: function(val, index) {
      return (this.$store.state.todos[index].done = !this.$store.state.todos[index].done);
    }
  },
  computed: {
    todoStorage() {
      return this.$store.getters.todoStorage;
    }
  }
};
</script>

<style scoped>
</style>
