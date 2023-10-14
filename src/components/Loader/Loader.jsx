import { SpinnerCircular } from 'spinners-react';

export const Loader = () => {
  return (
    <SpinnerCircular
      size={70}
      thickness={100}
      speed={100}
      color="#36ad47"
      secondaryColor="rgba(0, 0, 0, 0.44)"
    />
  );
};
