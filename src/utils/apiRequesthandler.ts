import cryptojs from "crypto-js";

const dns = require('dns');
//this keys are returned while you complete a successful merchant sign up 
const MerchantCode = process.env.MerchantCode
const clientSecret = process.env.clientSecret
const clientToken = process.env.clientToken

// set header data
export async function setHeader(data,Memberemail){
      //  const userData = await  getMerchantDetail()
        const timestamp = new Date().getTime().toString();
        const hmac = getApiSignatureTemp(data,timestamp ,clientSecret, clientToken )
       const headers = {
            Authorization: `Basic parole`,
            Authentication: `Basic ${clientToken}`,
            Apisignature: hmac.signature,
            timestamp:timestamp,
            Memberemail:Memberemail, // this is passed from the header 
            UserLanguage:'en',
            MerchantCode:MerchantCode,
          }
		return  headers
}

// hmac signature signing happens here
  function getApiSignatureTemp(
    data: any,
    timestamp: string,
    accessSecret: string,
    token: string
  ) :{signature: string, token: string} {
    let payload = new URLSearchParams(data).toString();

    const sigPayload = payload ? `${payload}&` : "";
    const sigText = `${sigPayload}timestamp=${timestamp}&api-key=${token}&api-secret=${accessSecret}`;

    if (!accessSecret) {
       throw  new  Error()
    }
      const signature = cryptojs
        .HmacSHA256(sigText, accessSecret)
        .toString(cryptojs.enc.Hex);

      return { signature, token };
    
  }