export interface BookRecordWriteTextStepProps {
  text?: string;
  onNext: (text: string) => void;
}

export default function BookRecordWriteTextStep(_props: BookRecordWriteTextStepProps) {
  return <div>TextStep</div>;
}
