<template>
  <div id="chat-modal" class="chat-modal hide">
    <div class="chat-modal-triangle-sec">
      <span class="chat-tri-icon">
        <i class="fas fa-caret-up"></i>
      </span>
    </div>
    <div class="chat-inner-sec">
      <p class="chat-txt">Messages</p>
      <div id="chat-progressbar" class="chat-progressbar" v-if="progress">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div class="chat-modal-inner">
        <a
          href="www.google.com"
          class="chat"
          v-for="(chat, i) in chat"
          :key="i"
        >
          <img
            src="../../assets/icons/user.png"
            alt="user-icon"
            class="chat-icon"
          />
          <!-- <span class="chat-icon">
            <i class="far fa-comment-alt"></i>
          </span> -->
          <div class="chat-title-desc">
            <p class="chat-title">{{ chat.title }}</p>
            <p class="chat-description">{{ chat.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ERPSidebarService from "../../service/ERPSidebarService";
const service = new ERPSidebarService();

export default {
  data() {
    return {
      chat: [],
      progress: true,
    };
  },
  created() {
    service.getAllChatList().then((res) => {
      this.chat = res.data;
      this.progress = false;
    });
  },
};
</script>

<style scoped>
@-moz-document url-prefix() {
  .chat-inner-sec {
    overflow-y: scroll;
    scrollbar-color: #45a5ff #c9c9c9;
    scrollbar-width: thin;
  }
}
</style>