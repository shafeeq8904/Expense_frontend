const ExpenseItem =(props) =>{

    

    const handleDelete = () => {
        props.onDelete(props.id)
    }
    return(
        <>
        <div className="expense-item-container">
            <div className={`expense-item ${props.amount >0 ? 'positive' : 'negative'}`}>
                <div className="expense-title">{props.title}</div>
                <div className="expense-amount">{props.amount}</div>

            </div>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
        
        </>
    )
}
export default ExpenseItem