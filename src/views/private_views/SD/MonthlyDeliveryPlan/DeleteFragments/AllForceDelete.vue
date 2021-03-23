<template>
  <div id="all-force-remove" class="all-force-remove">
    <div class="confirmation-alert-popup-inner">
      <span class="popup-icon"><i class="fas fa-trash-alt"></i></span>
      <p class="alert-text">Are you sure?</p>
      <p class="alert-desc">You want to delete the plan.</p>
      <span class="divider"></span>
      <div class="confirmation-submit-section">
        <div class="confirm-btn-section">
          <span @click="cancelFromPopup">Cancel</span>
        </div>
        <div class="cancel-btn-section">
          <span @click="confirmFromPopup">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        cancelFromPopup() {
            this.$emit('remove_all_area_cancel_click')
        },
        confirmFromPopup() {
            this.$emit('remove_all_area_confirm_click')
        }
    }
};
</script>

<style lang="less" scoped>
#all-force-remove.all-force-remove {
  position: fixed;
  left: calc((100vw / 2) - 200px);
  // background   : #001223;
  z-index: 9999;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgb(0 18 35 / 86%);

  .confirmation-alert-popup-inner {
    padding: 20px;
    text-align: center;
    width: 400px;
    background: #ffffff;
    position: absolute;
    top: calc((100vh / 2) - 100px);
    left: calc((100vw / 2) - 200px);
    opacity: 1;
    z-index: 9999;
    border-radius: 2px;

    span.popup-icon {
      margin-bottom: 20px;
      display: block;

      svg {
        color: #c11616;
        width: 24px;
        height: 28px;
      }
    }

    .alert-text {
      font-size: 24px;
      margin: 0;
      line-height: 1;
      margin-bottom: 10px;
      display: block;
      color: #c11616;
    }

    .alert-desc {
      font-size: 20px;
      margin: 0;
      line-height: 1;
      margin-bottom: 30px;
      display: block;
      color: #36454f;
    }

    span.divider {
      background: #c11616;
      width: 100%;
      height: 1px;
      display: block;
      margin-bottom: 10px;
      display: block;
    }

    .confirmation-submit-section {
      text-transform: uppercase;

      .confirm-btn-section {
        display: inline-block;
        width: 50%;

        span {
          outline: 0;
          cursor: pointer;
          color: #36454f;
        }
      }

      .cancel-btn-section {
        display: inline-block;
        width: 50%;

        span {
          outline: 0;
          cursor: pointer;
          color: #c11616;
        }
      }
    }
  }
}
</style>