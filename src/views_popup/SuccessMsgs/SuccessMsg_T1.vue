<template>
  <div
    class="modal-popup-section order-proceed-modal"
  >
    <div class="modal-popup-section-inner order-proceed-modal-inner">
      <span class="proceed-popup-icon"
        ><i class="zmdi zmdi-check-circle"></i
      ></span>
      <p class="popup-text">{{ title_ques }}</p>
      <p class="popup-desc">{{ desc_ques }}</p>
      <span class="divider"></span>
      <div class="popup-submit-section">
        <div class="popup-cancel-btn-section">
          <span @click="cancelDuePaymentConfirmationClickHandler">Cancel</span>
        </div>
        <div class="popup-confirm-btn-section">
          <span @click="confirmDuePaymentConfirmationClickHandler"
            >Confirm</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title_ques', 'desc_ques'],
    
}
</script>