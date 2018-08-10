<template>
  <q-page>
    <div class="row justify-center">

    <!-- FIlter -->
    <div class="col-md-4 offset-md-8 q-mt-xl">
      <q-btn-toggle
        v-model="filter"
        toggle-color="primary"
        :options="[
          {label: 'All', value: 'all'},
          {label: 'Done', value: 'done'},
          {label: 'Undone', value: 'undone'}
        ]"
      />
    </div>

    <!-- input -->
    <div class="col-md-8 q-pa-xl">
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


    <!-- list todo -->
      <q-list 
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
      todo: "",
      filter: "all"
    };
  },
  methods: {
    submit() {
      this.$store.state.todos.unshift({ text: this.todo, done: false });
      return (this.todo = "");
    },
    deleteTodo(index) {
      return this.$store.state.todos.splice(index, 1);
    },
    done(val, index) {
      this.todoStorage[index].done = !this.todoStorage[index].done;
    }
  },
  computed: {
    todoStorage() {
      switch (this.filter) {
        case "all":
          return this.$store.getters.todoAll;
        case "done":
          return this.$store.getters.todoDone;
        case "undone":
          return this.$store.getters.todoUndone;
        default:
      }
    }
  },
  watch: {
    todoStorage: {
      handler: function(val, oldVal) {},
      deep: true
    }
  }
};
</script>

<style scoped>
</style>
