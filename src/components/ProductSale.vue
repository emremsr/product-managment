<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12 offset-lg-3 pt-3 card mt-2 shadow">
          <div class="card-body">
            <h3>Product Sales</h3>
            <hr />
            <div class="form-group">
              <label>Name of the Product</label>
              <select
                class="form-control"
                v-model="selectedProduct"
                @change="productSelected"
              >
                <option
                  :disabled="product.count == 0"
                  :value="product.key"
                  v-for="(product, index) in getProducts"
                  :key="index"
                >
                  {{ product.title }}
                </option>
              </select>
            </div>
            <transition name="fade" mode="out-in">
              <div
                class="card mb-2 border border-danger"
                v-if="product !== null"
              >
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 text-center">
                      <div class="mb-3">
                        <span class="badge badge-info mr-1"
                          >Stock : {{ product.count }}</span
                        >
                        <span class="badge badge-primary"
                          >Price : {{ product.price | currency }}
                        </span>
                      </div>
                      <p class="border border-warning p-2 text-secondary">
                        {{ product.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <div class="form-group">
              <label>Piece</label>
              <input
                v-model="product_count"
                type="text"
                class="form-control"
                placeholder="Enter the number of products..."
              />
            </div>
            <hr />
            <button @click="save" class="btn btn-danger">Sell Product</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductManagmentProductSale",
  data() {
    return {
      selectedProduct: null,
      product: null,
      product_count: null,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
  },

  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      let product = {
        key: this.selectedProduct,
        count: this.product_count,
      };
      this.$store.dispatch("sellProduct", product);
    },
  },
};
</script>

<style lang="scss" scoped></style>
