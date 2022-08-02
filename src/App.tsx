import React, {useEffect} from 'react';
import './App.css';
import ProcessImage from "./components/ProcessImage";
import {useState} from "react";
import './index.css'

function App() {
    const [valeur,setValeur]= useState<any>(null);
    //---------------------------------------------------------------------------------------
    /**const [val,setval]= useState(null);
    function emo (){
        let leng = valeur.FaceDetails[0].Emotions.length
        for (let i = 0; i < leng; i++) {
            let emotional = valeur.FaceDetails[0].Emotions[i].Type
            return emotional;
        }
    }
    //<div className="col-sm-6 py-2"><h6>emotion: <span className="text-secondary"><br/> Type : {valeur!==null && emo().toString()} <br/> Conf : {valeur!==null && valeur.FaceDetails[0].Emotions[0].Confidence}</span></h6></div>
    *///---------------------------------------------------------------------------------------
    const [style,setStyle]= useState<any>(null);
    const [Boundingbox, setBoundingbox]=useState<any>(null);
    useEffect(()=>{
        if (Boundingbox != null){
            let width = document.getElementById('daa')!.offsetWidth;
            let height = document.getElementById('daa')!.offsetHeight;
            setStyle({
                "marginLeft":Boundingbox.Left * height + "px",
                "marginTop":Boundingbox.Top * width + "px",
                "width":Boundingbox.Width * width + "px",
                "height":Boundingbox.Height * height + "px"
            })
        }
    },([Boundingbox]))
  return (
      <>
          <div className="container-fluid" id="about">

              <div className="position-relative d-flex align-items-center justify-content-center mb-lg-5">
                  <h1 className="text-uppercase text-dark"> AWS <br/> </h1>
                  <h1 className="text-uppercase text-primary"> <br/> rekognition </h1>
              </div>

                  <div className="container col-10">
                      <div className="row align-items-center">

                          <div className="col-lg-5 pb-4 pb-lg-0 ">
                              <div className="cardin " id="daa">
                                  {
                                      (style!=null?
                                                (<div style={style}></div>)
                                            :(<></>)
                                      )
                                  }
                              </div>
                              <img className=" rounded w-100 h-100" id="imageId" alt=""/>
                          </div>

                          <div className="col-lg-7">

                              <div className="row mb-3 ">

                                  <div className="col-sm-6 py-2">
                                      <h6> carre :
                                          <span className="text-secondary">
                                              <br/> Width : {valeur!==null && valeur.FaceDetails[0].BoundingBox.Width}
                                              <br/> Height : {valeur!==null && valeur.FaceDetails[0].BoundingBox.Height}
                                              <br/> Left : {valeur!==null && valeur.FaceDetails[0].BoundingBox.Left}
                                              <br/> Top : {valeur!==null && valeur.FaceDetails[0].BoundingBox.Top}
                                          </span>
                                      </h6>
                                  </div>

                                  <div className="col-sm-6 py-2">
                                      <h6>Age:
                                          <span className="text-secondary">
                                            <br/> Low : {valeur!==null && valeur.FaceDetails[0].AgeRange.Low}
                                            <br/> High : {valeur!==null && valeur.FaceDetails[0].AgeRange.High}
                                          </span>
                                      </h6>
                                  </div>

                                  <div className="col-sm-6 py-2">
                                      <h6>emotion:
                                          <span className="text-secondary">
                                              <br/> Type : {valeur!==null && valeur.FaceDetails[0].Emotions[0].Type.toString()}
                                              <br/> Conf : {valeur!==null && valeur.FaceDetails[0].Emotions[0].Confidence}
                                          </span>
                                      </h6>
                                  </div>
                                  <div className="col-sm-6 py-2">
                                      <h6>lunette:
                                          <span className="text-secondary">
                                              <br/> Value : {valeur!==null && valeur.FaceDetails[0].Eyeglasses.Value.toString()}
                                              <br/> Conf : {valeur!==null && valeur.FaceDetails[0].Eyeglasses.Confidence}
                                          </span>
                                      </h6>
                                  </div>
                                  <div className="col-sm-6 py-2">
                                      <h6>sourire:
                                          <span className="text-secondary">
                                              <br/> Value : {valeur!==null && valeur.FaceDetails[0].Smile.Value.toString()}
                                              <br/> Conf : {valeur!==null && valeur.FaceDetails[0].Smile.Confidence}
                                          </span>
                                      </h6>
                                  </div>
                                  <div className="col-sm-6 py-2">
                                      <h6>Barbe:
                                          <span className="text-secondary">
                                              <br/> Value : {valeur!==null && valeur.FaceDetails[0].Beard.Value.toString()}
                                              <br/> Conf : {valeur!==null && valeur.FaceDetails[0].Beard.Confidence}
                                          </span>
                                      </h6>
                                  </div>
                                  <div className="col-sm-6 py-2">
                                      <h6>genre:
                                          <span className="text-secondary">
                                              <br/>value : {valeur!==null && valeur.FaceDetails[0].Gender.Value.toString()}
                                              <br/> Conf : {valeur!==null && valeur.FaceDetails[0].Gender.Confidence}
                                          </span>
                                      </h6>
                                  </div>
                                  <div className="col-sm-6 py-2">
                                      <h6>yeux ouverts:
                                          <span className="text-secondary">
                                                <br/> Value : {valeur!==null && valeur.FaceDetails[0].EyesOpen.Value.toString()}
                                                <br/> Conf : {valeur!==null && valeur.FaceDetails[0].EyesOpen.Confidence}
                                          </span>
                                      </h6>
                                  </div>
                                  <div className="col-sm-6 py-2">
                                      <h6>levres ouvertes:
                                          <span className="text-secondary">
                                                <br/> Value : {valeur!==null && valeur.FaceDetails[0].MouthOpen.Value.toString()}
                                                <br/> Conf : {valeur!==null && valeur.FaceDetails[0].MouthOpen.Confidence}
                                          </span>
                                      </h6>
                                  </div>
                                  <div className="col-sm-6 py-2">
                                      <h6>qualite de l'image:
                                          <span className="text-secondary">
                                                <br/> Brightness : {valeur!==null && valeur.FaceDetails[0].Quality.Brightness.toString()}
                                                <br/> Sharpness : {valeur!==null && valeur.FaceDetails[0].Quality.Sharpness}
                                          </span>
                                      </h6>
                                  </div>
                                  <div className="col-sm-6 py-2">
                                      <h6> moustache:
                                          <span className="text-secondary">
                                                <br/> Value : {valeur!==null && valeur.FaceDetails[0].Mustache.Value.toString()}
                                                <br/> Conf : {valeur!==null && valeur.FaceDetails[0].Mustache.Confidence}
                                          </span>
                                      </h6>
                                  </div>
                              </div>

                              <div className="container">
                                  <div className="row">

                                      <div className="col-6">
                                          <label className="btn col-lg-7 btn-outline-success" htmlFor="fileToUpload">launch</label>
                                              <input onChange={(e)=>
                                                  {ProcessImage(e,setValeur);
                                                      let imageId = document.getElementById("imageId") as HTMLImageElement ;
                                                          if (imageId != null) {
                                                              if (e?.target?.files != null) {
                                                                  let file = e?.target?.files[0]
                                                                  imageId.src = URL.createObjectURL(file);
                                                              }
                                                          }
                                                      }
                                                  }
                                             hidden id="fileToUpload" type="file" name="fileToUpload"></input>
                                      </div>

                                      <div className="col-6">
                                          <a href="" className="btn col-lg-7 btn-outline-danger" >reset</a>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      </>
  );
}

export default App;
