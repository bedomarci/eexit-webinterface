import mqtt from 'mqtt'
import Vuex from 'vuex'

export default class MQTTAgent {
  private _client: mqtt.MqttClient;
  private _store: any = null;

  set store (value: Vuex.Store) {
    this._store = value
  }

  get client (): mqtt.MqttClient {
    if (this._client === null) {
      throw new Error('Client was requested before initializing client connection')
    }
    return this._client
  }

  connect (options: any) : void{
    this._client = mqtt.connect(options)
    this._client.on('message', this.onMessage)
    this._client.on('connect', this.onConnect)
    this._client.on('reconnect', this.onReconnect)
    this._client.on('close', this.onClose)
    this._client.on('offline', this.onOffline)
  }

  subscribe (topic: string): void {
    this._client.subscribe(topic)
  }

  onMessage (topic: string, message: Buffer): void {
    console.log(message.toString())
  }
  onConnect (): void {
    console.log('connect')
  }
  onReconnect (): void {
    console.log('reconnect')
  }
  onClose (): void {
    console.log('close')
  }
  onOffline (): void {
    console.log('offline')
  }
}
