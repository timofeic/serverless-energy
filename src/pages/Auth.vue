<template>
  <div class="auth">
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
  </div>
</template>
<script>
export default {
  name: 'MyComponent',
  props: [],
  data () {
    return {
      authConfig: {
          usernameAttributes: 'email',
          signUpConfig: {
            header: 'My Customized Sign Up',
            hideAllDefaults: true,
            defaultCountryCode: '1',
            signUpFields: [
              {
                label: 'email',
                key: 'username',
                required: true,
                displayOrder: 1,
                type: 'string',
              },
              {
                label: 'Password',
                key: 'password',
                required: true,
                displayOrder: 2,
                type: 'password'
              },
              {
                label: 'Phone Number',
                key: 'phone_number',
                required: true,
                displayOrder: 3,
                type: 'string'
              },
            ]
          }
        }
      }
    }
  }
</script>
<style scoped>
</style>