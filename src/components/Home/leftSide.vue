<template>
  <div class="left-side">
    <div id="hood">
      <h1>ZULA'DA SEÇME <span style="font-size: 55px">ÖZGÜRLÜĞÜ!</span></h1>
    </div>
    <div id="lower-hood">
      EFSANE SİLAHLAR VE KARAKTERLERİ ŞİMDİ SEÇ,OYNAMAYA BAŞLA!
    </div>

    <div class="register-form">
      <div id="registerhood">HESABINI OLUŞTUR OYNAMAYA BAŞLA</div>
      <div class="username">
        <i class="fas fa-user"></i>
        <input
          type="text"
          v-model="userdata.name"
          placeholder="Kullanıcı Adı"
        />
      </div>
      <div class="mail">
        <i class="far fa-envelope"></i>
        <input type="mail" v-model="userdata.email" placeholder="E-posta" />
      </div>
      <small v-if="mailinvalid" class="text-danger"
        >Lütfen mail adresinizi doğru şekilde yazınız.</small
      >
      <div class="password">
        <i class="fas fa-key"></i>
        <input
          type="password"
          v-model="userdata.password"
          placeholder="Şifre"
        />
      </div>
      <small v-if="Invalid" class="text-danger"
        >Lütfen kullanıcı adı ve parolayı yazınız.</small
      >
      <div class="contracts">
        <div>
          <input
            type="checkbox"
            v-model="contractstatus"
            id="contract1"
            name="contract1"
          />
          <label for="vehicle1">
            Kullanıcı sözleşmesi ve kurallarını okudum kabul ediyorum
          </label>
        </div>
        <div>
          <input type="checkbox" id="contract2" name="contract2" />
          <label for="vehicle1">
            Duyuru ve bilgilendirme e-postası almak istiyorum
          </label>
        </div>
      </div>
      <div class="buttons">
        <input
          type="button"
          class="registerbutton"
          value="HESABIMI OLUŞTUR"
          @click="register"
          :disabled="contractstatus == false"
        />
        <input type="button" class="dowloadbutton" value="ÜCRETSİZ İNDİR" />
      </div>
    </div>
    <img src="@/assets/images/zula-logo.png" class="zulalogo" alt="zula logo" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      Invalid: false,

      mailinvalid: false,
      contractstatus: false,
      userdata: {
        name: "",
        email: "",
        password: "",
      },
      msg: [],
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    register() {
      if (this.reg.test(this.userdata.email)) {
        this.mailinvalid = false;
        if (this.userdata.name !== "" && this.userdata.password !== "") {
          const userdatas = { ...this.userdata };
          this.$store.dispatch("postdata", userdatas);
        } else {
          this.Invalid = true;
        }
      } else {
        this.mailinvalid = true;
      }
    },
  },
  watch: {
    mailinvalid(value) {
      if (value) {
        setTimeout(() => {
          this.mailinvalid = false;
        }, 3000);
      }
    },
    Invalid(value) {
      if (value) {
        setTimeout(() => {
          this.Invalid = false;
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.left-side {
  max-width: 400px;
  #hood {
    h1 {
      color: #ffb100;
      font-size: 75px;
      font-weight: 800;
      line-height: 90%;
    }
  }
  #lower-hood {
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-top: 15px;
  }
  .register-form {
    #registerhood {
      color: #eda500;
      font-size: 20px;
      font-weight: 600;
      margin-top: 15px;
    }
    .text-danger {
      color: red;
      margin-left: 44px;
    }
    .username,
    .mail,
    .password {
      position: relative;
      margin-top: 5px;

      i {
        position: absolute;
        top: 0;
        left: 0;
        height: 40px;
        width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #eda500;
        border-right: 1px solid #eda500;
      }

      input {
        color: #eda500;
        height: 40px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #eda500;
        background-color: rgba(black, 0.72);
        font-size: 14px;
        padding: 0 15px 0 44px;

        &::placeholder {
          padding-left: 15px;
          color: #ffb100;
        }
      }
    }

    .contracts {
      margin-top: 10px;
      color: white;
      padding-top: 15px;
    }
    .buttons {
      input {
        width: 60%;
        height: 40px;
        margin-top: 10px;
        color: white;
        font-size: 18px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        border-radius: 0 20px;
        &:hover {
          opacity: 0.7;
        }
      }
      .registerbutton {
        background-image: linear-gradient(#ffb100, #8f6401);
        &:disabled {
          cursor: help;
          opacity: 0.4;
        }
      }
      .dowloadbutton {
        background-image: linear-gradient(#00b506, #007d04);
      }
    }
  }
  .zulalogo {
    margin-top: 50px;
  }
}
@media screen and (max-width: 500px) {
  .left-side {
    margin-left: auto;
    width: 100%;
  }
}
</style>
