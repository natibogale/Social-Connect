import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import {dummyPosts} from "../../dummyData";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {dummyPosts.map((p) => {
          return <Posts key={p.id} post={p} />
        }
    
        )
        
        }
        

 
      </div>
    </div>
  );
}

export default Feed;
