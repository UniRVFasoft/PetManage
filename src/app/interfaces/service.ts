export interface Service {
	id?: string
	services: string[]
	service_cost: number | null
	tutor_name: string
	tutor_address: string
	pet_name: string
	pet_gender: string
	pet_age: number | null
	pet_size: string
	pet_color: string[]
	pet_image: string
	additional_info: string
	created_at: Date
	ind_finalizado: boolean
}
