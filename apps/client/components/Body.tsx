import { VideoPlayer } from "client/features/VideoPlayer";
import { Button } from "client/libs/shadcn/button";

export const Body: React.FC = () => (
  <div className="p-6 flex-col">
    <div className="flex flex-row">
      <Button variant="default" size="lg">
        Upload
      </Button>
    </div>
    <div>
      <VideoPlayer src="https://vjs.zencdn.net/v/oceans.mp4" />
    </div>
  </div>
);
