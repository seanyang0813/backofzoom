<template>
  <div class="flex flex-col h-screen">
    <div>
      <myHeader :roomNumber="room_number"/>   
    </div> 
    <main class="flex-1 overflow-y-auto" ref="messages">
      <div class="flex flex-col justify-center">         
        <message v-for="(message,index) in messages" :key="index" :message="message.message" :name="message.name"/> 
      </div>
    </main>
    <div>
      <chat @enter="submit"/>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue';
import Chat from './Chat.vue';
import Header from './Header.vue'
import io from "socket.io-client";
export default {
  props: ['username'],
  components: {
    message: Message,
    chat: Chat,
    myHeader: Header
  },
  name: 'Room',
  data: function() {
    return {
      name: "",
      room_number: this.$route.path.substring(1),
      messages: [],
      socket: null,
    }
  },
  mounted() {
    if (this.username != "") {
      this.name = this.username;
      //initialize the sockets
      this.socket = io("http://localhost:3000");
      this.socket.emit('join-room', this.room_number);
      this.socket.on("message-send", (chatMessage) => {
        this.messages.push({message: chatMessage.message, name: chatMessage.user})
      });
    } else {
      this.$emit("setId", this.room_number)
      this.$router.push("/");
    }
    
  },
  updated: function () {
    this.$nextTick(function () {
      const el =  this.$refs.messages;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    })
  },
  destroyed: function() {
    this.updateUsers();
  },
  methods: {
    submit(message) {
      console.log(message);
      this.messages.push({message: message, name: this.name})
      this.socket.emit('message', {room: this.room_number, user:this.name, message: message});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
