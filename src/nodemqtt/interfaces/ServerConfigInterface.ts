export default interface ServerConfig {
  host: string,
  port: number,
  username: string,
  rejectUnauthorized: boolean,
  protocol: string,
  password: string,
  clientId: string
}
