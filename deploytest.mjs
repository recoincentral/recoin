import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
import {config} from 'dotenv';
config();

const sdk = ThirdwebSDK.fromPrivateKey('devnet', process.env.PRIVATE_KEY);

const metadata = {
    symbol: 'REC',
    description: 'Learning Crypto',
    name: 'ReCoin',
    initialSupply: 100000
};

const address = await sdk.deployer.createToken(metadata);

console.log('Address ->', address);
console.log('The Contract is Ready! Great Job Ethan!')

const token = await sdk.getToken(address);
const supply =await token.totalSupply();

console.log('Supply ->', supply);
