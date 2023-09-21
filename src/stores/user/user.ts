import { defineStore } from 'pinia';

interface Data {
  name: string;
  surname: string;
  email: string;
  //...
}

interface UserStore {
  data: Data;
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    data: {} as Data,
    token: null,
  }),
});