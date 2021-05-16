import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../components/utilities";
import "@tensorflow/tfjs-backend-webgl";
import { signOut, useSession } from "next-auth/client";

const Home = (): JSX.Element => {
  const [session] = useSession();
  const [threeMenuOn, setThreeMenuOn] = useState(false);
  const [settingsMenuOn, setSettingsMenuOn] = useState(false);
  const webcamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [streaming, setStreaming] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const [microphoneOn, setMicrophoneOn] = useState(false);

  const [showLeftBar, setShowLeftBar] = useState(true);
  const [showRightBar, setShowRightBar] = useState(true);

  const threeMenuIcon = threeMenuOn ? "3dActive" : "3d";
  const settingsMenuIcon = settingsMenuOn ? "settingsActive" : "settings";

  const videoIcon = videoOn ? "videoCameraActive" : "videoCamera";
  const streamingIcon = streaming ? "streamingActive" : "streaming";
  const microphoneIcon = microphoneOn ? "microphoneActive" : "microphone";

  const usersIcon = showLeftBar ? "groupActive" : "group";
  const messageIcon = showRightBar ? "messageActive" : "message";

  const messageArray = [
    {
      message: "Hi",
      time: "",
    },
    {
      message: "Test",
      time: "",
    },
  ];

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net: any) => {
    const videoReference = webcamRef?.current?.video as HTMLVideoElement;
    const canvasReference = canvasRef?.current as HTMLCanvasElement;
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      videoReference.readyState === 4 &&
      net
    ) {
      //Get video properties
      const videoWidth = videoReference.videoWidth;
      const videoHeight = videoReference.videoHeight;
      //Set video width
      videoReference.width = videoWidth;
      videoReference.height = videoHeight;
      //Set canvas height
      canvasReference.width = videoWidth;
      canvasReference.height = videoHeight;
      // Make Detections
      const hand = await net.estimateHands(videoReference);
      // Draw mesh
      const ctx = canvasReference.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  // if (!user) {
  //   return <Error message="Please login first" to="/Login" where="Login" />;
  // }

  // eslint-disable-next-line no-console
  console.log("session: =-->", session);

  return (
    <Container showLeftBar={showLeftBar} streaming={streaming}>
      <div className="videoContainer">
        <div className="videoContainerInner">
          {showLeftBar && (
            <div className="videoMenuLeft">
              <div className="videoItem">D.G.Kodagoda</div>
              <div className="videoItem">Y.Abinaya</div>
              <div className="videoItem">Y.R.Kodagoda</div>
              <div className="videoItem">S.Kodagoda</div>
              <div className="videoItem">I.Kumarasinghe</div>
              <div className="videoItem">Thilina</div>
              <div className="videoItem">User1</div>
              <div className="videoItem">User2</div>
              <div className="videoItem">User3</div>
              <div className="videoItem">User4</div>
              <div className="videoItem">User5</div>
              <div className="videoItem">User6</div>
            </div>
          )}

          <div className="videoMenuMiddle">
            {videoOn ? (
              <>
                <Webcam ref={webcamRef} className="videoObject" />
                <canvas ref={canvasRef} className="canvasObject" />
              </>
            ) : (
              <div className="videoPlaceholder">
                <div className="userName">Duminda Kodagoda</div>
                <div className="userMessage">Your video is off!</div>
              </div>
            )}
          </div>
          {showRightBar && (
            <div className="videoMenuRight">
              <div className="chatItemCover">
                {messageArray.map((item, index) => (
                  <div className="chatItem" key={`chatItem-${index + 1}`}>
                    {item.message}
                  </div>
                ))}
              </div>
              <div className="chatInput">
                <input type="text" className="chatInputItem" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bottomBar">
        <div className="left">
          <span
            className="hoverIconCover"
            onMouseEnter={() => {
              setThreeMenuOn(true);
            }}
            onMouseLeave={() => {
              setThreeMenuOn(false);
            }}
          >
            <img
              src={`/images/${threeMenuIcon}.svg`}
              alt=""
              className="iconBottomBar"
            />
          </span>
          <span className="hoverIconCover">
            <img
              src={`/images/${settingsMenuIcon}.svg`}
              alt=""
              className="iconBottomBar"
              onMouseEnter={() => {
                setSettingsMenuOn(true);
              }}
              onMouseLeave={() => {
                setSettingsMenuOn(false);
              }}
            />
          </span>
        </div>
        <div className="middle">
          <img
            src={`/images/${videoIcon}.svg`}
            alt=""
            className="iconBottomBar"
            onClick={() => {
              const tempState = videoOn;
              setVideoOn(!tempState);
            }}
          />
          <img
            src={`/images/${streamingIcon}.svg`}
            alt=""
            className="iconBottomBar"
            onClick={() => {
              setStreaming(!streaming);
            }}
          />
          <img
            src={`/images/${microphoneIcon}.svg`}
            alt=""
            className="iconBottomBar"
            onClick={() => {
              setMicrophoneOn(!microphoneOn);
            }}
          />
        </div>
        <div className="right">
          <img
            src={`/images/${usersIcon}.svg`}
            alt=""
            className="iconBottomBar"
            onClick={() => {
              setShowLeftBar(!showLeftBar);
            }}
          />
          <img
            src={`/images/${messageIcon}.svg`}
            alt=""
            className="iconBottomBar"
            onClick={() => {
              setShowRightBar(!showRightBar);
            }}
          />
          {!!session && (
            <div className="signInCover">
              <img
                src={session?.user?.image || `/images/userImg.svg`}
                className="userImgIcon"
                alt=""
              />
              <div className="userData">
                <button className="signInOut" onClick={() => signOut()}>
                  Log out
                </button>
                {(session?.user?.email || session?.user?.name) && (
                  <div className="userName">
                    {session?.user?.email || session?.user?.name}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
const bottomBarHeight = 60;

type TContainerProps = { showLeftBar: boolean; streaming: boolean };
const Container = styled.div<TContainerProps>`
  background: #000;
  .videoContainer {
    height: calc(100vh - ${bottomBarHeight}px);
    padding: 20px;
    .videoContainerInner {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .videoMenuLeft {
      flex-grow: 0;
      flex-shrink: 0;
      width: 200px;
      height: 100%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      & {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .videoItem {
        flex-shrink: 0;
        flex-grow: 0;
        width: 100%;
        height: 200px;
        color: #fff;
        background: #333;
        border-radius: 10px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 900;
      }
    }
    .videoMenuMiddle {
      flex-grow: 1;
      height: 100%;
      width: 100%;
      margin: 0 20px;
      ${({ showLeftBar }): string =>
        showLeftBar ? `margin-left: 20px` : `margin-left: 0`};
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      position: relative;
      .videoObject {
        width: 100% !important;
        height: auto !important;
        transform: scaleX(-1);
      }
      .videoPlaceholder {
        background: #444;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        font-size: 3rem;
      }

      .canvasObject {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scaleX(-1);
      }
    }
    .videoMenuRight {
      flex-grow: 0;
      flex-shrink: 0;
      background: #333;
      width: 300px;
      height: 100%;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .chatItemCover {
        flex-grow: 1;
        font-size: 18px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding: 15px 15px 0px;
        .chatItem {
          display: inline-block;
          margin-bottom: 15px;
          border-radius: 10px 20px 20px 0px;
          color: #fff;
          background: #666;
          padding: 0.5em 1em;
          font-weight: 900;
        }
      }
      .chatInput {
        flex-grow: 0;
        flex-shrink: 0;
        border-top: 10px solid #000 !important;
        .chatInputItem {
          opacity: 1;
          border: none;
          outline: none;
          width: 100%;
          padding: 0.8em;
          background: #444 !important;
          background-image: none !important;
          border-radius: 0 0 10px 10px;
          font-size: 18px;
          color: #fff;
          font-weight: 900;
        }
      }
    }
  }
  .bottomBar {
    width: 100%;
    height: ${bottomBarHeight}px;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    .iconBottomBar {
      cursor: pointer;
      height: 40px;
      width: auto;
      margin: 0 10px;
    }
    .left {
      flex-grow: 1;
      .hoverIconCover {
        display: inline-block;
        margin: 0 10px;
      }
      .iconBottomBar {
        margin: 0;
      }
    }
    .middle {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
      padding: 10px 20px;
      border-radius: 10px;
      .iconBottomBar {
        height: 30px;
      }
    }
    .right {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .signInCover {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .signInOut {
      background: transparent;
      border: none;
      color: #000;
      cursor: pointer;
      border-radius: 20px;
      padding: 0.2em 1.5em;
      background: #fff;
      font-weight: 900;
    }

    .userImgIcon {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border: 3px solid #000;
      border-radius: 100%;
    }

    .userData {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .userName {
      color: #fff;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #ccc;
        left: 0;
        bottom: -1px;
        border-radius: 10px;
      }
    }
  }
`;

export default Home;
