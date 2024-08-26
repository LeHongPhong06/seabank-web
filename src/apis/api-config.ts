import { bodyBuilder, headerRequest } from "@/configs/util";

export class ApiUtils {
  static baseRequest(authenType: string, body?: Record<string, unknown>): string {
    return JSON.stringify({
      header: headerRequest(),
      body: bodyBuilder(authenType, body),
    });
  }
}
