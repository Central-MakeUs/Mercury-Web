export interface BookRecordWriteProgressStepProps {
  progress?: number;
  onNext: (progress: number) => void;
}

export default function BookRecordWriteProgressStep(_props: BookRecordWriteProgressStepProps) {
  return <div>ProgressStep</div>;
}
