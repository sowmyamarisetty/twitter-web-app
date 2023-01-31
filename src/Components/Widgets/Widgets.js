import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterMentionButton,
  TwitterHashtagButton,
  TwitterFollowButton,
} from "react-twitter-embed";
import WhoToFollow from "./WhoToFollow";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" className="input" />
      </div>
      {/* <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="cleverqazi" />
        <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "saurabhnemade" }}
        />
        <TwitterMentionButton screenName={"saurabhnemade"} />
        <TwitterHashtagButton tag={"cybersecurity"} />
        <TwitterFollowButton />
      </div> */}
      <div className="who_to__follow">
          <WhoToFollow />
      </div>
    </div>
  );
}

export default Widgets;
