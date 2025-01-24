export const createNaverReviewUrl = (title: string) => {
  return `https://section.blog.naver.com/Search/Post.naver?pageNo=1&rangeType=ALL&orderBy=sim&keyword=${encodeURIComponent(title)}`;
};
