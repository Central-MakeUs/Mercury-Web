export const createNaverReviewUrl = (title: string) => {
  return `https://m.blog.naver.com/SectionPostSearch.naver?orderType=sim&searchValue=${encodeURIComponent(title)}`;
};
