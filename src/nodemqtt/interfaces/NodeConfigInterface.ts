export default interface NodeConfig {
  id: string,
  commonName: string,
  description: string,
  baseTopic: string,
  initState: string,
  states: string[],
  targetTime: number,
}
