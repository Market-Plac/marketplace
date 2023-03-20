import axios from 'axios'
export const config = axios.create({
	baseURL: import.meta.env.VITE_URL_REACT
})

export const getdata = () => {
	try {
		const data = config.get('/')
		return data
	} catch (error) {
		console.log(error)
	}
}
export const createData = async (data: object) => {
	const res = await config.post('/', data)
	console.log(res)
}
export const updateData = async (id: number, data: object) => {
	const res = await config.post(`/${id}`, data)
	console.log(res)
}
export const deleteData = async (id: number) => {
	const res = await config.delete(`/${id}`)
	console.log(res)
}
