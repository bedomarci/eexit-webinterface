import Vue from 'vue'

export const SAVING_PAYLOAD: string = 'SAVING_PAYLOAD'
export const PAYLOAD_SAVED: string = 'PAYLOAD_SAVED'
export const DEVICE_ONLINE: string = 'DEVICE_ONLINE'
export const DEVICE_OFFLINE: string = 'DEVICE_OFFLINE'

export const START_TIMER: string = 'START_TIMER'
export const STOP_TIMER: string = 'STOP_TIMER'
export const TIMER_EXPIRED: string = 'TIMER_EXPIRED'

export const LANGUAGE_CHANGED: string = 'LANGUAGE_CHANGED'

class EventBus extends Vue {
}

export default new EventBus()
