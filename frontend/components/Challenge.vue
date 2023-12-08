<!-- pages/index.vue -->
<template>
  <b-container class="d-flex justify-content-center align-items-center">
    <b-card style="width: 800px;" class='mt-5'>
      <b-card-body>
        <b-row align-v="end" class="mb-5">
          <b-col cols="6">
            <label for="categoriaSelect">Categoria:</label>
            <b-form-select
              id="categoriaSelect"
              v-model="selectedCategoria"
              :options="categorias"
              placeholder="Selecione uma categoria"
            ></b-form-select>
          </b-col>
          <b-col cols="6" >
            <b-button @click="loadDrinks(selectedCategoria)">Pesquisar</b-button>
          </b-col>
        </b-row>

        <b-table striped hover :items="drinks" :fields="fields" responsive sticky-header @row-clicked="openModal"  style="cursor: pointer"></b-table>
        <b-modal ref="drinkModal" hide-footer>
          <template #default="props">
            <b-container fluid>
                  <b-row class="text-center mb-3">
                    <b-col>
                      <b-img :src="selectedDrink.image" fluid alt="Imagem do Drink"></b-img>
                    </b-col>
                  </b-row>
                  <b-row class="text-center mb-1">
                    <b-col>
                      <b-strong>{{ selectedDrink.nome }}</b-strong>
                    </b-col>
                  </b-row>
                  <b-row class="text-center">
                    <b-col>
                      {{ selectedDrink.details }}
                    </b-col>
                  </b-row>
            </b-container>
          </template>
        </b-modal>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedCategoria: null,
      selectedDrink: null,
      categorias: [],
      drinks: [],
      fields: ['nome', 'categoria'],
    };
  },
   mounted() {
    this.loadCategorias();
    this.loadDrinks()
  },
  methods: {
    async loadCategorias() {
      try {
        const response = await axios.get(this.$config.baseUrl  + "/api/v1/categories");
        this.categorias = response.data.map(categoria => ({
          value: categoria.id,
          text: categoria.name,
        }));
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    },
    async loadDrinks() {
      console.log(this.selectedCategoria)
      try {
        let url = this.$config.baseUrl  + "/api/v1/drinks"
        if (this.selectedCategoria) {
          url += "?categoryId=" + this.selectedCategoria
        }
        const response = await axios.get(url);
        this.drinks = response.data.map(drink => ({
          id: drink.id,
          nome: drink.name,
          categoria: drink.category.name,
          details: drink.details,
          image: drink.image,
        }));
      } catch (error) {
        console.error('Erro ao carregar drinks:', error);
      }
    },
    openModal(item) {
      this.selectedDrink = item;
      console.log(this.selectedDrink)
      this.$refs.drinkModal.show();
    }
  },
};
</script>