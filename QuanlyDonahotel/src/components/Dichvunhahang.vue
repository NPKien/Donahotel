<template>
  <div>
    <div class="heading">Danh sách món ăn</div>
    <br><br>
    <div v-for="food in foods" :key="food._id" class="food-item">
      <div class="food-info">
        <div v-if="editMode === food._id">
          <input v-model="food.namefood" placeholder="Tên món ăn" class="edit-input" />
          <input v-model="food.price" placeholder="Giá tiền" type="number" class="edit-input" />
        </div>
        <div v-else>
          <span class="food-name">{{ food.namefood }}: </span>
          <span class="food-price">{{ food.price }}</span>
        </div>
      </div>
      <div class="button-group">
        <button @click="toggleEdit(food._id)" class="edit-button">
          {{ editMode === food._id ? 'Lưu' : 'Sửa' }}
        </button>
        <button @click="deleteFood(food._id)" class="delete-button">Xóa</button>
      </div>
    </div>

    <div class="heading">Thêm món ăn mới</div>
    <div class="new-food">
      <input v-model="newFood.namefood" placeholder="Tên món ăn" class="edit-input" />
      <input v-model="newFood.price" placeholder="Giá tiền" type="number" class="edit-input" />
      <button @click="addFood" class="add-button">Thêm</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      foods: [],
      editMode: null,
      newFood: {
        namefood: '',
        price: ''
      },
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },
  methods: {
    async fetchFoods() {
      try {
        const response = await axios.get(`${this.apiUrl}/food/all`);
        this.foods = response.data;
      } catch (error) {
        console.error('Lấy danh sách món ăn thất bại:', error);
      }
    },
    toggleEdit(id) {
      if (this.editMode === id) {
        this.saveFood(id);
      }
      this.editMode = this.editMode === id ? null : id;
    },
    async saveFood(id) {
      const food = this.foods.find(f => f._id === id);
      try {
        await axios.put(`${this.apiUrl}/food/${id}`, {
          namefood: food.namefood,
          price: food.price
        });
      } catch (error) {
        console.error('Cập nhật món ăn thất bại:', error);
      }
    },
    async deleteFood(id) {
      try {
        await axios.delete(`${this.apiUrl}/food/${id}`);
        this.foods = this.foods.filter(f => f._id !== id);
      } catch (error) {
        console.error('Xóa món ăn thất bại:', error);
      }
    },
    async addFood() {
      try {
        const response = await axios.post(`${this.apiUrl}/food/add`, this.newFood);
        this.foods.push(response.data);
        this.newFood = { namefood: '', price: '' };
      } catch (error) {
        console.error('Thêm món ăn thất bại:', error);
      }
    }
  },
  mounted() {
    this.fetchFoods();
  }
};
</script>

<style scoped>
.food-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.heading {
  font-size: 30px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0px;
}
.food-info {
  flex: 1;
}

.food-name {
  font-weight: bold;
}

.edit-input {
  width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 5px;
}

.button-group {
  display: flex;
  align-items: center;
}

.edit-button, .delete-button, .add-button {
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
}

.edit-button:hover, .delete-button:hover, .add-button:hover {
  background-color: #0056b3;
}

.new-food {
  margin-top: 20px;
}

.new-food input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
}

.new-food button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 3px;
}

.new-food button:hover {
  background-color: #218838;
}
</style>
