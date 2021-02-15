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
                            <select title="Status" class="selectpicker" v-model="selectedStatus" @change="onChange()">
                                <option>Active</option>
                                <option>Passive</option>
                            </select>
                        </div>
                    </div>
                    <div class="core-section">
                        <span class="core">ID: {{ person.id }}</span>
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
                            <p class="name">{{ person.name ? person.name : "Not Found" }}<span class="icon"><i class="zmdi zmdi-star-circle"></i></span></p>
                            <p class="designation"><span class="title">{{person.designation ? person.designation : "Default Designation"}}</span><span class="department">{{ advisor.specialization }}</span></p>
                        </div>
                    </div>
                    <div class="profile-details-section">
                        <div class="profile-details-section-inner">
                            <p class="details">{{ person.address ? person.address : "Dummy: Cardiovascular / Thoracic Surgery Apollo Hospital Dhaka Bangladesh" }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mailing-section">
                <div class="mailing-section-inner">
                    <p class="phone"><span class="icon"><i class="zmdi zmdi-phone-in-talk"></i></span>{{ person.phone ? person.phone : "Not found" }}</p>
                    <p class="email"><span class="icon"><i class="zmdi zmdi-email"></i></span>{{ person.email ? person.email : "Not found" }}</p>
                </div>
            </div>
            <div class="bio-section">
                <div class="bio-section-inner">
                    <div class="title">
                        <span>Bio</span>
                    </div>
                    <div class="description">
                        <span>{{ person.bio ? person.bio : "Dummy: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seda diam nonumy eirmod tempor invidunt ut the sea labore et dolorae magna aliquyam erat, sed diam voluptua. At vero eos et accusam eta justo duo diam to dolores et ea rebum. Stet clita kasd gubergren, no and Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seda diam nonumy eirmod tempor invidunt ut the sea labore et dolorae magna aliquyam erat, sed diam voluptua. At vero eos et accusam eta justo duo diam to dolores et ea rebum. Stet clita kasd gubergren, no" }}</span>
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
  props: ["person", "advisor"],
  components: {},
  data() {
    return {
        selectedStatus: null,
    };
  },
  created() {},
  mounted() {
      this.selectedStatus = this.person.status === "1" ? 'Active' : 'Not Active'
  },
  methods: {},
//   watch: {
//       profile: () => {
//       this.selectedStatus = this.profile.status === 1 ? 'Active' : 'Not Active'
//     },
//   }
};
</script>

<style lang="less" scoped>
@import url("./LeftProfileSection.less");
</style>