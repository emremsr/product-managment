<template>
  <div>
    <div class="container ">
      <div class="row">
        <div class="col-12 mb-5 card mt-5 shadow">
          <div class="card-body">
            <h3>List of Products</h3>
            <hr />
            <table
              class="table table-hover table-striped  table-responsive"
              v-if="getProducts.length > 0"
            >
              <thead class="text-center">
                <th>ID</th>
                <th>Name of the Product</th>
                <th>Piece</th>
                <th>Price</th>
                <th>Description</th>
              </thead>
              <tbody>
                <tr v-for="(product, index) in getProducts" :key="index">
                  <td class="align-middle text-center">
                    <span class="badge badge-info"> {{ product.key }} </span>
                  </td>
                  <td class="align-middle text-center">{{ product.title }}</td>
                  <td
                    class="align-middle text-center"
                    :class="getCountClasses(product.count)"
                  >
                    {{ product.count }}
                  </td>
                  <td style="width: 120px">{{ product.price | currency }}</td>
                  <td class="align-middle">{{ product.description }}</td>
                </tr>
              </tbody>
            </table>
            <div class="alert alert-warning" v-else>
              <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
              <br />
              <small
                >Kayıt Eklemek için Ürün İşlemleri menüsünden
                yararlanabilirsiniz
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductManagmentProductList",

  methods: {
    getCountClasses(count) {
      return {
        "bg-danger text-white": count == 0 || count == null,
        "bg-success text-white": count > 0,
      };
    },
  },
  computed: { ...mapGetters(["getProducts"]) },
};
</script>
