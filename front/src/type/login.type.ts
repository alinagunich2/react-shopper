export interface LoginResponse {
  success: boolean;
  name: string;
  token: string;
  errors?: string[];
}
