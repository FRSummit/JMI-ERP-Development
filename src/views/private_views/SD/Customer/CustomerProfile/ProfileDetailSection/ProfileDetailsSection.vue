<template>
    <div id="customer-profile-details-section" class="customer-profile-details-section">
      <div class="profile-details-section-inner">
            <div class="details-tab-section">
                <div class="details-tab-section-inner">
                    <b-tabs class="mt-3 profile-details-tabs" style="display: block; overflow: hidden; height: auto;">
                        <b-tab class="b-tab" title="Basic Info" active>
                            <div class="basic-tab">
                                <div class="basic-tab-inner">
                                    <BasicInfo :person="person" :advisor="advisor" :family="family" />
                                </div>
                            </div>
                        </b-tab>
                        <b-tab class="b-tab" title="Business Info">
                            <div class="institution-tab">
                                <div class="institution-tab-inner">
                                    <BusinessInfo :person="person" />
                                </div>
                            </div>
                        </b-tab>
                        <b-tab class="b-tab" title="Account Info">
                            <div class="chambers-tab">
                                <div class="chambers-tab-inner">
                                    <AccountInfo />
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
import BasicInfo from './BasicInfo/BasicInfo'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import AccountInfo from './AccountInfo/AccountInfo'

export default {
  props: ["person", "advisor", "chamber", "chamber_location", "family"],
  components: {
      BasicInfo,
      BusinessInfo,
      AccountInfo
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url("./ProfileDetailsSection.less");
</style>