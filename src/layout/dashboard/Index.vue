<template>
<div class="row">
<div class="col-sm-4 offset-4">
  <card class="card" title="Área Restrita">
    <div>
      <form @submit.prevent>
        <div>
            <fg-input type="text"
                      label="Login"
                      placeholder="Login"
                      v-model="user.login">
            </fg-input>

            <fg-input type="password"
                      label="Senha"
                      placeholder="Senha"
                      v-model="user.senha">
            </fg-input>
        </div>


        <div class="text-center">
          <!-- <p-button type="success"
                    round
                    @click.native.prevent="login">
            entrar
          </p-button> -->
          <router-link :to="{path:'/agenda'}" class="btn btn-success">entrar</router-link>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        login: "",
        senha: ""
      }
    };
  },
  methods: {
    login() {
      //alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
