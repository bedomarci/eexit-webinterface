import mqtt from 'mqtt'
import Vuex from 'vuex'

export default class MQTTAgent {
  private _client: mqtt.MqttClient;
  private _store: any = null;

  set store (value: any) {
    console.log('value')
    this._store = value
  }

  // set store (value: Vuex.Store) {
  //   console.log(this._store)
  //   this._store = value
  //   console.log(this._store)
  // }

  get client (): mqtt.MqttClient {
    if (this._client === null) {
      throw new Error('Client was requested before initializing client connection')
    }
    return this._client
  }

  connect (options: any): void {
    this._client = mqtt.connect(options)
    this._client.on('message', this.onMessage)
    this._client.on('connect', this.onConnect)
    this._client.on('reconnect', this.onReconnect)
    this._client.on('close', this.onClose)
    this._client.on('offline', this.onOffline)
  }

  subscribe (topic: string): void {
    console.log('subscribing to ' + topic)
    this._client.subscribe(topic)
  }

  onMessage (topic: string, message: Buffer): void {
    console.log(topic + ' - ' + message.toString())
    console.log(this._store)
    this._store.dispatch('nodes/message', { topic: topic, message: message.toString() })
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
