import React, { useEffect, useRef,useState } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios';


function App() {
  const videoRef = useRef(null);
  let stream;


const [attendance_registered, setattendance_registered] = useState('')

var rollno=''










  useEffect(() => {
    const startWebcam = async () => {
      try {
        const video = videoRef.current;
        const str = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        video.srcObject = str;
        stream = str;
      } catch (error) {
        console.error(error);
      }
    };

    const getLabeledFaceDescriptions = async () => {
      const labels = ['captain_america', 'iron_man', '120CH0099'];
      return Promise.all(
        labels.map(async (label) => {
          const descriptions = [];
          for (let i = 1; i <= 2; i++) {
            const img = await faceapi.fetchImage(`./labels/${label}/${i}.png`);
            const detections = await faceapi
              .detectSingleFace(img)
              .withFaceLandmarks()
              .withFaceDescriptor();
            if (detections) {
              descriptions.push(detections.descriptor);
            }
          }
          return new faceapi.LabeledFaceDescriptors(label, descriptions);
        })
      );
    };

    const startFaceRecognition = async () => {
      try {
        await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        await startWebcam();

        const labeledFaceDescriptors = await getLabeledFaceDescriptions();
        const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);

        const video = videoRef.current;
        const canvas = faceapi.createCanvasFromMedia(video);
        document.body.append(canvas);

        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(canvas, displaySize);

        const intervalId = setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(video)
            .withFaceLandmarks()
            .withFaceDescriptors();

          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );

          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

          const results = resizedDetections.map((d) =>
            faceMatcher.findBestMatch(d.descriptor)
          );

          results.forEach((result, i) => {
            const box = resizedDetections[i].detection.box;
            const drawBox = new faceapi.draw.DrawBox(box, {
              label: result.toString(),
            });

            if (result.label !== 'unknown') {
              rollno=result.label
              // console.log(result.label);
              clearInterval(intervalId);
              if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
              }
              if (canvas && canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
              }
              const videoElement = videoRef.current;
              videoElement.remove();
              setattendance_registered(<h1>Your Attendance is registered</h1>)
            
              const messageData = {
                message: rollno
              };
              
              (async () => {
                try {
                  const response = await axios.post('http://localhost:5000', messageData);
                  console.log(response.data); // Handle the successful response
                } catch (error) {
                  console.error('Error sending message:', error);
                  // Handle the error and provide appropriate feedback to the user
                }
              })();
            

            
            
            
            }

            drawBox.draw(canvas);
          });
        }, 500);
      } catch (error) {
        console.error(error);
      }
    };

    startFaceRecognition();
  }, []);













  return (
    <>
      <video
        ref={videoRef}
        id="video"
        width="600"
        height="450"
        autoPlay
        playsInline
      ></video>
    
    
    
    
    <div id='faceapi_registered_text'>{attendance_registered}</div>

   {console.log(rollno)}
    </>
  );
}

export default App;
