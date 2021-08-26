import React from 'react';

interface IProps {
  route: {
    params: {
      name: string;
      type: string;
    };
  };
}

const MonsterScreen: React.FC<IProps> = (props: IProps) => {
  return <></>;
};

export default MonsterScreen;
