import type React from 'react';
import './InventoryTable.css';

export interface IItem {
    id: number,
    name: string,
    sku: string,
    category: string,
    quantity: number,
    price: number
}

export interface IInventoryTableProps {
    items: IItem[],
    onEdit: (item: IItem) => void,
    onDelete: (id: number) => void
}

const money = (num: number) => new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD"
}).format(num);


const InventoryTable: React.FC<IInventoryTableProps> = ({ items, onEdit, onDelete }) => {
    return (
        <div className='table-wrap'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Category</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className={item.quantity < 10 ? "low" : ""}>
                            <td>{item.name}</td>
                            <td>{item.sku}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>{money(item.price)}</td>
                            <td>{money(item.price * item.quantity)}</td>
                            <td className='actions'>
                                <button className="btn" onClick={() => onEdit(item)}>Edit</button>
                                <button className="btn danger" onClick={() => onDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                {items.length === 0 && (
                    <tbody>
                        <tr className="empty"><td colSpan={7}>No items yet</td></tr>
                    </tbody>
                )}
            </table>
        </div>
    );
}

export default InventoryTable;