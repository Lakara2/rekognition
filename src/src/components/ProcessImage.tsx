import DetectFaces from "./DetectFaces";

function ProcessImage(e:any,setValeur:any) {
    new Response(e.target?.files.item(0)).arrayBuffer().then((data) => DetectFaces(data,setValeur));
};

export default ProcessImage;
