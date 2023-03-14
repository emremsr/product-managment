<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="container-fluid bg-success fixed-bottom mt-5">
      <div class="row">
        <div class="col-md-6 text-white">
          <strong class="text-white">ascatu GmbH</strong> | emremisirlioglu
        </div>
        <div class="col-md-6 d-flex flex-column flex-lg-row p-1">
          <div class="pl-1">
            <strong class="text-white">Purchase Amount : </strong>
            <span class="badge badge-danger">
              {{ getTradeResult.purchase | currency }}
            </span>
          </div>
          <div class="pl-1">
            <strong class="text-white">Sales Amount : </strong>
            <span class="badge badge-warning text-white">
              {{ getTradeResult.sale | currency }}
            </span>
          </div>
          <div class="pl-1">
            <strong class="text-white">Balance : </strong>
            <span class="badge badge-primary">
              {{ getTradeResult.balance | currency }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getTradeResult"]),
};
</script>
