<template>
  <div>
    <input class="input input-bordered input-lg w-full" v-model="searchKeyword" @input="search" placeholder="Search for products, categories, or subcategories" />
    <div v-if="searchResult.products.length > 0">
      <ul class="menu xl:menu-horizontal lg:min-w-max bg-base-100 rounded-box mt-2" >

        <li>
          <a>Produkte</a>
          <ul>
            <li v-for="product in searchResult.products" :key="product.slug">{{ product.name }}</li>
          </ul>
        </li>

        <li>
          <a>Kategorien</a>
          <ul>
            <li v-for="category in searchResult.categories" :key="category.slug">
              {{ category.name }}

              <a v-if="category.products.length > 0">Produkte</a>
              <ul v-if="category.products.length > 0">
                <li v-for="product in category.products" :key="product.slug">{{ product.name }}</li>
              </ul>

              <a v-if="category.subcategories.length > 0">Subkategorien</a>
              <ul v-if="category.subcategories.length > 0">
                <li v-for="subcategory in category.products" :key="subcategory.slug">
                  {{ subcategory.name }}

                  <a v-if="subcategory.products.length > 0">Produkte</a>
                  <ul v-if="subcategory.products.length > 0">
                    <li v-for="product in category.products" :key="product.slug">{{ product.name }}</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <!-- <h3>Produkte</h3> -->
      </ul>
    </div>
    <div v-if="searchResult.categories.length > 0">
      <h3>Categories</h3>
      <ul>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: '',
      searchResult: {
        products: [],
        categories: [],
      },
    };
  },
  computed: {
    subcategoriesWithProducts() {
      return this.allSubcategories.map((subcategory) => ({
        ...subcategory,
        products: this.getProductsInSubcategory(subcategory.slug),
      }));
    },
  },
  methods: {
    search() {
      // Clear previous results
      this.searchResult = {
        products: [],
        categories: [],
      };

      // Search in products
      this.searchProducts();

      // Search in categories
      this.searchCategories();

      // Search in subcategories
      this.searchSubcategories();
    },
    searchProducts() {
      this.searchResult.products = this.allProducts.filter((product) =>
        this.productContainsKeyword(product, this.searchKeyword)
      );
    },
    searchCategories() {
      this.searchResult.categories = this.allCategories.filter((category) =>
        this.categoryContainsKeyword(category, this.searchKeyword)
      );
    },
    searchSubcategories() {
      this.searchResult.categories.forEach((category) => {
        category.subcategories = this.subcategoriesWithProducts.filter((subcategory) =>
          this.categoryContainsKeyword(subcategory, this.searchKeyword)
        );
      });
    },
    productContainsKeyword(product, keyword) {
      // Customize this function to search in product properties
      return (
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.description.toLowerCase().includes(keyword.toLowerCase())
        // Add more properties as needed
      );
    },
    categoryContainsKeyword(category, keyword) {
      // Customize this function to search in category properties
      return category.name.toLowerCase().includes(keyword.toLowerCase());
    },
    getProductsInSubcategory(subcategoryId) {
      // Customize this function to get products in a subcategory
      return this.allProducts.filter((product) => product.account === subcategoryId);
    },
  },
};
</script>
