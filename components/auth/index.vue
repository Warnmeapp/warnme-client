<script setup lang="ts">
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useFirebaseAuth } from "vuefire";
import { AuthValidation } from "~/models/auth/auth";

const auth = useFirebaseAuth()!;

const invalidCredential = ref(null);

const { defineField, handleSubmit } = defineForm({
  validationSchema: AuthValidation,
  initialValues: {
    isLogin: true,
    email: "presteus.sparkling@gmail.com",
  },
});

const [isLogin] = defineField("isLogin");
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [passwordConfirm, passwordConfirmAttrs] = defineField("passwordConfirm");

const onSubmit = handleSubmit(async () => {
  try {
    invalidCredential.value = null;
    if (isLogin.value) {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } else {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
    }
    navigateTo("/");
  } catch {
    invalidCredential.value =
      "The supplied auth credential is incorrect, malformed or has expired.";
  }
});
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-center"> Warn Me </v-card-title>
          <v-card-text>
            <v-alert
              v-if="invalidCredential"
              closable
              variant="tonal"
              color="error"
              icon="$error"
            >
              {{ invalidCredential }}
            </v-alert>

            <v-form class="mt-4" @submit.prevent="onSubmit">
              <v-text-field
                v-model.trim="email"
                type="email"
                :label="$t('email')"
                v-bind="emailAttrs"
              />
              <v-text-field
                v-model.trim="password"
                type="password"
                :label="$t('password')"
                v-bind="passwordAttrs"
              />
              <v-text-field
                v-if="!isLogin"
                v-model.trim="passwordConfirm"
                type="password"
                :label="$t('passwordConfirm')"
                v-bind="passwordConfirmAttrs"
              />
              <v-btn type="submit" color="primary" block>
                <v-icon v-if="isLogin" icon="mdi:mdi-login" class="mr-1" />
                <v-icon v-else icon="mdi:mdi-account-plus" class="mr-1" />
                {{ $t(isLogin ? "signin" : "signup") }}
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn variant="text" @click="isLogin = !isLogin">
              {{ $t(isLogin ? "createAccount" : "alreadyHaveAccount") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
