import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoComp = () => {
  const { roomID } = useParams();
  const containerRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const myMeeting = async () => {
      console.log("Room ID:", roomID);
      console.log("Container Ref:", containerRef.current);
      console.log("App ID from env:", import.meta.env.VITE_ZEGO_APP_ID);
      console.log("Server Secret from env:", import.meta.env.VITE_ZEGO_SERVER_SECRET);
      
      if (!roomID) {
        setError("Invalid room ID");
        setLoading(false);
        return;
      }

      // Wait a bit for container to be ready
      if (!containerRef.current) {
        setTimeout(() => {
          if (containerRef.current) {
            myMeeting();
          }
        }, 100);
        return;
      }

      const appID = parseInt(import.meta.env.VITE_ZEGO_APP_ID);
      const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

      console.log("Parsed App ID:", appID);
      console.log("Server Secret:", serverSecret);

      if (!appID || !serverSecret) {
        setError("Configuration error. Please check your environment variables.");
        setLoading(false);
        return;
      }

      try {
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
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
        });
        
        setLoading(false);
      } catch (err) {
        setError("Failed to join the room. Please try again.");
        setLoading(false);
        console.error(err);
      }
    };

    myMeeting();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [roomID]);

  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      {loading && (
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          zIndex: 9999
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #ec4899',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }} />
            <p style={{ marginTop: '20px', fontSize: '18px', color: '#666' }}>Joining room...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          zIndex: 9999
        }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2 style={{ color: '#dc2626', fontSize: '24px', marginBottom: '10px' }}>Error</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>{error}</p>
            <button
              onClick={() => window.location.href = '/'}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ec4899',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Go Back Home
            </button>
          </div>
        </div>
      )}
      
      <div
        ref={containerRef}
        className="myCallContainer"
        style={{ width: '100vw', height: '100vh', backgroundColor: '#f0f0f0' }}
      />
    </>
  );
};

export default VideoComp;
