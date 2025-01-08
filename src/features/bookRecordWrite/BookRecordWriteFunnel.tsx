import { useFunnel } from "@use-funnel/browser";
import type { BookRecordWriteGageStepProps } from "./BookRecordWriteGageStep";
import type { BookRecordWriteSearchStepProps } from "./BookRecordWriteSearchStep";
import type { BookRecordWriteTextStepProps } from "./BookRecordWriteTextStep";

type OmitOnNext<T> = Omit<T, "onNext">;

export const BookRecordWriteFunnel = () => {
  const _funnel = useFunnel<{
    SearchStep: OmitOnNext<BookRecordWriteSearchStepProps>;
    TextStep: OmitOnNext<BookRecordWriteTextStepProps>;
    GageStep: OmitOnNext<BookRecordWriteGageStepProps>;
  }>({
    id: "@bookrecordwrite",
    initial: {
      context: {},
      step: "SearchStep",
    },
  });
  return <div>BookRecordWriteFunnel</div>;
};
