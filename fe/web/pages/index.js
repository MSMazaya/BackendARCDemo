import axios from 'axios';
import React from 'react';

export default function Home() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    const getData = async () => {
      const { data: user } = await axios.get('http://localhost:8080/')
      setData(user)
    }
    getData()
  })
  return (
    <div className="body">
      <h2>Sebelum</h2>
      <table>
        <tr>
          <th>id</th>
          <th>nama</th>
          <th>jurusan</th>
        </tr>
        {
          data.map((user, idx) => <>
            <tr>
              <td>{idx}</td>
              <td>{user.name}</td>
              <td>{user.jurusan}</td>
            </tr>
          </>)
        }
      </table>
    </div>
  )
}
