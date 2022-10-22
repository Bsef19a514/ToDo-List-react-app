import AddIcon from '@mui/icons-material/Add';


const AddItem=(props)=>{
    return(
        <div className="newItemDiv">
            <input className="newItemInput" type="text" placeholder="Add New Item" onChange={props.onChange} value={props.value }/>
            <button  className="addButton" onClick={props.addItem}><AddIcon/></button>
        </div>
    )
}

export default AddItem