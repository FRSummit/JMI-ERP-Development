<template>
  <div id="create-new-sbu" class="create-new-sbu">
    <Heading :pathName="pathName" :routeName="routeName" />

    <v-card class="v-card">
      <v-tabs v-model="tab" color="deep-purple accent-4">
        <v-tab class="new-sbu-tab" v-for="item in items" :key="item">{{
          item
        }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="tab-container">
        <v-tab-item v-for="item in items" :key="item">
          <v-card color="basil" flat>
            <v-card v-if="item === 'Basic info'"><BasicInfoTab /></v-card>
            <v-card v-if="item === 'Advanced info'"><AdvancedInfoTab /></v-card>
            <v-card v-if="item === 'System Configuration'"
              ><SystemConfigurationTab
            /></v-card>
            <v-card v-if="item === 'Accounts Configuration'"
              ><AccountsConfigurationTab
            /></v-card>
            <v-card v-if="item === 'Report Configuration'"
              ><ReportConfigurationTab
            /></v-card>
            <v-card v-if="item === 'Custom Attributes'"
              ><CustomAttributesTab
            /></v-card>
            <v-card v-if="item === 'Sister Concern'"
              ><SisterConcernTab /></v-card>
            <!-- <v-card style="border-bottom: 2px solid #026cd1; flex-grow: 100;"></v-card> -->
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import Heading from "../../../../components/private_view_components/ADM/SBU/Heading-section";
import BasicInfoTab from "../../../../components/private_view_components/ADM/SBU/CreateNewSBU/BasicInfoTab";
import AdvancedInfoTab from "../../../../components/private_view_components/ADM/SBU/CreateNewSBU/AdvancedInfoTab";
import SystemConfigurationTab from "../../../../components/private_view_components/ADM/SBU/CreateNewSBU/SystemConfigurationTab";
import AccountsConfigurationTab from "../../../../components/private_view_components/ADM/SBU/CreateNewSBU/AccountsConfigurationTab";
import ReportConfigurationTab from "../../../../components/private_view_components/ADM/SBU/CreateNewSBU/ReportConfigurationTab";
import CustomAttributesTab from "../../../../components/private_view_components/ADM/SBU/CreateNewSBU/CustomAttributesTab";
import SisterConcernTab from "../../../../components/private_view_components/ADM/SBU/CreateNewSBU/SisterConcernTab";

export default {
  components: {
    Heading,
    BasicInfoTab,
    AdvancedInfoTab,
    SystemConfigurationTab,
    AccountsConfigurationTab,
    ReportConfigurationTab,
    CustomAttributesTab,
    SisterConcernTab,
  },
  data() {
    return {
      routeName: "Create New Strategic Business Unit (SBU)",
      parentPath: "Settings & Management",
      currentRoute: this.$route.name,
      pathName: null,
      tab: null,
      items: [
        "Basic info",
        "Advanced info",
        "System Configuration",
        "Accounts Configuration",
        "Report Configuration",
        "Custom Attributes",
        "Sister Concern",
        ""
      ],
    };
  },
  created() {
    this.$emit('routeName', this.$route.name);
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [
        { name: "Settings & Management" },
        { name: "SBU" },
        { name: "Add New" },
      ];
    },
  },
};
</script>

<style scoped>
</style>