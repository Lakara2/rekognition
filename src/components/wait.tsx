import {durationSecondsType} from "aws-sdk/clients/sts";
import {AWSError} from "aws-sdk";

function Wa (time:durationSecondsType,err:AWSError){
    if (time!>=15 ){
        let newVar = err && err.stack;
        return newVar;
    }else{
        return "succesfull";
    }
    console.log(time);
    return time;
}
export default Wa;