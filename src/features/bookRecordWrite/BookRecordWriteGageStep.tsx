export interface BookRecordWriteGageStepProps {
  gage?: number;
  onNext: (gage: number) => void;
}

export default function BookRecordWriteGageStep(_props: BookRecordWriteGageStepProps) {
  return <div>GageStep</div>;
}
