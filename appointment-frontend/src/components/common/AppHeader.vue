<template>
  <v-app-bar
    dark
    fixed
    height="64"
  >
    <v-img
      class="mx-2 bc-logo"
      :src="($vuetify.breakpoint.xs) ? require('@/assets/img/gov3_bc_logo_mobile.png') : require('@/assets/img/gov3_bc_logo.png')"
      max-width="132"
      contain
      @click="goTo('home')"
    ></v-img>
    <v-toolbar-title>Service BC Appointments <v-chip pill color='success'>Alpha</v-chip></v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="!isAuthenticated">
      <div class='d-flex'>
        <v-btn
          dark
          outlined
          class="mr-3"
          min-width="90"
          @click="goTo('register')"
          >
          Register
        </v-btn>
        <v-btn
          light
          min-width="90"
          @click="goTo('login')"
          >
          Login
        </v-btn>
      </div>
    </template>
    <template v-else>
      <SignedUser :username="username"></SignedUser>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { AccountModule, AuthModule } from '@/store/modules'
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import SignedUser from './SignedUser.vue'

@Component({
  components: {
    SignedUser
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapGetters('account', ['username'])
  }
})
export default class AppHeader extends Vue {
  private readonly isAuthenticated!: boolean
  private readonly username!: string

  async mounted () {
  }

  login () {
    this.$router.push('/login')
  }
  register () {
    this.$router.push('/login')
  }
  private goTo (page) {
    switch (page) {
      case 'register':
      case 'login': this.$router.push('/login')
        break
      case 'home': this.$router.push('/')
        break
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";

.v-app-bar {
  background-color: $BCgovBlue5 !important;
  border-bottom: 2px solid $BCgovGold5 !important;
}
.user-name {
  font-weight: 600 !important;
  text-transform: uppercase !important;
}
.bc-logo {
  cursor: pointer;
}
</style>
