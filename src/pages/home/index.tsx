import { memo, useState } from 'react';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';
import Drawer from '@/components/drawer';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  return (
    <div className='Home'>
      <HomeContext.Provider value={[state, setState]}>
        <Drawer>asd</Drawer>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
