import React from 'react';
class Search extends React.Component {
render(){
return (
    <form>
    <input type="text" placeholder="Search..." onChange={(event)=>(this.props.filterFunc(event))}/>
    </form>
);
}
}


export default Search;