<template>
  <div class="container" :class="rightPanel ? 'right-panel-active' : ''">
    <div class="form-container sign-up-container">
      <form @submit.prevent="register">
        <h1>TẠO TÀI KHOẢN</h1>
        <input v-model="userRegister.fullName" type="text" placeholder="Tên" />
        <input
          id="emailRegisterField"
          v-model="userRegister.email"
          type="email"
          placeholder="Email"
        />
        <input
          v-model="userRegister.password"
          type="password"
          placeholder="Mật khẩu"
        />
        <button>Đăng Ký</button>
      </form>
    </div>
    <div class="form-container sign-in-container">
      <form @submit.prevent="login">
        <h1>ĐĂNG NHẬP</h1>
        <input v-model="userLogin.email" type="email" placeholder="Email" />
        <input
          v-model="userLogin.password"
          type="password"
          placeholder="Mật khẩu"
        />
        <a href="#">Quên mật khẩu ?</a>
        <button>Xác Nhận</button>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Người dùng mới ?</h1>
          <p>
            Hãy đăng ký thành viên để sử dụng toàn bộ các chức năng của hệ thống
            !!!
          </p>
          <button class="ghost" @click="rightPanel = false">Đăng Nhập</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Đã là thành viên ?</h1>
          <p>Chào mừng bạn đăng nhập trở lại hệ thống !!!</p>
          <button class="ghost" @click="rightPanel = true">Đăng Ký</button>
        </div>
      </div>
    </div>
    <v-snackbar v-model="snackbar" color="success" :timeout="4000">
      Đăng ký thành công
      <v-btn dark flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { RepositoryFactory } from '@/repository/RepositoryFactory'
const userRepository = RepositoryFactory.get('user')
export default {
  data() {
    return {
      rightPanel: false,
      userLogin: {
        email: null,
        password: null
      },
      userRegister: {
        email: '',
        fullName: '',
        password: ''
      },
      snackbar: false
    }
  },
  methods: {
    async login() {
      if (this.userLogin.email != null && this.userLogin.password != null) {
        const { data } = await userRepository.login(
          this.userLogin.email,
          this.userLogin.password
        )
        if (data.success) {
          this.$store.commit(
            'setUserToken',
            `${data.data.tokenType} ${data.data.accessToken}`
          )
        }
      }
    },
    register() {
      const isValidEmail = document
        .getElementById('emailRegisterField')
        .checkValidity()
      if (this.userRegister.email && isValidEmail) {
        const method = 'POST'
        const url = this.$store.state.api.register
        const data = this.userRegister

        this.callAxios(method, url, data)
          .then(data => {
            this.snackbar = true
            console.log(data.data)
          })
          .catch(error => console.error(error))
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #8093f0;
  background-color: #8093f0;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #8093f0;
  background: -webkit-linear-gradient(to right, #607d8b, #8093f0);
  background: linear-gradient(to right, #8093f0, #607d8b);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
</style>
