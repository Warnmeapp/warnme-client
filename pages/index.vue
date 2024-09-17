<script setup lang="ts">
import { getAuth, signOut } from "firebase/auth";

const user: Ref<_Nullable<User>> = useCurrentUser();

const logout = async () => {
  try {
    await signOut(getAuth());
    navigateTo("/auth");
  } catch (error) {
    console.error("Error during sign out", error);
  }
};
</script>

<template>
  <div>
    <h1>{{ $t("welcome") }} {{ user?.email }}</h1>

    <v-btn color="primary" @click="logout">
      <v-icon icon="mdi:mdi-logout" class="mr-1" />
      {{ $t("signout") }}
    </v-btn>
  </div>
</template>
