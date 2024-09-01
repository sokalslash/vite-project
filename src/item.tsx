import './item.css'

function Item({ id, title, onClick }: {id: number, title: string; onClick: (id: number) => void}) {
  return (
    <div className="task">
      <button onClick={() => onClick(id)}>Удалить</button>
      <div>{title}</div>
    </div>
  )
}

export default Item;