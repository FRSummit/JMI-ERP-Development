<template>
  <div id="chat-modal" class="chat-modal hide">
    <div class="chat-modal-triangle-sec">
      <span class="chat-tri-icon">
        <i class="fas fa-caret-up"></i>
      </span>
    </div>
    <div class="chat-inner-sec">
      <div class="title-section">
        <div class="title-section-inner">
          <p class="chat-txt">Conversations</p>
        </div>
      </div>
      <div id="chat-progressbar" class="chat-progressbar" v-if="progress">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div class="all-chat-section">
        <div class="all-chat-section-inner">
          <p>All Conversations</p>
          <span><i class="zmdi zmdi-plus"></i></span>
        </div>
      </div>
      <div class="chat-modal-section" v-for="(chat, i) in chat" :key="i">
        <div class="chat-modal-section-inner">
          <div class="chat-icon-title-description-section">
            <div class="chat-icon-title-description-section-inner">
              <div class="icon-section">
                <div class="icon-section-inner">
                  <span><i class="zmdi zmdi-bike"></i></span>
                </div>
              </div>
              <div class="title-description-section">
                <div class="title-description-section-inner">
                  <div class="title">
                    <p>{{ chat.title }}</p>
                  </div>
                  <div class="description">
                    <p>{{ chat.description }}</p>
                  </div>
                </div>
              </div>
              <div class="time-section">
                <div class="time-section-inner">
                  <span>Just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="show-more-section">
        <div class="show-more-section-inner">
          <p>Show More</p>
        </div>
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