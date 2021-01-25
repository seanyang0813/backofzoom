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
      <transition v-if="pressedOnCooldown" name="fade">
          <center><img src="@/assets/timer-sand-empty.png"></center>
      </transition>
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
      onCooldown: false,
      pressedOnCooldown: false,
    }
  },
  mounted() {
    if (this.username != "") {
      this.name = this.username;
      //initialize the sockets
      this.socket = io("https://seanyang0813-backofzoom-backend.zeet.app");
      //console.log(this.socket);
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
  methods: {
    submit(message) {
      //console.log(message);
      if (!this.onCooldown) {
        this.messages.push({message: message, name: this.name})
        this.socket.emit('message', {room: this.room_number, user:this.name, message: message});
        this.onCooldown = true;
        setTimeout(() => { // users can send message every 0.5s, adjust accordingly!
          this.onCooldown = false;
          this.pressedOnCooldown = false;
        }, 500)
      } else {
        // you can add a warning here, be it a modal, message, alert, etc.
        // this.messages.push({message: "slow down!", name: ''}) <= this looked ugly because of the colon, I just added a cooldown icon ;)
        this.pressedOnCooldown = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s
}
.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0
}
</style>
