import { ClientContext } from "@/app/contexts";
import { useContext } from "react";

export const CardList = () => {
  const { clients } = useContext(ClientContext);

  return (
    <>
      <p>CardlistPage</p>
      <div>sadfasfasdf</div>
    </>
  );
};
