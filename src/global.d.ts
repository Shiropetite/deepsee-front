export {}

declare global {
    interface Window {
        appConfig?: {
            baseUrl?: string
        }
    }
}
