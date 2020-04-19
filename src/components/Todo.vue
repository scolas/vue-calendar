<template>


      <!--    <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn @click="newDeleteEvent(selectedEvent.id)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <form v-if="currentlyEditing !== selectedEvent.id">
                  {{selectedEvent.details}}
              </form>
              <form v-else>
                  <textarea-autosize
                  v-model="selectedEvent.details"
                  type="text"
                  style="width:100%"
                  :min-height="100"
                  placeholder="add note">
                  </textarea-autosize>
              </form>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">Close</v-btn>
                <v-btn text v-if="currentlyEditing !== selectedEvent.id"
                 @click.prevent="editEvent(selectedEvent)">Edit</v-btn>              
                <v-btn text v-else @click.prevent="updateNewEvent(selectedEvent)">Save</v-btn> 
            </v-card-actions>
          </v-card>-->
    
            
        <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar dark>
              <v-btn>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-toolbar-title ></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-spacer></v-spacer>
            <div><h1>Todo component</h1></div>
            <v-spacer></v-spacer>
            <v-container>
                <v-form >
                    <v-text-field  type="text" label="event name (required)"></v-text-field>
                    <v-text-field type="text" label="details"></v-text-field>

                </v-form>
            </v-container>
        </v-card>
    
</template>
<script>
export default {
    
};
</script>