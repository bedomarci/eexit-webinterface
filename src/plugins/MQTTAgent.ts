import mqtt from 'mqtt'

export default class MQTTAgent {
  private _client: any = null;
  private _store: any = null;

  set store (value: any) {
    this._store = value
  }

  get client (): mqtt.MqttClient {
    if (this._client === null) {
      throw new Error('Client was requested before initializing client connection')
    }
    return this._client
  }

  registerTopicPrefix (prefix : string) : void {
    this._store.commit('nodes/setBaseTopicPrefix', prefix)
  }

  registerNode (baseTopic : string) : void{
    this._store.commit('nodes/addBaseTopic', baseTopic)
  }

  connect (options: any): void {
    this._client = mqtt.connect(options)
    this._client.on('message', this.onMessage.bind(this))
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
    this._store.dispatch('nodes/storeMessage', { topic: topic, message: message.toString() })
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
