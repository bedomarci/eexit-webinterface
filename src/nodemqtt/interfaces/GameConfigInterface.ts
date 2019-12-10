import ServerConfig from './ServerConfigInterface'
import NodeConfig from './NodeConfigInterface'
import MissionConfig from './MissionConfigInterface'

export default interface GameConfig {
  server: ServerConfig,
  gameId: string,
  gameName: string,
  targetTime: number,
  defaultLanguage: string,
  languages: string[],
  languageDependentNodes: string[],
  missions: MissionConfig[],
  nodes: NodeConfig[]
}
