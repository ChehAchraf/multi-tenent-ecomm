import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant="elevated">I'am a button</Button>
      </div>
      <div>
        <Input placeholder="i'm an input"/>
      </div>
      <div>
        <Progress value={33}></Progress>
      </div>
      <div>
        <Textarea placeholder="enter the text" />
      </div>
    </div>
  );
}
