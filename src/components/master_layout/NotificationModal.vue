<template>
  <div id="notification-modal" class="notification-modal hide">
    <div class="notification-modal-triangle-sec">
      <span class="notification-tri-icon">
        <i class="fas fa-caret-up"></i>
      </span>
    </div>
    <div class="notification-inner-sec">
      <div class="title-text-section">
        <div class="title-text-section-inner">
          <p class="notification-txt">Notifications</p>
        </div>
      </div>

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
      <div class="notification-modal-section" v-for="(notification, i) in notification"
            :key="i">
        <div class="notification-modal-section-inner">
          <div class="notification-icon-title-description-section">
            <div class="notification-icon-title-description-section-inner">
              <div class="icon-section">
                <div class="icon-section-inner">
                  <span><i class="zmdi zmdi-bike"></i></span>
                </div>
              </div>
              <div class="title-description-section">
                <div class="title-description-section-inner">
                  <div class="title">
                    <p>{{ notification.title }}</p>
                  </div>
                  <div class="description">
                    <p>{{ notification.description }}</p>
                  </div>
                </div>
              </div>
              <div class="time-section">
                <div class="time-section-inner">
                  <span>Just now</span>
                </div>
              </div>
              <div class="attachment-section" v-if="i % 2 !== 0">
                <div class="attachment-section-inner">
                  <!-- <span @click="attachmentNotificationClick(notification)"><i class="zmdi zmdi-attachment"></i></span> -->
                  <span @click="pdfAttachmentNotificationClick(notification)"><i class="zmdi zmdi-collection-pdf"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="notification-submit-section" v-if="i % 2 === 0">
            <div class="notification-submit-section-inner">
              <div class="view-btn-section">
                <div class="view-btn-section-inner">
                  <span @click="viewNotificationClick(notification)">View</span>
                </div>
              </div>
              <div class="accept-btn-section">
                <div class="accept-btn-section-inner">
                  <span @click="AcceptNotificationClick(notification)">Accept</span>
                </div>
              </div>
            </div>
          </div>
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
  methods: {
    attachmentNotificationClick(notification) {
      console.log(notification)
    },
    pdfAttachmentNotificationClick(notification) {
      console.log(notification)
    },
    viewNotificationClick(notification) {
      console.log(notification)
    },
    AcceptNotificationClick(notification) {
      console.log(notification)
    },
  }
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