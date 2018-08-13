// TODO
// var GroceryListItem = (props) => {
// 	var onListItemClick = (event) => {
// 		console.log('I got clicked');
// 	};

//   return (
// 	  <ul>
// 			<li onClick={onListItemClick}>{props.items[0]}</li>
// 			<li>{props.items[1]}</li>
// 			<li>{props.items[2]}</li>
// 		</ul>
// 	);
// };

class GroceryListItem extends React.Component {
  constructor(props) {
  	super(props);
  }
  
  render() {
  	return (
  		<li>{this.props.item}</li>
  	);
  }

}

// var GroceryList = (props) => (
// 	<ul>
// 		{props.items.map(item =>
// 			<GroceryListItem item={item} />
// 			)}
// 	</ul>	
// );


var GroceryList = (props) => (
	<ul>
		{props.items.map(item => 
			<GroceryListItem item={item} />
		)}
	</ul>
);

// var GroceryList = () => (
//     <GroceryListItem items={['Milk', 'Cereal', 'Bananas']}/>  
// );





ReactDOM.render(<GroceryList />, document.getElementById("app"));
