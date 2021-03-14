<template>
  <div>
    <v-alert type="error" :value="!errMsg==''" transition="scale-transition">
      {{ errMsg }}
    </v-alert>
    <v-container>
      <v-card class="container login-form">
        <v-title class="title mx-3"> <v-icon color="blue lighten-3" class="mb-1 mr-3">account_box</v-icon>Sign In Your Account</v-title>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
            required
            class="mx-3 my-8"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
            class="mx-3 my-8"
          ></v-text-field>

          <div class="text-right mt-8 mb-4 mr-3">
            <v-btn color="error" @click="reset" class="mr-5">Reset</v-btn>
            <v-btn color="success" @click="login" :disabled="!valid">Sign In</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  components: {
  },
  data() {
    return {
        valid: true,
        username: "",
        usernameRules: [
            v => !!v || 'Username is required'
        ],
        password: "",
        passwordRules: [
            v => !!v || 'Password is required'
        ],
        errMsg: ""
    }
  },
  mounted() {
  },
  computed: {
  },
    methods: {
        reset() {
            this.$refs.form.reset()
        },
        login() {
            axios.post('/api/backstage/sign-in', {
                username: this.username,
                password: this.password
            })
            .then(
                res => {
                    if(res.status === 200) {
                        console.log(res)
                        localStorage.setItem('token', res.data.token);
                        this.$router.push('/');
                    }
                },
                err => {
                    console.log(err.response)
                    this.errMsg = err.response.data.msg;
                }
            )
        }
    }
}
</script>

<style scoped>
.login-form {
  margin-top: 20%;
}
</style>
