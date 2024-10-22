// global.d.ts
declare global {
  interface Window {
    gtag?: GtagFunction;  // Make gtag optional
    dataLayer?: Array<Record<string, any> | [string, ...unknown[]]>;  // Allow for both Record and tuple
  }
}

type GtagFunction = {
  (command: 'config', targetId: string, config?: GtagConfig): void;
  (command: 'js', date: Date): void;
  (...args: [string, ...unknown[]]): void;  // Fallback for any other cases
};

interface GtagConfig {
  page_path?: string;
  [key: string]: unknown;
}

export {};
