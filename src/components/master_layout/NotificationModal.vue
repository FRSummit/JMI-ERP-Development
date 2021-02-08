<template>
  <div id="notification-modal" class="notification-modal hide">
    <div class="notification-modal-triangle-sec">
      <span class="notification-tri-icon">
        <i class="fas fa-caret-up"></i>
      </span>
    </div>
    <div class="notification-inner-sec">
      <p class="notification-txt">Notifications</p>
      <div
        id="notification-progressbar"
        class="notification-progressbar"
        v-if="progress"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div class="notification-modal-inner">
        <a
          href="www.google.com"
          class="notification"
          v-for="(notification, i) in notification"
          :key="i"
        >
          <div class="notification-title-desc">
            <img
              src="../../assets/icons/bell_icon.svg"
              alt="user-icon"
              class="notification-icon"
            />
            <p class="notification-title">{{ notification.title }}</p>
          </div>
          <p class="notification-description">{{ notification.description }}</p>
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
      notification: [],
      progress: true,
    };
  },
  created() {
    service.getAllNoificationList().then((res) => {
      this.notification = res.data;
      this.progress = false;
    });
  },
};
</script>

<style scoped>
@-moz-document url-prefix() {
  .notification-inner-sec {
    overflow-y: scroll;
    scrollbar-color: #45a5ff #c9c9c9;
    scrollbar-width: thin;
  }
}
</style>