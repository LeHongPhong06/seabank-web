import { AuthenType } from "@/configs/authenType";
import { API } from "@/types/api";
import { ApiUtils } from "./api-config";

export const fetchAdviseRegister = async (data: any): Promise<any> => {
  try {
    // const res = await fetch("https://bpm.gogroup.vn/ms-cms-service/api/rest/process", {
    //   method: "POST",
    //   body: ApiUtils.baseRequest(AuthenType.registerConsulting, { ...data }),
    //   headers: { "Content-Type": "application/json" },
    // });
    // return res.json();
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Muhammad",
        lastName: "Ovi",
        age: 250,
      }),
    });
    return await res.json();
  } catch (error) {
    throw String(error);
  }
};
