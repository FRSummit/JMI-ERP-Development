<template>
  <div id="doctors-profile-details-section" class="doctors-profile-details-section">
      <div class="profile-details-section-inner">
            <div class="details-tab-section">
                <div class="details-tab-section-inner">
                    <b-tabs class="mt-3 profile-details-tabs" style="display: block; overflow: hidden; height: auto;">
                        <b-tab class="b-tab" title="Basic" active>
                            <div class="basic-tab">
                                <div class="basic-tab-inner">
                                    Basic
                                </div>
                            </div>
                        </b-tab>
                        <b-tab class="b-tab" title="Institution">
                            <div class="institution-tab">
                                <div class="institution-tab-inner">
                                    Institution
                                </div>
                            </div>
                        </b-tab>
                        <b-tab class="b-tab" title="Chambers">
                            <div class="chambers-tab">
                                <div class="chambers-tab-inner">
                                    Chambers
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
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
@import url("./DetailsSection.less");
</style>