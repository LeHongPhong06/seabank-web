"use server";
import { fetchAdviseRegister } from "@/apis/advise-register";

export const actionsFormRegisterConsulting = async (formData: any) => {
  const res = await fetchAdviseRegister(formData);
  return res;
};
