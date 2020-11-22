export const AddedProduct = ({ setIsAdd }) => {
    return (
        <div>
            <p>Товар добавлен</p>
            <button onClick={() => setIsAdd(false)}>Добавить еще</button>
        </div>
    )
}