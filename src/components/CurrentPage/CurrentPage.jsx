export const CurrentPage = ({ current, total }) => {
  return (
    <>
      <p>
        {current + 1}/{total.length}
      </p>
    </>
  );
};
