import { ENV, authFetch } from "@/app/utils";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.USERS_ME}?populate=photo`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
