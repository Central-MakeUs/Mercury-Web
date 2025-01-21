import { http, HttpResponse } from "msw";
import { baseUrl } from "../../constants";

export const mockGetRecordsHandler = [
  http.get(`${baseUrl}/records`, () => {
    return HttpResponse.json({
      code: 200,
      message: "요청이 성공적으로 처리되었습니다.",
      data: {
        records: [
          {
            recordId: 1,
            createdAt: "2024-01-01T10:00:00",
            updatedAt: "2024-01-20T10:00:00",
            book: {
              title: "달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다",
              coverImageUrl:
                "https://image.aladin.co.kr/product/24512/70/cover200/k392630952_2.jpg",
              author: "이미예 지음",
              isbn13: "9791165341909",
              link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=245127051&amp",
            },
            detailUpdatedAt: "2024-01-20T15:30:00",
            latestMemoContent: "이것은 메모",
            updatedGauge: 75,
          },
          {
            recordId: 2,
            createdAt: "2024-01-04T10:00:00",
            updatedAt: "2024-01-05T10:00:00",
            book: {
              title: "달 러구트 꿈 백화점",
              coverImageUrl:
                "https://image.aladin.co.kr/product/24512/70/cover200/k392630952_2.jpg",
              author: "이미예 지음",
              isbn13: "9791165341909",
              link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=245127051&amp",
            },
            detailUpdatedAt: "2024-01-20T15:30:00",
            latestMemoContent: "최근 메모 내용",
            updatedGauge: 80,
          },
        ],
      },
    });
  }),
];
