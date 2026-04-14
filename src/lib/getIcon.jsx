import call from "@/assets/call.png";
import text from "@/assets/text.png";
import video from "@/assets/video.png";
import meetup from "@/assets/meetup.png";

const iconMap = {
  call,
  text,
  video,
  meetup,
};

const getIcon = (type) => {
  return iconMap[type?.toLowerCase()] || text;
};

export default getIcon;