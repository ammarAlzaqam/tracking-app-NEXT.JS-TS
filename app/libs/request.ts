type AuthPath = "register" | "login";

interface AuthValues {
  [key: string]: any;
}

export default async function authApiRequest(
  values: AuthValues,
  path: AuthPath
): Promise<any> {
  try {
    const response = await fetch(`http://localhost:3000/api/auth/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }

    return data;
  } catch (e) {
    console.error(`[authApiRequest] Error on ${path}: ${e}`);
    return {
      success: false,
      message: (e as Error).message,
    };
  }
}

export interface Transaction {
  _id: string
  amount: number;
  name: string;
  startDate?: Date;
}

export const getTransactionsApiRequest = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/transaction", {
      method: "GET",
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }
    return data;
  } catch (e) {
    console.error(`[getTransactions] Error: ${e}`);
    return {
      success: false,
      message: (e as Error).message,
    };
  }
};

export const addTransactionsApiRequest = async (values: AuthValues) => {
  try {
    const response = await fetch("http://localhost:3000/api/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }
    return { data, success: true };
  } catch (e) {
    console.error(`[addTransactions] Error: ${(e as Error).message}`);
    return {
      success: false,
      message: (e as Error).message,
    };
  }
};

export const deleteTransactionsApiRequest = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/transaction/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }
    return { data, success: true };
  } catch (e) {
    console.error(`[DeleteTransactions] Error: ${(e as Error).message}`);
    return {
      success: false,
      message: (e as Error).message,
    };
  }
};