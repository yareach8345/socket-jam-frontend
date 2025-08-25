<script setup lang="ts">
const userName = ref('')
const roomNumber = ref('')

const joinRoom = () => {
  console.log(userName.value, roomNumber.value)
}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <div>
      <h2 class="font-bold text-2xl">Welcome</h2>
      <p class="text-lg">Please enter your <b>username</b> and <b>room number</b></p>
    </div>
    <form
        @submit.prevent="joinRoom"
        class="flex flex-col gap-3 items-center"
    >
      <label>
        Username<br>
        <input
            class="text-lg p-1 rounded-md"
            type="text" placeholder="Username"
            required
            autofocus
            v-model="userName"
        />
      </label>
      <label>
        Room number<br>
        <input
            class="text-lg p-1 rounded-md"
            type="text" placeholder="Room number"
            required
            v-model="roomNumber"
        />
      </label>
      <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 transition-colors text-white py-1 px-2 rounded-md"
      >
        Join
      </button>
    </form>
  </div>
</template>

<style scoped>

</style>