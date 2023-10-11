export interface fbUser {
    id: string,
    displayName: string,
    photoUrl: string,
    preferences: {
        darkMode: boolean | null,
        syncDarkMode: boolean
    }
}