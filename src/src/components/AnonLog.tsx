import AWS, {Credentials} from 'aws-sdk';

//Provides anonymous log on to AWS services
function AnonLog() {
    AWS.config.region = process.env.REACT_APP_REGION as string
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.REACT_APP_POOL_ID as string
    });
    // Make the call to obtain credentials
    (AWS.config.credentials as Credentials).get(function ():void {
         const accessKeyId = AWS.config.credentials?.accessKeyId;
         const secretAccessKey = AWS.config.credentials?.secretAccessKey;
         const sessionToken = AWS.config.credentials?.sessionToken;
    });
}
export default AnonLog;