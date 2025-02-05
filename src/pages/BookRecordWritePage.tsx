import { SafeArea } from "@repo/bridge-web/SafeArea";
import { BookRecordWriteFunnel } from "~/features/bookRecordWrite/BookRecordWriteFunnel";

export default function BookRecordWritePage() {
  return (
    <SafeArea className=" w-full h-full" edges={["top", "bottom", "right", "left"]}>
      <BookRecordWriteFunnel />
    </SafeArea>
  );
}
