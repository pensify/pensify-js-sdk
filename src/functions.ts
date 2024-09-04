import { PensifyConfig } from "./types";
import "./style.css";

export function launchPensifyApp({ apiKey }: PensifyConfig) {
  console.log(`Your API Key is ${apiKey}`);

  document.querySelector<HTMLDivElement>("#pensify-root")!.innerHTML = `
    <div>
      <p>Pensify App</p>
    </div>
    `;
}
