import { ref } from 'vue';

// Variable reactiva global para almacenar la información del usuario
// Por defecto, el usuario es null (no logueado)
export const user = ref(null);

export const loginUser = (userData) => {
  user.value = userData;
};

export const logoutUser = () => {
  user.value = null;
};