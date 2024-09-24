import { ENV } from "@/app/utils";

export class Client {
  async getClientsById({ id }) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.CLIENTS}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async createClient(data) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.CLIENTS}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            ...data,
          },
        }),
      });

      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
