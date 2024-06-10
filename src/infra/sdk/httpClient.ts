export const httpClient = {
  get: async <T>(
    endpoint: string,
    config?: RequestInit
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        {
          method: 'GET',
          ...config,
        }
      );
      return handleResponse<T>(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

const handleResponse = async <T>(
  response: Response
): Promise<ApiResponse<T>> => {
  const data = await response.json();

  if (!response.ok) {
    return {
      status: response.status,
      data: null as any,
      error: data.message || 'Something went wrong',
    };
  }

  return {
    status: response.status,
    data,
  };
};

const handleError = (error: any): ApiResponse<any> => {
  return {
    status: 500,
    data: null,
    error: error.message || 'Something went wrong',
  };
};

export interface ApiResponse<T = any> {
  status: number;
  data: T;
  error?: string;
}
