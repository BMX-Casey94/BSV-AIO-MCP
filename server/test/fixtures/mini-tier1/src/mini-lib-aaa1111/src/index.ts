export function miniHash(input: string): string {
  return `hashed:${input}`;
}

export class MiniClient {
  lookup(topic: string): Promise<string[]> {
    return Promise.resolve([topic]);
  }
}

export const MINI_VERSION = 1;
