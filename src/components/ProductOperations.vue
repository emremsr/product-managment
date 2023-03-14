<template>
  <div>
    <div class="container overflow-auto">
      <div class="row">
        <div class="col-md-6 col-12 offset-lg-3 pt-3 card mt-2 shadow">
          <div class="card-body">
            <h3>Product Transactions</h3>
            <hr />
            <div class="form-group">
              <label>Name of the Product</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter the product name..."
                v-model="product.title"
              />
            </div>
            <div class="form-group">
              <label>Piece</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter the number of products..."
                v-model="product.count"
              />
            </div>
            <div class="form-group">
              <label>Price</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter the product price..."
                v-model="product.price"
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                cols="30"
                rows="5"
                placeholder="Enter a description of the product..."
                class="form-control"
                v-model="product.description"
              ></textarea>
            </div>
            <hr />
            <button
              class="btn btn-primary mb-5"
              :disabled="saveEnable"
              @click="saveProduct"
            >
              Register Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductManagmentProductOperations",

  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
        saveButtonClicked: false,
      },
    };
  },

  methods: {
    saveProduct() {
      this.saveButtonClicked = true;
      this.$store.dispatch("saveProduct", this.product);
    },
  },

  computed: {
    saveEnable() {
      if (
        this.product.title.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0 &&
        this.product.description.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.product.title.length > 0 ||
        this.product.count > 0 ||
        this.product.price > 0 ||
        this.product.description.length > 0) &&
      !this.saveButtonClicked
    ) {
      if (confirm("There are unsaved values. Do you still want to go out?")) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style lang="scss" scoped></style>
