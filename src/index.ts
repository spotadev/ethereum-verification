import { ethers } from 'ethers';
import * as dotenv from 'dotenv';

dotenv.config();

interface VerifyAddressDto {
    address: string;
    signature: string;
}

async function verifyAddress({ address, signature }: VerifyAddressDto): Promise<boolean> {
  const HASH_STRING = process.env.HASH_STRING!;
  const msgHash = ethers.utils.hashMessage(HASH_STRING);
  const msgHashBytes = ethers.utils.arrayify(msgHash);
  
  const recoveredAddress = ethers.utils.recoverAddress(
      msgHashBytes,
      signature,
  );

  console.log('recoveredAddress', recoveredAddress);
  console.log('address', address);
  
  return address === recoveredAddress;
}

function main() {
  const address = process.env.ADDRESS;
  const signature = process.env.SIGNATURE;  

  if (address && signature ) {
    
    verifyAddress({ address, signature }).then(isValid => {
      console.log(`Is the signature valid? ${isValid}`);
    }).catch(error => {
        console.error('Error verifying signature:', error);
    });
  }
  else {
    console.error("Remember to populate your .env file");
  }
}

main();
