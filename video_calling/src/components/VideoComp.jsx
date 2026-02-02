import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoComp = () => {
  const { roomID } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      if (!roomID || !containerRef.current) {
        console.warn("Missing roomID or containerRef");
        return;
      }

      const appID = 116721452;
      const serverSecret = '017e5237ba6c6069eeec393b447dd664';

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        'GuestUser'
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Personal Link',
            url: `${window.location.protocol}//${window.location.host}/room/${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // Or OneONoneCall
        },
      });
    };

    myMeeting();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [roomID]);

  return (
    <div
      ref={containerRef}
      className="myCallContainer"
      style={{ width: '100vw', height: '100vh', backgroundColor: '#f0f0f0' }}
    />
  );
};

export default VideoComp;
