import AWS from "aws-sdk";
import AnonLog from "./AnonLog";

function detectFaces(imageData:object,setValeur:any) {
    AnonLog();
    let rekognition = new AWS.Rekognition();
    let params = {
        Image: {
            Bytes: imageData
        },
        Attributes: [
            'ALL',
        ]
    };
    rekognition.detectFaces(params, function (err, data) {
        if (err) {
            console.log("Misy olana ara teknika isika : "+err, err.stack);
        }
        else {
             setValeur(data)
        }});
}

export default detectFaces;