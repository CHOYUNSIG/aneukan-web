import api from "../api";

export const login = async (id: string, password: string) => {
  try {
    const response = await api.get(
      `/homecam/register?id=${id}&password=${password}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

