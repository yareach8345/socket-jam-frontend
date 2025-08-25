<script setup lang="ts">
import { getRequiredQuery } from '~/utils/query'

const password = ref('')

const roomNumber = getRequiredQuery('roomNumber')

const joinRoom = () => {
  console.group('Join room')
  console.log('Try join to the room #', roomNumber)
  console.log('Password: ', password.value)
  console.groupEnd()
}

const toMainPage = () => {
  navigateTo({ name: 'index' })
}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <div>
      <h2 class="font-bold text-2xl">Input Password</h2>
      <p>Please enter the password to join the room #{{roomNumber}}</p>
    </div>
    <form
        @submit.prevent="joinRoom"
        class="flex flex-col gap-3 items-center"
    >
      <label>
        Password<br>
        <input
            class="text-lg p-1 rounded-md"
            type="password" placeholder="Password"
            autocomplete="off"
            required
            autofocus
            v-model="password"
        />
      </label>
      <div class="space-x-3">
        <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 transition-colors text-white py-1 px-2 rounded-md"
        >
          Join
        </button>
        <button
            @click="toMainPage"
            type="button"
            class="bg-red-500 hover:bg-red-700 transition-colors text-white py-1 px-2 rounded-md"
        >
          Back
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>