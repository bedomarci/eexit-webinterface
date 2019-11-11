import Vue from 'vue'

export const SAVING_PAYLOAD: string = 'SAVING_PAYLOAD'
export const PAYLOAD_SAVED: string = 'PAYLOAD_SAVED'
export const DEVICE_ONLINE: string = 'DEVICE_ONLINE'
export const DEVICE_OFFLINE: string = 'DEVICE_OFFLINE'

class EventBus extends Vue {
}

export default new EventBus()
