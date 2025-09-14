import {alovaInstance} from "@/api";
import type {RequestBody} from "alova";

export const loginApi = <T>(data: RequestBody) => {
  return alovaInstance.Post<T>('/api/auth/login', data)
}
