import { Link } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function Home() {
  const { items } = useStock()

  const diversity = items.length
  const inventoryTotal = items.reduce((sum, item) => +sum + +item.quantity, 0)

  const today = new Date()
  const limitDate = new Date()
  limitDate.setDate(limitDate.getDate() - 10)
  const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
  const recentTotal = recentItems.length

  const lowQuantityItems = items.filter((item) => item.quantity < 10)
  const lowQuantityTotal = lowQuantityItems.length

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Diversity of items
          <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Total inventory
          <span>{inventoryTotal}</span>
        </div>
        <div className="dashboard-card">
          Recent items
          <span>{recentTotal}</span>
        </div>
        <div className="dashboard-card">
          Items running out
          <span>{lowQuantityTotal}</span>
        </div>
      </div>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr><th>Recent items</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              {recentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td><Link to={`/items/${item.id}`} className="button is-small">See</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Items running out</th>
                <th>Qt.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lowQuantityItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><Link to={`/items/${item.id}`} className="button is-small">See</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}