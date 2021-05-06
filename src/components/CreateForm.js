import React from 'react';
class CreateForm extends React.Component {
render(){
return (
    <form>
    <input type="text" placeholder="Name" onChange={(event)=>(this.props.filterFunc(event))}/>
    <input type="text" placeholder="Name" onChange={(event)=>(this.props.filterFunc(event))}/>
    <input type="text" placeholder="Name" onChange={(event)=>(this.props.filterFunc(event))}/>
    <input type="text" placeholder="Name" onChange={(event)=>(this.props.filterFunc(event))}/>
    </form>
);
}
}


export default CreateForm;