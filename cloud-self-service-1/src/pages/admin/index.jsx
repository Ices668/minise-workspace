import Content from './components/AdminContent';
import Store from './store';
import { StoreContext } from './context';
import { createWidget } from '../../common/utils/widget-util';

import '../../index.css';

const Widget = createWidget(Content, StoreContext, Store);

export default Widget;
