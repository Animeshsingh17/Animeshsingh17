import React, { useId } from "react";

const Bye = () => {
  const id = useId();
  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" id={id} />
      </form>
    </>
  );
};

export default Bye;
