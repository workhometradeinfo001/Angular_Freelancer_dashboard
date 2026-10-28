import { isPlatformBrowser, JsonPipe } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";


export class StorageService {

    private platformId = inject(PLATFORM_ID);

    saveData(key: string, value: any): void{
        if(isPlatformBrowser(this.platformId)){
            localStorage.setItem(key, JSON.stringify(value));
        }
    };

    getData<T>(key: string): T | null {
        if(isPlatformBrowser(this.platformId)){
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        }
        return null;
    };

    removeData(key: string): void {
        if(isPlatformBrowser(this.platformId)){
            localStorage.removeItem(key);
        }
    };

    clearData(): void {
        if(isPlatformBrowser(this.platformId)){
            localStorage.clear();
        }
    };


}