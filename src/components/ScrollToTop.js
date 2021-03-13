import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      // if ('scrollRestoration' in history) {
      //   history.scrollRestoration = 'manual';
      // }
    }
  };

  render = () => this.props.children;
}

export default withRouter(ScrollToTop);
