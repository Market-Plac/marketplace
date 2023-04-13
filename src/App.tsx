import { useEffect, useState } from 'react'
import { getdata } from './api/axios'
import './App.css'
import { useNumberState } from './store/store'

type Types = {
	id: number
	email: string
}
const App = () => {
	const values = useNumberState(state => ({ email: state.email }))
	console.log(values)
	const [newData, setNewData] = useState<Array<Types>>([])
	const getUsers = async () => {
		const data = await getdata()
		setNewData(data?.data.data)
	}
	console.log(newData)
	useEffect(() => {
		getUsers()
	}, [])

	return (
		<div>
			{newData.map(data => (
				<h1 key={data.id} className="text-red-700">
					{data.email}
				</h1>
			))}
		</div>
	)
}

export default App
