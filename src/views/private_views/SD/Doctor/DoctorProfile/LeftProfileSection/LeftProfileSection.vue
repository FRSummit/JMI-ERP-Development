<template>
  <div id="doctors-profile-left-section" class="doctors-profile-left-section">
      <div class="profile-left-section-inner">
            <div class="status-core-row-section">
                <div class="status-core-row-section-inner">
                    <div class="status-section">
                        <div class="select-options">
                            <span class="status-color"></span>
                            <!-- <span class="right-icon"><i class="fas fa-chevron-right"></i></span> -->
                            <span class="down-icon"><i class="fas fa-chevron-down"></i></span>
                            <select title="Status" class="selectpicker" v-model="selectedDA" @change="onChange()">
                                <option>Active</option>
                                <option>Passive</option>
                            </select>
                        </div>
                    </div>
                    <div class="core-section">
                        <span class="core">Hardcore</span>
                    </div>
                </div>
            </div>
            <div class="profile-img-name-details-section">
                <div class="profile-img-name-details-inner">
                    <div class="profile-img-section">
                        <div class="profile-img-section-inner">
                            <img src="../../../../../../assets/icons/user.png" alt="">
                        </div>
                    </div>
                    <div class="profile-name-designation-section">
                        <div class="profile-name-designation-section-inner">
                            <p class="name">Dr Qumrul Hassan Miron<span class="icon"><i class="zmdi zmdi-star-circle"></i></span></p>
                            <p class="designation"><span class="title">Senior Consultant</span><span class="department">JMI-2231225</span></p>
                        </div>
                    </div>
                    <div class="profile-details-section">
                        <div class="profile-details-section-inner">
                            <p class="details">Cardiovascular / Thoracic Surgery Apollo Hospital Dhaka Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mailing-section">
                <div class="mailing-section-inner">
                    <p class="phone"><span class="icon"><i class="zmdi zmdi-phone-in-talk"></i></span>01682222222</p>
                    <p class="email"><span class="icon"><i class="zmdi zmdi-email"></i></span>dr.qumrul@apollo.bd</p>
                </div>
            </div>
            <div class="bio-section">
                <div class="bio-section-inner">
                    <div class="title">
                        <span>bio</span>
                    </div>
                    <div class="description">
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seda diam nonumy eirmod tempor invidunt ut the sea labore et dolorae magna aliquyam erat, sed diam voluptua. At vero eos et accusam eta justo duo diam to dolores et ea rebum. Stet clita kasd gubergren, no and Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seda diam nonumy eirmod tempor invidunt ut the sea labore et dolorae magna aliquyam erat, sed diam voluptua. At vero eos et accusam eta justo duo diam to dolores et ea rebum. Stet clita kasd gubergren, no</span>
                    </div>
                </div>
            </div>
            <div class="attachment-section">
                <div class="attachment-section-inner">
                    <div class="title">
                        <span>Attachment</span>
                    </div>
                    <div class="image-gallery">
                        <div class="image-gallery-inner">
                            <div class="images">
                                <img src="../../../../../../assets/images/lock_screen.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
@import url("./LeftProfileSection.less");
</style>