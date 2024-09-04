import { PensifyConfig } from "./types";

export function launchPensifyApp({ apiKey }: PensifyConfig) {
  console.log(`Your API Key is ${apiKey}`);
}
