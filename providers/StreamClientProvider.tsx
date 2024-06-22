import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setvideoClient] = useState<StreamVideoClient></StreamVideoClient>();

    useEffect(()=>{
        if(!isLoaded || !user ) return:
        if(!apiKey) throw new Error ('Stream API key missing')
        
        const client = new StreamVideoClient(
            apiKey,
            user:{
                id: user?.id,
                name:user?.username || user?id,
                image:user?.imgUrl,
            },
            tokenProvider
        )
    })

  return {
    <StreamVideo client={VideoClient}>
  };
};
export default StreamVideoProvider;
