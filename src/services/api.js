import axios from "axios";

axios.defaults.baseURL = "https://635b92e88aa87edd914b6651.mockapi.io";

export async function addMaterial(values) {
  const response = await axios.post("/my-materials", values);
  return response.data;
}

export const getMaterials = async () => {
  const response = await axios.get("/my-materials");
  return response.data;
};

export const deleteMaterial = async (id) => {
  const response = await axios.delete(`/my-materials/${id}`);
  return response.data;
};

export const updateMaterial = async (fields) => {
  const response = await axios.put(`/my-materials/${fields.id}`, fields);
  return response.data;
};
