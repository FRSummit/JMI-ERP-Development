<template>
    <div id="profile-details-section" class="profile-details-section">
        Customer Details section
        <BasicInfo />
        <BusinessInfo />
        <AccountInfo />
        
    </div>
</template>

<script>
import BasicInfo from './BasicInfo/BasicInfo'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import AccountInfo from './AccountInfo/AccountInfo'

export default {
    components: {
        BasicInfo,
        BusinessInfo,
        AccountInfo
    }
}
</script>

<style lang="less" scoped>
@import url("./ProfileDetailsSection.less");
</style>