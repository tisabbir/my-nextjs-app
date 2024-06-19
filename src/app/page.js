import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>This Is Next home </h1>
      <Counter />

      <Link href={"/about"}>
        <button className="btn btn-primary">About</button>
      </Link>
    </div>
  );
};

export default HomePage;
