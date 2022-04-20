import { useRouter } from "next/router";

const Desc = () => {
  const router = useRouter();

  return (
    <div>
      <p>Description de pokemon</p>
    </div>
  );
};

export default Desc;
