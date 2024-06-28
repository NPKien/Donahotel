<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="user">User:</label>
        <input type="text" v-model="user" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      password: '',
      error: '',
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch(`${this.apiUrl}/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: this.user,
            password: this.password
          })
        });
        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('idadmin', data.idadmin);
          this.$router.push(`/${data.idadmin}`);
          setTimeout(() => {
            window.location.reload();
          }, 100);
        } else {
          this.error = data.message;
        }
      } catch (error) {
        console.error('Error logging in:', error);
        this.error = 'An error occurred. Please try again later.';
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
form div {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
p {
  color: red;
}
</style>
