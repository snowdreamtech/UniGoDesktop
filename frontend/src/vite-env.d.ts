/// <reference types="vite/client" />

declare global {
  interface Window {
    WailsInvoke?: (message: string) => void;
    runtime?: {
      EventsOn(eventName: string, callback: (data: any) => void): void;
      EventsOff(eventName: string, ...additionalEvents: string[]): void;
      EventsOnce(eventName: string, callback: (data: any) => void): void;
      EventsEmit(eventName: string, ...optionalData: any[]): void;
      BrowserOpenURL(url: string): void;
      WindowStartDrag?(): void;
      WindowToggleMaximise?(): void;
      WindowMinimise?(): void;
      WindowShow?(): void;
      WindowHide?(): void;
      OnFileDrop?(callback: (x: number, y: number, paths: string[]) => void, useDropTarget?: boolean): void;
      OnFileDropOff?(): void;
    };
    go?: {
      main?: {
        App?: {
          Greet(name: string): Promise<string>;
          GetHelloInfo(): Promise<any>;
          GetSystemInfo(): Promise<any>;
          TestNetwork(targetUrl: string): Promise<any>;
          CheckUpdate(): Promise<any>;
          GetConfig(): Promise<any>;
          SaveConfig(cfg: any): Promise<any>;
          OpenURL(url: string): Promise<void>;
          ReloadAppMenu?(lang: string): Promise<void>;
        };
      };
    };
  }
}

export {};
