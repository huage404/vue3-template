import {alovaInstance} from "@/api";

export const loginApi = <T>(data) => {
  return alovaInstance.Post<T>('/api/auth/login', data)
}
