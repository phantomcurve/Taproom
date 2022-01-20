import React from 'react';
import TapList from "./TapList";
import KegDetail from "./KegDetail";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      createNewKeg: false,
      masterTapList: [],
      selectedKeg: null,
      editing: false
    };
  }

  showListOrForm = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterTapList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newmasterTapList = this.state.masterTapList.concat(newKeg);
    this.setState({
      masterTapList: newmasterTapList,
      formVisibleOnPage: false
    });
  }

  handleEditClick= () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedmasterTapList = this.state.masterTapList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterTapList: editedmasterTapList,
      editing: false,
      selectedKeg: kegToEdit
    });
  }

  handleBuyClick = () => {
    const selectedKeg = this.state.selectedKeg;
    const pintToBuy = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft - 1});
    const editedmasterTapList = this.state.masterTapList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(pintToBuy);
    this.setState({
      masterTapList: editedmasterTapList,
      selectedKeg: pintToBuy
    });
  }

  //Restock Large Keg
  handleRestockClick = () => {
    const selectedKeg = this.state.selectedKeg;
    const kegToRestock = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft + 124});
    const editedmasterTapList = this.state.masterTapList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToRestock);
    this.setState({
      masterTapList: editedmasterTapList,
      selectedKeg: kegToRestock
    });
  }


  render() {
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.editing){
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Tap List"
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState =
      <KegDetail
        keg = {this.state.selectedKeg}
        onClickingEdit = {this.handleEditClick}
        onClickingBuy = {this.handleBuyClick}
        onClickingRestock = {this.handleRestockClick}/>;
      buttonText = "Return to Tap List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList TapList={this.state.masterTapList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add New Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-warning" style={{marginBottom: '20px'}} onClick={this.showListOrForm}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;