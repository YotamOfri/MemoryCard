import "../styles/VideoBackground.css"; // Create a CSS file for styling
import backgroundVideos from "../resources/backgroundV.mp4";
const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={backgroundVideos} type="video/mp4" />
      </video>
    </div>
  );
};
export default VideoBackground;
