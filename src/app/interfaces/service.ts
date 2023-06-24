export interface Service {
	id?: number
	services: string[]
	service_cost: number | null
	tutor_name: string
	tutor_address: string
	pet_name: string
	pet_gender: string
	pet_age: number | null
	pet_size: string
	pet_color: string[]
	additional_info: string
	created_at: Date
}
