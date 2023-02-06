// pair brackets matcher
export const pbMatcher = {
  attachment: /!\[\[([^\]]+?\.(?:png|jpg|gif|webp|mp3|mp4|pdf))(?:\|(\d+))?\]\]/g,
  image: /!\[\[([^\]]+?\.(?:png|jpg|gif|webp))(?:\|(\d+))?\]\]/g,
  sound: /!\[\[([^\]]+?\.(?:mp3))(?:\|(\d+))?\]\]/g,
  video: /!\[\[([^\]]+?\.(?:mp4))(?:\|(\d+))?\]\]/g,
  pdf: /!\[\[([^\]]+?\.(?:pdf))(?:\|(\d+))?\]\]/g,
  md: /(?<!!)\[\[([^\]]+?)\]\]/g,
};
