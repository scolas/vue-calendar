<template>
  <v-app>
    <v-content>
      <todo/>
    </v-content>
  </v-app>
</template>

<script>
import Todo from '../../components/Todo.vue'
export default {
  name: 'Todo',
  components: {
    todo: Todo,
  },
  data: () => ({
    //
  })
};
</script>  
