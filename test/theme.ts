import { createTheme } from "../dist";
import { defaultLightBrand, radius, spacing, shadow } from "./data";

export const testTheme = () => {
  createTheme({
    themeName: "Ridvan Theme",
    darkTokens: defaultLightBrand,
    lightTokens: defaultLightBrand,
    radiusTokens: radius,
    shadowTokens: shadow,
    spacingTokens: spacing,
    startedPage: `    
        <h1>Token-Wizard Library README</h1>
    
        <p>The Token-Wizard library simplifies token management on various blockchains. Create, deploy, and interact with
            custom tokens effortlessly.</p>
    
    
        <h2>Features</h2>
    
        <ul>
            <li><strong>Token Creation:</strong> Easily create custom tokens on supported blockchains.</li>
            <li><strong>Blockchain Agnostic:</strong> Supports Ethereum, Binance Smart Chain, and more.</li>
            <li><strong>User-Friendly:</strong> Intuitive interface for developers and non-developers.</li>
            <li><strong>Smart Contracts:</strong> Follows best practices for secure and efficient deployment.</li>
            <li><strong>Customizable:</strong> Modify token properties and extend functionality.</li>
            <li><strong>Community:</strong> Join our community for help and collaboration.</li>
        </ul>
    
        <h2>Getting Started</h2>
    
        <ol>
            <li>Install: <code>npm install token-wizard</code></li>
            <li>Import: <code>const TokenWizard = require('token-wizard');</code></li>
            <li>Create Token: <code>const token = TokenWizard.createToken(properties);</code></li>
            <li>Deploy Token: <code>const deployed = TokenWizard.deployToken(token, blockchain);</code></li>
            <li>Interact: <code>const instance = deployed.contractInstance;</code></li>
        </ol>
    
        <h2>Contributing</h2>
    
        <p>Contributions are welcome. Review our guidelinee before getting started.</p>
    
        <h2>License</h2>
    
        <p>Project is licensed under MIT License.</p>
    
        <hr>
    
        <p>Happy token creation with Token-Wizard! Reach out to our community for assistance.</p>
    
     `,
  }).toScss("./test/test.scss");
};
