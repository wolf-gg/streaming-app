import { Body } from "client/components/Body";
import { Header } from "client/components/Header";
import { Separator } from "client/libs/shadcn/separator";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <Separator />
      <Body />
    </div>
  );
};

export default Page;
