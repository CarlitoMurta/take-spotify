export interface AuthConfig {
  client_id: string;
  response_type: 'token' | string;
  redirect_uri: string;
  state: string;
  show_dialog: boolean;
  scope: Array<string> | string;
}
