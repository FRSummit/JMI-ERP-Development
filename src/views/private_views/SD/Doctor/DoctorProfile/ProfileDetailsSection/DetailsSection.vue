<template>
  <div id="doctors-profile-details-section" class="doctors-profile-details-section">
      <div class="profile-details-section-inner">
            <div class="details-tab-section">
                <div class="details-tab-section-inner">
                    <b-tabs class="mt-3 profile-details-tabs" style="display: block; overflow: hidden; height: auto;">
                        <b-tab class="b-tab" title="Basic" active>
                            <div class="basic-tab">
                                <div class="basic-tab-inner">
                                    <BasicInfo :person="person" :advisor="advisor" :family="family" />
                                </div>
                            </div>
                        </b-tab>
                        <!-- <b-tab class="b-tab" title="Institution">
                            <div class="institution-tab">
                                <div class="institution-tab-inner">
                                    <InstitutionInfo />
                                </div>
                            </div>
                        </b-tab> -->
                        <b-tab class="b-tab" title="Chambers">
                            <div class="chambers-tab">
                                <div class="chambers-tab-inner">
                                    <ChambersInfo :chamber="chamber" :chamber_location="chamber_location" />
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
// import InstitutionInfo from './InstitutionInfo/InstitutionInfo'
import ChambersInfo from './ChambersInfo/ChambersInfo'

export default {
  props: ["person", "advisor", "chamber", "chamber_location", "family"],
  components: {
      BasicInfo,
    //   InstitutionInfo,
      ChambersInfo
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
@import url("./DetailsSection.less");
</style>