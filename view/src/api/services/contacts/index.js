import { BASE_INSTANCE } from "@/api/constant"

export const getContactsServices = () => {
    return BASE_INSTANCE.get('/contact')}

export const editContactsServices = (data) => {
    return BASE_INSTANCE.put('/contact',{data})
}
export const deleteContactsServices = (id) => {
    return BASE_INSTANCE.post('/contact',{id})
}