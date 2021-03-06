import { connect } from 'react-redux';
import { createServer, joinServer, getServers, selectServer } from '../../../actions/server_actions';
import ServerIndex from './server_index';
import { openDefServerModal,closeModal, openJoinServerModal, openCreateServerModal } from '../../../actions/ui_actions';
import { logout } from '../../../actions/session_actions';


const msp = (state) => {
  return {
  servers: Object.values(state.entities.servers),
  modal: state.ui.modal,
  selected: state.ui.server.id,
  user: state.session.currentUser,
  selServer: state.entities.servers[state.ui.server.id]
} };

const mdp = dispatch => ({
  createServer: server => dispatch(createServer(server)),
  openDefModal: () => dispatch(openDefServerModal),
  closeModal: () => dispatch(closeModal),
  openJoinModal: () => dispatch(openJoinServerModal),
  openCreateServerModal: () => dispatch(openCreateServerModal),
  getServers: ()=> dispatch(getServers()),
  joinServer: (invite) => dispatch(joinServer(invite)),
  logout: () => dispatch(logout()),
  selectServer: (id) => dispatch(selectServer(id)),
});

export default connect(msp, mdp)(ServerIndex);