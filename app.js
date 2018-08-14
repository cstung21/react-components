var GroceryListItem = (props) => (
	<li>{props.item}</li>
)

var GroceryList = (props) => (
	<ul>
	  {props.items.map(item => (
	  	<GroceryListItem item={item}/>
	  ))}
	</ul>
);

var App = () => (
	<div>
		<h2>My Grocery List</h2>
		<GroceryList items={['milk','cereal','celery']}/>
	</div>
);

ReactDOM.render(<App />, document.getElementById("app"));